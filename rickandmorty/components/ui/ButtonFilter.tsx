import React from "react";
import { Button } from "@/components/ui/core/button";
import Filter from "@/assets/icons/filter";
import { Icon } from "@/components/ui/core/icon";
import { Text } from "@/components/ui/core/text";

const ButtonFilter: React.FC<{ onPress?: () => void }> = ({
  onPress = () => {},
}) => {
  return (
    <Button
      action="default"
      style={{ boxShadow: "0 2 2 0 rgba(0, 0, 0, 0.125)" }}
      variant="solid"
      className="bg-[#E3F2FD] py-3 px-5 h-auto relative rounded-md w-80 mx-auto"
      onPress={onPress}
    >
      <Icon as={Filter} className="w-5 h-3 text-gray-600 absolute left-5" />
      <Text className="font-roboto-medium text-base text-[#2196F3] tracking-widest">
        ADVANCED FILTERS
      </Text>
    </Button>
  );
};

export default ButtonFilter;
