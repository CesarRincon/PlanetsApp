import { StyleSheet } from 'react-native';

const stylesProductCard = StyleSheet.create({
    container: {
        width: "90%",
        height: 70,
        backgroundColor: "#0C194B",
        marginVertical: 10,
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 30,
        paddingLeft: 15,
        flexDirection: "row",
        gap: 10
    },
    textName: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600"
    },
    textSubtitle: {
        color: "#fff",
        fontSize: 10
    },
    icon: {
        right: 20,
        position: "absolute"
    }

});

export default stylesProductCard;
