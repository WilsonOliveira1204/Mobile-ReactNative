import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        width: '100%',
        height: '79.4%',
        position: 'absolute',
        bottom: 0,
    },
    listImag:{
        width: '100%',
        height: '79.4%',
    },
    fotos:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    feedImg:{
        width: 180,
        height: 180,
        borderRadius: 5,
    },
    modal:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255, 0.7)',
        width: '100%',
        height: '100%',
        padding: 10,
        borderRadius: 5,
    },
    imgModal: {
        width: 350,
        height: 350,
        borderRadius: 5,
        marginBottom: 25,
    },
})