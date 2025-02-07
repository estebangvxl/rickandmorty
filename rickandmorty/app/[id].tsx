import ArrowLeft from "@/assets/icons/arrowLeft";
import { Button } from "@/components/ui/core/button";
import { Icon } from "@/components/ui/core/icon";
import { Image } from "@/components/ui/core/image";
import { Text } from "@/components/ui/core/text";
import { VStack } from "@/components/ui/core/vstack";
import NavBar from "@/components/ui/NavBar";
import { characterEpisode, charactersById } from "@/services/character";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Details = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const [character, setCharacter] = useState<any>(null);

  const [episodes, setEpisodes] = useState<any>([]);

  const getCharacter = async (id_: string) => {
    const data = await charactersById(id_);
    setCharacter(data);
  };

  const getEpisodes = async (urls: string[]) => {
    if (urls == null) return [];
    const episodes = [];

    for (const url of urls) {
      const data = await characterEpisode(url);
      episodes.push(data);
    }
    setEpisodes(episodes);
  };

  useEffect(() => {
    getCharacter(id.toString());
  }, []);

  useEffect(() => {
    getEpisodes(character?.episode);
  }, [character]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <NavBar />
          <Button
            onPress={() => navigation.goBack()}
            className="items-center gap-3 ml-6 mt-6 w-[108px]"
            variant="link"
          >
            <Icon as={ArrowLeft} className="w-5 h-5" />
            <Text className="font-roboto-bold text-xl">GO BACK</Text>
          </Button>
          {character && (
            <Image
              source={character?.image}
              alt="avatar"
              className="w-[146px] h-[146px] rounded-full border-[5px] border-solid border-[#F2F2F7] mx-auto"
            />
          )}
          <Text className="font-roboto-medium text-4xl text-[#081F32] mx-auto mt-5 mb-9">
            {character?.name}
          </Text>

          <Text className="font-roboto-medium text-2xl text-[#8E8E93] mx-6 mb-7">
            Informations
          </Text>
          <VStack className="mx-6 px-3">
            <ItemDetail title="Gender" value={character?.gender} />
            <ItemDetail title="Status" value={character?.status} />
            <ItemDetail title="Specie" value={character?.species} />
            <ItemDetail title="Origin" value={character?.origin.name} />
            <ItemDetail title="Type" value={character?.type} />
            <ItemDetail title="Location" value={character?.location.name} />
          </VStack>
          <Text className="font-roboto-medium text-2xl text-[#8E8E93] mx-6 mb-7">
            Episodes
          </Text>
          <FlatList
            contentContainerClassName="mx-6 px-3"
            scrollEnabled={false}
            data={episodes}
            renderItem={({ item }) => (
              <>
                <VStack>
                  <Text className="font-roboto-bold text-lg text-[#081F32]">
                    {item.episode}
                  </Text>
                  <Text className="font-roboto-regular text-base  text-[#6E798C] capitalize">
                    {item.name}
                  </Text>
                  <Text className="font-roboto-regular text-base  text-[#6E798C] capitalize">
                    {item.air_date}
                  </Text>
                </VStack>
                <Text className="w-full border-t-[1px] border-solid border-gray-300 mt-5"></Text>
              </>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Details;

const ItemDetail: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <>
      <VStack>
        <Text className="font-roboto-bold text-lg text-[#081F32]">{title}</Text>
        <Text className="font-roboto-regular text-base  text-[#6E798C] capitalize">
          {value}
        </Text>
      </VStack>
      <Text className="w-full border-t-[1px] border-solid border-gray-300 mt-5"></Text>
    </>
  );
};
