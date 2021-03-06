'use strict';

import React, {Component}  from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
const ValidationComponent = require('../index').default;

export default class FormTest extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {name : "My name", email: "tibtib@gmail.com", date: "2017-03-01"};
  }

  _onPressButton() {
    // Call ValidationComponent validate method
    this.validate({
      name: {maxLength: 3, required: true},
      email: {email:true},
      date: {date: 'YYYY-MM-DD'}
    });
  }

  render() {
      return (
        <View>
          <TextInput ref="name" onChangeText={(name) => this.setState({name})} value={this.state.name} />
          <TextInput ref="email" onChangeText={(name) => this.setState({email})} value={this.state.email} />
          <TextInput ref="date" onChangeText={(name) => this.setState({date})} value={this.state.date} />

          <TouchableHighlight onPress={this._onPressButton}>
            <Text>Submit</Text>
          </TouchableHighlight>

          <Text>
            {this.getErrorMessages()}
          </Text>
        </View>
      );
  }

}
