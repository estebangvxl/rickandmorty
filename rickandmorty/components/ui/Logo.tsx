import React from "react";
import { Image } from "./core/image";

const Logo = () => {
  return (
    <Image
      resizeMode="contain"
      className="w-80 h-28 mx-auto bg-transparent"
      alt="logo"
      source={require("@/assets/images/Logo.png")}
    />
  );
};

export default Logo;
