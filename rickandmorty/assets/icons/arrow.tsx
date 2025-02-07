import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Arrow = (props: SvgProps) => (
  <Svg width={11} height={5} fill="none" viewBox="0 0 11 5" {...props}>
    <Path fill="#000" fillOpacity={0.54} d="m.302 0 5 5 5-5h-10Z" />
  </Svg>
);
export default Arrow;
