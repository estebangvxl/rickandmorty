import React, { memo } from "react";
import { VStack } from "./core/vstack";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputEndEditingEventData,
} from "react-native";
import { Icon } from "./core/icon";
import Lupa from "@/assets/icons/lupa";
import { HStack } from "./core/hstack";

interface IInputSearchProps {
  onChangeText: (text: string) => void;
}

const InputSearch: React.FC<IInputSearchProps> = ({ onChangeText }) => {
  return (
    <>
      <HStack className="border-[1px] rounded-xl border-solid items-center w-80 p-4 mx-auto">
        <Icon as={Lupa} className="w-6 h-6" />
        <TextInput
          className="flex-1 pl-2"
          placeholder="Filter by name"
          placeholderClassName="text-lg"
          onChangeText={onChangeText}
        />
      </HStack>
    </>
  );
};

export default memo(InputSearch);
