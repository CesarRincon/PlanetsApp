import React from 'react';
import Svg, { Polygon } from 'react-native-svg';

interface NextIconProps {
    height?: number | string;
    width?: number | string;
    color?: string;
}

const NextIcon: React.FC<NextIconProps> = ({ height = 40, width = 40, color = "#FFFF" }) => (
    <Svg height={height} width={width} viewBox="0 0 24 24">
        <Polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12" fill={color} />
    </Svg>
);

export default NextIcon;
