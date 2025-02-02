import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import PlanetList from '../../components/PlanetList/PlanetList';
import { useContextState } from '../../context/Context';
import PlanetCard from '../../components/PlanetCard/PlanetCard';
import Header from '../../components/Header/Header';
import TelescopeIcon from '../../components/Icons/TelescopeIcon';
import { useNavigation } from '@react-navigation/native';

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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#071135',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        gap: 15,
        paddingTop: 80,
    },
    emptyState: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        color: '#cccc',
        fontSize: 20,
    },
    emptySubText: {
        color: '#cccc',
        fontSize: 16,
    },
    goButton: {
        backgroundColor: '#ffff',
        borderRadius: 8,
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    goButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Favorites;
