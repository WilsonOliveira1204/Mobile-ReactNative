import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  textHeader: {
    fontSize: 37,
    color: '#222',
    fontWeight: 'bold',
    marginTop: 35,

  },
  headerArea: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '15%',
    backgroundColor: '#00008B'
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 17,
  },
  label: {
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#111'
  },
  input: {
    borderBottomWidth: 1,
    width: 250,
    fontSize: 20,
  },
  picker: {
    margin: 15,
    padding: 15,
  },
  pickerArea: {
    flexDirection: 'column',
    marginTop: 15,
  },
  slider: {
    margin: 25,
    flexDirection: 'column',
  },
  sliderText: {
    textAlign: 'center',
    fontSize: 20,
    position: 'relative',
    left: 115,
    color: '#00008B'
  },
  sliderSpace: {
    marginTop: 25
  },
  sliderLabel: {
    fontSize: 20,
    textTransform: 'uppercase'
  },
  switchArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  areaBotao: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
  botao: {
    backgroundColor: '#00008B',
    width: 200,
    height: 50,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textBotao: {
    fontSize: 25,
    color: '#222',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  areaResultado: {
    margin: 25,
    justifyContent: 'space-around',
    backgroundColor: '#D3D3D3',
    padding: 17,
    borderRadius: 10,
  },
  headerResultado: {
    fontSize: 25,
    color: '#222',
    textTransform: 'capitalize',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  textResultado: {
    fontSize: 20,
    marginTop: 10,
  },
});


export { styles }