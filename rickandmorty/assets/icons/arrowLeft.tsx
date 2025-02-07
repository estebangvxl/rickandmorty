import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowLeft = (props: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      fill="#000"
      d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16V7Z"
    />
  </Svg>
);
export default ArrowLeft;
