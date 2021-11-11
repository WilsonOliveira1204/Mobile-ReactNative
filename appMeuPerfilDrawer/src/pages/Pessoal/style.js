import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
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
    content:{
        borderWidth: 4,
        borderColor: '#FFFF00',
        width: '90%',
        marginBottom: 25,
        borderRadius: 15,
        backgroundColor: 'rgba(250, 255, 255, 0.5)',
        padding: '5%',
        alignItems: 'center',
    },
    txtContent:{
        fontSize: 20,
    },
    areaBtns:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    btnAcao:{
        width: 50,
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#0000CD",
        marginBottom: 25,
        borderRadius: 7,
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
    areaSocial:{
        marginTop: 25,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    
})