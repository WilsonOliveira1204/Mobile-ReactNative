import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#556B2F',
    },
    header:{
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        width: '100%',
        height: '12%',
        backgroundColor: '#FFFF00',
        marginBottom: 50,
    },

    btnMenu:{
        position: 'absolute',
        left: '10%',
        bottom: '25%',

    },
    txtHeader:{
        color: '#0000CD',
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        top: '46%',
        left: '35%',
    },
    areaImg:{ 
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgPerfil:{
        width: 200, 
        height: 200, 
        borderRadius: 100, 
        borderWidth: 5, 
        borderColor: "#FFFF00",
    },
    txtProfile:{
        color: "#eee",
        fontSize: 50,
        textAlign: "center",
        fontWeight: 'bold',
        borderBottomColor: '#FFFF00',
        borderBottomWidth: 2,
        marginBottom: 50,
        textShadowColor: 'rgba(12, 0, 19, 0.55)',
        textShadowOffset: {width: 2, height: 3},
        textShadowRadius: 7.5,
    },
    btnAcao:{
        width: 200,
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#0000CD",
        marginBottom: 25,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#FFFF00',
        padding: 10,
    },
    txtBtn:{
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
})