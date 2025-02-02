import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import BackIcon from '../Icons/BackIcon';
import { useNavigation } from '@react-navigation/native';



const Header: React.FC<HeaderProps> = ({ title, backIcon = true, transparent = false }) => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={[styles.container, { backgroundColor: transparent ? 'transparent' : '#33384C' }]}>
            {backIcon && (
                <TouchableOpacity style={styles.backButton} onPress={goBack}>
                    <BackIcon color="#ffff" />
                </TouchableOpacity>
            )}
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    backButton: {
        position: 'absolute',
        left: 0,
    },
    title: {
        color: '#ffff',
        fontWeight: '600',
        fontSize: 18,
        letterSpacing: 1,
    },
});

export default Header;
