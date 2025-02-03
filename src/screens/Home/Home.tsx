import { View, StyleSheet } from 'react-native';
import React from 'react';
import { planetsData } from '../../utils/planets';
import PlanetCard from '../../components/PlanetCard/PlanetCard';
import PlanetList from '../../components/PlanetList/PlanetList';
import Header from '../../components/Header/Header';
import { homeStyles as styles } from './HomeStyles';

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

export default Home;
