import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import NextIcon from '../Icons/NextIcon';
import { landingStyles as styles } from './LandingStyles';

const Landing: React.FC<LandingProps> = ({ setLanding }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://wallpapercat.com/w/full/7/a/6/187990-2160x3840-iphone-4k-planet-background-image.jpg",
                }}
                style={styles.image}
            />
            <TouchableOpacity style={styles.button} onPress={() => setLanding(false)}>
                <Text style={styles.text}>Explore</Text>
                <NextIcon />
            </TouchableOpacity>
        </View>
    );
};

export default Landing;
