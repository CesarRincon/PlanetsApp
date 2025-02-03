import { StyleSheet } from "react-native";

export const planetListStyles = StyleSheet.create({
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