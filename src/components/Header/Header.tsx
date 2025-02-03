import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import BackIcon from '../Icons/BackIcon';
import { useNavigation } from '@react-navigation/native';
import { headerStyles as styles } from './HeaderStyles';

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

export default Header;
