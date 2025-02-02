import { StyleSheet } from 'react-native';

const stylesDetail = StyleSheet.create({
    container: {
        backgroundColor: "#071135",
        alignItems: "center",
        paddingTop: 20,
        gap: 10
    },
    titlePlanet: {
        color: "#fff",
        fontSize: 42,
        fontWeight: "700",
        textShadowColor: '#ffff',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 20,
        textTransform: "uppercase",
        width: "100%",
        textAlign: "center",
        marginTop: 40
    },
    containerImage: {
        shadowColor: "#ffff",
        shadowOffset: {
            width: 11,
            height: 0,
        },
        shadowOpacity: 0.23,
        shadowRadius: 11.78,
        elevation: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        width: 290,
        height: 290
    },
    containerDistance: {
        marginTop: 30
    },
    textTitleDistance: {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: 16
    },
    textSubtitleDistance: {
        color: "#fff",
        alignSelf: "center"
    },
    containerDescription: {
        width: "100%"
    },
    containerItem: {
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
    titleItem: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16
    },
    descriptionItem: {
        color: "#fff"
    },
    containerIcon: {
        width: "10%"
    }
});

export default stylesDetail;
