/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Platform, StyleSheet, View} from 'react-native';
import { Button, H3, Text, ActionSheet,  Content } from "native-base";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Demo Inicial React Native!</Text>
        <Text style={styles.instructions}>Para inicar con las pruebas, edite el App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <H3 style={styles.text}>El componente H3 y el componente Button pertenece a la biblioteca NativeBase </H3>
        <Content padder>
        <Button>
            <Text>Click Me!</Text>
          </Button>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    paddingTop: 50,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    marginTop: 50,
    paddingTop: 200,
    textAlign: 'left',
    color: '#FF8A65',
    marginBottom: 5,
  },
});
