import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        backgroundColor: '#87CEFA'
    },
    subTitle:{
        fontSize: 25,
        padding: 15,
        fontStyle:'italic',
        textTransform: 'capitalize',
        textAlign:'center',
        borderBottomWidth: 1,
        borderBottomColor:'#111',
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 7,
    },
    label:{
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    inputText:{
        width: 230,
        fontSize: 16,
        padding: 5,
        borderBottomColor: '#111',
        borderBottomWidth: 1,
    },
    areaPicker:{
        width: '100%',
        justifyContent: 'space-around',
        margin: 7,
        flexDirection: 'column',
        padding: 5,
    },
    picker:{
        width: '100%',
        color: '#111',
        marginTop: 7,
    },
    areaSlider:{
        width: '100%',
        height: '11%',
        padding: 5,
        flexDirection: 'column',
        margin: 7,
    },
    slider:{
        width: '100%',
        marginTop: 10,
    },
    valueSlider:{
        marginTop: 10,
        fontSize: 20,
        position: 'absolute',
        bottom: 0,
        right: '5%',
    },
    areaSwitch:{
        width: '100%',
        height: '10%',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    valueNacional:{
        fontSize: 20,
    },
    areaButton:{
        marginTop: 10,
    },
    btnForm:{
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
    }
})