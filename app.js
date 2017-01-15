import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Hello, Greeting, Bananas, Blink } from './components';

class Greatings extends Component {
  render() {
    if (this.props.names && this.props.names.length > 0) {
      return (
        <View style={this.props.style}>
        {this.props.names.map((v, i) => <View key={i}><Greeting name={v} /></View>)}
        </View>
      );
    }
    return <Text>no one to say Hi!</Text>
  }
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {names: []}
  }
  setDefaultNames() {this.setState({names: []})}
  setNames(text) {
    if (!text || text.trim() == '') {this.setDefaultNames();return}

    const items = text.split(',')
     .map(x => x.trim())
     .filter(x => x.length > 0) 
    if (items.length > 0) 
      this.setState({names: items})  
    else this.setState({names: []})
  }

  render() {
    return (
       <View style={{flex: 1}} >
        <View style={{flex: 0.1}} />
        <View style={{flex: 0.3, padding: 10, backgroundColor: 'beige'}}>
          <TextInput
            style={{height: 40}} 
            placeholder='type the items!!!' 
            onChangeText= {t => this.setNames(t)}
            />
        </View>
        <Greatings 
          style={{flex: 1, backgroundColor: 'powderblue', flexDirection: 'row', flexWrap: 'wrap'}} 
          names={this.state.names}
        />
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'skyblue'}} >
          <Bananas />
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}} >
          <Blink text='I love to blink' />
        </View>
      </View>
    );
  }
}
