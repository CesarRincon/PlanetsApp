import { View, StyleSheet } from 'react-native';
import React from 'react';
import { planetsData } from '../../utils/planets';
import PlanetCard from '../../components/PlanetCard/PlanetCard';
import PlanetList from '../../components/PlanetList/PlanetList';
import Header from '../../components/Header/Header';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header title="Planets List" backIcon={false} />
            <View style={styles.listContainer}>
                <PlanetList
                    data={planetsData}
                    renderItemComponent={(item: any) => <PlanetCard item={item} />}
                />
            </View>
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
        paddingTop: 10,
    },
    listContainer: {
        width: '100%',
        marginTop: 75,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
