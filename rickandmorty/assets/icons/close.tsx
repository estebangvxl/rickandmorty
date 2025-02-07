import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Close = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" viewBox="0 0 14 14" {...props}>
    <Path
      fill="#000"
      fillOpacity={0.54}
      d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z"
    />
  </Svg>
);
export default Close;
