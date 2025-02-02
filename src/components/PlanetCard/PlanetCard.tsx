import React from 'react'
import { Text, Image, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import HeartIcon from '../Icons/HeartIcon';
import stylesProductCard from './PlanetCardStyles';
import { useContextState } from '../../context/Context';

const PlanetCard = ({ item }: ItemType) => {

    const { handlerFavoritePlanet, state } = useContextState()

    const isFavorite = state.some((planet) => planet.name === item.name)

    const navigation = useNavigation<NavigationProps>();
    const handleLink = () => {
        navigation.navigate('Planets', {
            screen: 'PlanetDetail',
            params: {
                name: item.name,
                image: item.image,
            }
        });
    }

    const handleAddToFavorite = (planet: Planet) => {
        handlerFavoritePlanet(planet);
    };
    
    return (
        <TouchableOpacity style={stylesProductCard.container}
            onPress={() => handleLink()}
        >
            <Image source={{ uri: item.image }} width={40} height={40} />
            <View>
                <Text style={stylesProductCard.textName}>
                    {item.name}
                </Text>
                <Text style={stylesProductCard.textSubtitle}>Distance: {item.distanceFromEarth} Aprox.</Text>
            </View>

            <TouchableOpacity style={stylesProductCard.icon} onPress={() => handleAddToFavorite(item)}>
                <HeartIcon backgroundColor={isFavorite && "red"} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default PlanetCard
