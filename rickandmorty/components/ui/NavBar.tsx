import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "./core/icon";
import { Image } from "./core/image";

const NavBar = () => {
  return (
    <View
      style={{ boxShadow: "2 2 3 2 rgba(0, 0, 0, 0.125)" }}
      className="h-16 w-full justify-center"
    >
      <Image
        className="w-11 h-12"
        source={require("@/assets/images/Vector.png")}
        alt=""
        resizeMode="contain"
      />
    </View>
  );
};

export default NavBar;
