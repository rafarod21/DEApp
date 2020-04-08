import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: "#141932",
        flex: 1
    },

    //Modal Cadastrar
    containerModal: {
        backgroundColor: "#E7E7E7",
        height: 280,
        marginTop: 80,
        marginBottom: 200,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#4278D0",
        borderWidth: 1,
    },
    textModalHeader: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'center',
    },
    textModalNameServant: {
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 24,
        textAlign: 'center',
    },
    containerButtonsDoneClear: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        width: 280,
    },
    buttonsDoneClear: {
        height: 50,
        width: 60,
        borderWidth: 2,
        borderColor: "#979191",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },

    //Pesquisar servos
    containerSearchServant: {
        paddingHorizontal: 15,
        paddingBottom: 10,
        marginTop: 10,
    },
    searchServant: {
        backgroundColor: "#fff",
        height: 40,
        borderRadius: 25,
        fontSize: 16,
        paddingHorizontal: 20,
    },

     //Lista de servos
     list: {
        paddingHorizontal: 20,
    },
    containerItem: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#DDD",
        padding: 10,
        marginBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
    },
    containerName: {
        flex: 1,
    },
    textName: {
        width: 200,
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        textAlign: 'center',
    },
    containerAbsences: {
        height: 50,
        width: 80,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textAbsences: {
        fontSize: 16,
        fontWeight: "bold",
    },
});