import { View, Text, TextInput, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { planetListStyles as styles } from './PlanetListStyles';

const PlanetList: React.FC<PlanetListProps> = ({ data, renderItemComponent }) => {
    const [stateData, setStateData] = useState<Planet[]>(data);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        setStateData(data);
    }, [data]);

    const handleSearch = (text: string) => {
        setSearchText(text);

        if (text) {
            const filteredData = data.filter((planet) =>
                planet.name.toLowerCase().includes(text.toLowerCase())
            );
            setStateData(filteredData);
        } else {
            setStateData(data);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholderTextColor="#000"
                placeholder="Search a planet"
                value={searchText}
                onChangeText={handleSearch}
                style={styles.searchInput}
            />
            {stateData.length ? (
                <FlatList
                    data={stateData}
                    renderItem={({ item }) => renderItemComponent(item)}
                    style={styles.list}
                />
            ) : (
                <View style={styles.noResults}>
                    <Text style={styles.noResultsText}>No se han encontrado coincidencias...</Text>
                </View>
            )}
        </View>
    );
};



export default PlanetList;
