import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    areaHeader:{
      backgroundColor: '#1f1f1f',
      width: '100%',
      height: '20%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textHeader:{
      fontSize: 50,
      color: '#fff',
      fontWeight: 'bold',
    },
    area:{
      backgroundColor: '#808080',
      width: 210,
      height: 290,
      marginTop: 50,
      marginLeft: 7,
      marginRight: 7,
      alignItems: 'center',
      borderRadius: 10,
    },
    textoProd:{
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    textoPreco:{
      fontSize: 35,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    imgAnuncio:{
      width: 190,
      height: 200,
      marginTop: 10,
    },
  })
  
export default styles