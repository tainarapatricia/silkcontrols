
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
   'Texto Android'
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bem Vindo ao Silk Controls</Text>
        <Text style={styles.instructions}>Já é Cadastrado? Faça o Login</Text>
        <TouchableOpacity style={styles.marginBottom}>
            <Text style={styles.textButton} onPress={()=>this.openSignUp()}>Cadastrar</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  marginBottom: {
    textAlign: 'center',
    color:'#fff',
  },
});
