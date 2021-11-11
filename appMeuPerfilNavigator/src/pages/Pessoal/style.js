import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    }, 
    titlePage:{
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#363636',
        position: 'absolute',
        right: 110,
        top: 150,
    },
    conteudo:{
        backgroundColor: '#ddd',
        width: '100%',
        height: '79.4%',
        position: 'absolute',
        padding: 10,
        top: 180,
    },
    txtLbl:{
        borderBottomWidth: 3,
        borderBottomColor: '#363636',
        padding: 10,
        marginBottom: 15,
    },
    label:{
        fontSize: 25,
        color: '#363636',
        marginBottom: 10,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    text:{
        fontSize: 20,
    },
    textList:{
        fontSize: 20,
        marginLeft: 15,
        marginBottom: 5,
    }
})