import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

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

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    searchInput: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 24,
        paddingLeft: 15,
        color: '#000',
        marginBottom: 10,
        height: 40,
    },
    list: {
        width: '100%',
    },
    noResults: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noResultsText: {
        color: '#fff',
    },
});

export default PlanetList;
