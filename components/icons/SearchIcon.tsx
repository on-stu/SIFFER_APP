import React, { FC } from "react";
import Svg, { Circle, Line, Path, Rect } from "react-native-svg";
import { IconType } from "./iconType";

const SearchIcon: FC<IconType> = ({ color }) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <Circle cx="10.8615" cy="10.8615" r="10.3615" stroke={color} />
      <Line
        x1="17.8536"
        y1="18.229"
        x2="23.9453"
        y2="23.3054"
        stroke={color}
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default SearchIcon;
