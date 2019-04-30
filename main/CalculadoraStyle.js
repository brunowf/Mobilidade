import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3
  },
  containermain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 5
  },
  botao: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1
  },
  botao2: {
    flex: 2
  },
  botao3: {
    flex: 3
  },
  display: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  welcome: {
    flex: 1,
    backgroundColor:'blue'
  }
});