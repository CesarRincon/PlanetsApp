import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const RotationIcon = ({ size = 35, color = "#ffff" }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
            <Rect width="48" height="48" fill="white" fillOpacity="0.01" />
            <Path
                d="M20 31L24 35L20 39"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M32 34.1679C39.0636 32.6248 44 29.1006 44 25C44 19.4772 35.0457 15 24 15C12.9543 15 4 19.4772 4 25C4 30.5228 12.9543 35 24 35"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default RotationIcon;
