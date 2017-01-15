import React, { Component } from 'react';
import { View } from 'react-native';
import { Hello, Greeting, Bananas, Blink } from './components';

export class App extends Component {
  render() {
    return (
      /*
      <View style={{alignItems: 'center', marginVertical: 30}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Bananas />
        <Blink text='I love to blink' />
      </View>*/

       <View style={{flex: 1}} >
        <View style={{flex: 0.1}} />
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
        </View>
        <View style={{alignItems: 'center', flex: 1, backgroundColor: 'skyblue'}} >
          <Bananas />
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}} >
          <Blink text='I love to blink' />
        </View>
      </View>
    );
  }
}
