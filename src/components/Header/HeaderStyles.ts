import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    backButton: {
        position: 'absolute',
        left: 0,
    },
    title: {
        color: '#ffff',
        fontWeight: '600',
        fontSize: 18,
        letterSpacing: 1,
    },
});