import { StyleSheet } from "react-native";

export const landingStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    button: {
        position: 'absolute',
        zIndex: 99999,
        bottom: '15%',
        width: '100%',
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    text: {
        color: '#ffff',
        fontSize: 60,
        letterSpacing: 1,
        fontWeight: '200',
    },
});