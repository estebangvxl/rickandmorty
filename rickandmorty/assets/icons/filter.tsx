import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Filter = (props: SvgProps) => (
  <Svg width={20} height={12} fill="none" viewBox="0 0 20 12" {...props}>
    <Path
      fill="currentColor"
      fillOpacity={0.54}
      fillRule="evenodd"
      d="M.689 0v2h18.59V0H.689Zm7.23 12h4.13v-2H7.92v2Zm8.261-5H3.787V5H16.18v2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Filter;
