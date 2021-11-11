import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 19,
        marginBottom: '10',
        justifyContent: 'center',
        backgroundColor: '#556B2F',
        width: '100%',
        height: '18%',
    },
    contentHeader: {
        position: 'absolute',
        right: 32,
        bottom: 40,
    },
    textHeader: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        paddingBottom: '10',
        marginLeft: 20,
    },
    legendHeader: {
        fontSize: 15,
        color: 'white',
        marginTop: 5,
        marginLeft: 50,
        fontStyle: 'italic',
    },
    areaImg: {
        position: 'relative',
        top: 5,
        right: 12,
    },
    imgPerfil:{
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 4, 
        borderColor: '#FFFF00'
    }
})