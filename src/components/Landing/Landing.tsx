import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import NextIcon from '../Icons/NextIcon';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    button: {
        position: 'absolute',
        zIndex: 99999,
        bottom: '15%',
        width: '100%',
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    text: {
        color: '#ffff',
        fontSize: 60,
        letterSpacing: 1,
        fontWeight: '200',
    },
});

export default Landing;
