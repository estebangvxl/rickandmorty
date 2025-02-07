import Arrow from "@/assets/icons/arrow";
import Close from "@/assets/icons/close";
import ButtonFilter from "@/components/ui/ButtonFilter";
import CharacterCard from "@/components/ui/characterCard";
import { Button } from "@/components/ui/core/button";
import { HStack } from "@/components/ui/core/hstack";
import { Icon } from "@/components/ui/core/icon";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
} from "@/components/ui/core/modal";

import { Text } from "@/components/ui/core/text";
import { VStack } from "@/components/ui/core/vstack";
import Footer from "@/components/ui/Footer";
import InputSearch from "@/components/ui/InputSearch";
import LoadMore from "@/components/ui/LoadMore";
import Logo from "@/components/ui/Logo";
import NavBar from "@/components/ui/NavBar";
import { charactersWithPagination } from "@/services/character";
import { Link } from "expo-router";
import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { FlatList, Pressable, ScrollView, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";

type State = {
  gender: string;
  specie: string;
  status: string;
};

type Action =
  | { type: "setGender"; gender: string }
  | { type: "setSpecie"; specie: string }
  | { type: "setStatus"; status: string }
  | { type: "clear_filters" }
  | {
      type: "set_filters";
      payload: { gender: string; status: string; specie: string };
    };

const characterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setGender":
      return { ...state, gender: action.gender };
    case "setSpecie":
      return { ...state, specie: action.specie };
    case "setStatus":
      return { ...state, status: action.status };
    case "clear_filters":
      return { ...state, gender: "", status: "", specie: "" };
    case "set_filters":
      return {
        ...state,
        gender: action.payload.gender,
        status: action.payload.status,
        specie: action.payload.specie,
      };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(characterReducer, {
    gender: "",
    specie: "",
    status: "",
  });
  const [textFilter, setTextFilter] = useState("");
  const [characters, setCharacters] = useState<any[]>([]);
  const [pagination, setPagination] = useState(1);
  const gender_ = useRef("");
  const specie_ = useRef("");
  const status_ = useRef("");
  const [openModal, setOpenModal] = useState(false);

  const openFilter = useCallback(() => {
    setOpenModal(true);
  }, []);
  const closeFilter = useCallback(() => {
    setOpenModal(false);
  }, []);

  const getCharacter = async (
    page: number,
    name: string,
    species: string,
    gender: string,
    status: string
  ) => {
    const data = await charactersWithPagination(
      page,
      name,
      species,
      gender,
      status
    );
    setCharacters([...characters, ...data]);
  };

  useEffect(() => {
    getCharacter(
      pagination,
      textFilter,
      state.specie,
      state.gender,
      state.status
    );
  }, []);

  useEffect(() => {
    setPagination(1);
    getCharacter(
      pagination,
      textFilter,
      state.specie,
      state.gender,
      state.status
    );
  }, [textFilter, state]);

  useEffect(() => {
    getCharacter(
      pagination,
      textFilter,
      state.specie,
      state.gender,
      state.status
    );
  }, [pagination]);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ScrollView>
          <>
            <NavBar />
            <VStack className="mt-8">
              <Logo />
            </VStack>
            <VStack className="gap-5 mt-8">
              <InputSearch
                onChangeText={(text) => {
                  setCharacters([]);
                  setTextFilter(text);
                }}
              />
              <ButtonFilter onPress={openFilter} />
            </VStack>
            <FlatList
              scrollEnabled={false}
              className="mt-10"
              ListHeaderComponentClassName="w-full gap-10"
              contentContainerClassName=" items-center gap-10 mt-10"
              data={characters}
              keyExtractor={() => `${Date.now()}-${Math.random()}`}
              renderItem={({ item }) => (
                <Link
                  href={{
                    pathname: "/[id]",
                    params: { id: item.id },
                  }}
                >
                  <CharacterCard
                    name={item.name}
                    id={item.id}
                    img={item.image}
                    type={item.species}
                  />
                </Link>
              )}
            />
            <View className="mt-10">
              <LoadMore
                onPress={() => {
                  setPagination((v) => v + 1);
                }}
              />
            </View>
          </>
        </ScrollView>
        <Footer />
        <Modal isOpen={openModal} onClose={closeFilter}>
          <ModalBackdrop />
          <ModalContent className="w-80 justify-center items-center m-0">
            <ModalBody>
              <VStack className="gap-6">
                <HStack className="items-center justify-between">
                  <Text className="font-roboto-bold text-[20px]">Filters</Text>
                  <Pressable onPress={closeFilter}>
                    <Icon as={Close} className="w-5 h-5" />
                  </Pressable>
                </HStack>
                <SelectDropdown
                  onSelect={(selectedItem) => {
                    specie_.current = selectedItem;
                  }}
                  data={["human", "alien", "unknown"]}
                  renderButton={(selectedItem, isOpened) => {
                    return (
                      <HStack className="flex-row items-center justify-between h-[56px] border-2 border-gray-600 rounded-lg w-full px-3">
                        <Text>{selectedItem || state.specie || "Species"}</Text>
                        <Icon as={Arrow} className="w-[11px] h-[5px]" />
                      </HStack>
                    );
                  }}
                  renderItem={(item, index, isSelected) => {
                    return (
                      <VStack className="rounded-lg gap-3">
                        <Text>{item}</Text>
                      </VStack>
                    );
                  }}
                  dropdownStyle={{ display: "flex", gap: 10 }}
                />
                <SelectDropdown
                  onSelect={(selectedItem) => {
                    gender_.current = selectedItem;
                  }}
                  data={["female", "male", "genderless", "unknown"]}
                  renderButton={(selectedItem, isOpened) => {
                    return (
                      <HStack className="flex-row items-center justify-between h-[56px] border-2 border-gray-600 rounded-lg w-full px-3">
                        <Text>{selectedItem || state.gender || "Gender"}</Text>
                        <Icon as={Arrow} className="w-[11px] h-[5px]" />
                      </HStack>
                    );
                  }}
                  renderItem={(item, index, isSelected) => {
                    return (
                      <VStack className="rounded-lg gap-3">
                        <Text>{item}</Text>
                      </VStack>
                    );
                  }}
                  dropdownStyle={{ display: "flex", gap: 10 }}
                />

                <SelectDropdown
                  onSelect={(selectedItem) => {
                    status_.current = selectedItem;
                  }}
                  data={["alive", "dead", "unknown"]}
                  renderButton={(selectedItem, isOpened) => {
                    return (
                      <HStack className="flex-row items-center justify-between h-[56px] border-2 border-gray-600 rounded-lg w-full px-3">
                        <Text>{selectedItem || state.status || "Status"}</Text>
                        <Icon as={Arrow} className="w-[11px] h-[5px]" />
                      </HStack>
                    );
                  }}
                  renderItem={(item, index, isSelected) => {
                    return (
                      <VStack className="rounded-lg gap-3">
                        <Text>{item}</Text>
                      </VStack>
                    );
                  }}
                  dropdownStyle={{ display: "flex", gap: 10 }}
                />
                <Button
                  className="px-3 py-5 h-auto mx-auto bg-[#E3F2FD]"
                  onPress={() => {
                    setCharacters([]);
                    dispatch({
                      type: "set_filters",
                      payload: {
                        gender: gender_.current,
                        status: status_.current,
                        specie: specie_.current,
                      },
                    });
                  }}
                >
                  <Text className="font-roboto-medium text-base tracking-widest text-[#2196F3]">
                    APPLY
                  </Text>
                </Button>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
