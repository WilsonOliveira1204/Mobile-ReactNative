import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        backgroundColor: '#87CEFA'
    }, 
    cardInfo:{
        width: '90%',
        marginTop: 15,
        padding: 20,
        backgroundColor: '#87CEFA',
        borderWidth: 1,
        borderColor: '#111',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 9,
    },
    labelInfo:{
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    infoValue:{
        fontSize: 16,
        marginLeft: 15,
    },
    areaButton:{
        marginTop: 20,
    },
    btnBack:{
        backgroundColor: '#6cf',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
    },
    textBtn:{
        color: '#111',
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: 'bold',
        textTransform: 'uppercase',

    },
    subTitle:{
        fontSize: 25,
        padding: 15,
        fontStyle:'italic',
        textTransform: 'capitalize',
        textAlign:'center',
        borderBottomWidth: 1,
        borderBottomColor:'#111',
        marginBottom: 15,
    },
})