import { View } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { loaderStyles as styles } from './LoaderStyles';

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

export default Loader;
