import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Lupa = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" viewBox="0 0 18 18" {...props}>
    <Path
      fill="#000"
      fillOpacity={0.54}
      d="M12.5 11h-.79l-.28-.27A6.471 6.471 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5Zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11Z"
    />
  </Svg>
);
export default Lupa;
