import React from 'react';
import { Svg, Circle, Text } from 'react-native-svg';

const ProCom = ({ size = 100, strokeWidth = 10, progress = 50, color = '#4caf50' }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Svg width={size} height={size}>
      {/* Background Circle */}
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e6e6e6"
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Progress Circle */}
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      {/* Text in the center */}
      <Text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize={20} // Use numeric value for fontSize
        fill={color}
      >
        {`${progress}`}
      </Text>
    </Svg>
  );
};

export default ProCom;
