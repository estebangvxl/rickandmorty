import React, { memo } from "react";
import { VStack } from "@/components/ui/core/vstack";
import { Image } from "@/components/ui/core/image";
import { Text } from "@/components/ui/core/text";

interface ICharacterProps {
  img: string;
  name: string;
  id: number;
  type: string;
}

const CharacterCard: React.FC<ICharacterProps> = ({ img, name, type }) => {
  return (
    <VStack
      className=" w-80 h-[308px] overflow-hidden rounded-lg justify-between mx-auto"
      style={{ boxShadow: "0 2 4 0 rgba(0, 0, 0, 0.125)" }}
    >
      <Image
        className="h-60 w-full"
        source={img}
        alt={"Imagen de personaje " + name}
      />
      <VStack className="flex-1 justify-center">
        <Text className="font-roboto-bold text-2xl text-black pl-3">
          {name}
        </Text>
        <Text className="font-roboto-regular text-base pl-3">{type}</Text>
      </VStack>
    </VStack>
  );
};

export default memo(CharacterCard);
