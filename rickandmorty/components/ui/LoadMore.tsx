import React, { memo } from "react";
import { Button } from "./core/button";
import { Text } from "./core/text";

const LoadMore: React.FC<{ onPress?: () => void }> = ({
  onPress = () => {},
}) => {
  return (
    <Button
      className="px-3 py-5 h-auto mx-auto bg-[#E3F2FD]"
      variant="solid"
      action="default"
      onPress={onPress}
    >
      <Text className="font-roboto-medium text-base tracking-widest text-[#2196F3]">
        LOAD MORE
      </Text>
    </Button>
  );
};

export default memo(LoadMore);
