import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: "center",
    },

    image: {
        width: '100%',
    },
    formContainer: {
        display: "flex",
        flex: 1,
        position: "absolute",
        width: '90%',
        alignItems: "flex-start",
        // backgroundColor: "#f1f1f1"
    },
    title: {
        fontSize: 50,
        color: '#fff',
        marginTop: 60,
        marginBottom: 90,
        fontWeight: "bold"
    },
    input: {
        width: '100%',
        padding: 20,
        backgroundColor: '#f1f1f1',
        borderRadius: 10
    },
    but: {
        width: '100%',
        padding: 20,
        backgroundColor: '#6E4BE9',
        borderRadius: 10
    },
    linksContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    link: {
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        textAlign: "center",
        padding: 10,
        fontWeight: "bold"
    }
})