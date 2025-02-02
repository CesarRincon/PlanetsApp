import { View, StyleSheet } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

const Loader = () => {
    return (
        <View style={styles.container}>
            <FastImage
                style={styles.image}
                source={{
                    uri: 'https://cdn.dribbble.com/users/2079553/screenshots/6542127/planet.gif',
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#33384C',
    },
    image: {
        width: 400,
        height: 400,
    },
});

export default Loader;
