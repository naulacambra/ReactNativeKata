/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MovieItem extends Component {
  static propTypes = {
    movie: PropTypes.object,
  }

  render() {
    const { movie } = this.props;
    return (
      <Text>
        {movie.title} [{movie.releaseYear}]
      </Text>
    );
  }
}
