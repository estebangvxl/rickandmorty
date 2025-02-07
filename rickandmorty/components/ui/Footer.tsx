import React from "react";
import { View } from "react-native";
import { Text } from "./core/text";

const Footer = () => {
  return (
    <View
      className="h-14 w-full items-center justify-center"
      style={{ boxShadow: "-2 0 8 2 rgba(0, 0, 0, 0.125)" }}
    >
      <Text className="font-roboto-bold text-2xl text-black pl-3">
        Rick and Morty
      </Text>
    </View>
  );
};

export default Footer;
