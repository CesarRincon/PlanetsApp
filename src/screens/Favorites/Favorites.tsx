import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import PlanetList from '../../components/PlanetList/PlanetList';
import { useContextState } from '../../context/Context';
import PlanetCard from '../../components/PlanetCard/PlanetCard';
import Header from '../../components/Header/Header';
import TelescopeIcon from '../../components/Icons/TelescopeIcon';
import { useNavigation } from '@react-navigation/native';
import { favoritesStyles as styles } from './FavoritesStyles';

const Favorites: React.FC = () => {
    const { state } = useContextState();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header title="Favorites" />
            {state.length ? (
                <PlanetList
                    data={state}
                    renderItemComponent={(item: Planet) => <PlanetCard item={item} />}
                />
            ) : (
                <View style={styles.emptyState}>
                    <TelescopeIcon color="#cccc" height={80} width={80} />
                    <Text style={styles.emptyText}>Your favorites list is empty.</Text>
                    <Text style={styles.emptySubText}>Add planets to your favorites!</Text>
                    <TouchableOpacity
                        style={styles.goButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.goButtonText}>Go</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};



export default Favorites;
