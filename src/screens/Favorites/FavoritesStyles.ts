import { StyleSheet } from "react-native";

export const favoritesStyles = StyleSheet.create({
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