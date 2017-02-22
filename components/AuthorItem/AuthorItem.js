/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class AuthorItem extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    lastName: PropTypes.string,
    born: PropTypes.number,
    photo: PropTypes.string,
  }

  render() {
    const { name, lastName, born, photo } = this.props;
    return (
      <View>
        <Text>{lastName}, {name} [{born}]</Text>
        <Image
          source={{uri: photo}}
          style={{width: 40, height: 40}}
         />
      </View>
    );
  }
}
