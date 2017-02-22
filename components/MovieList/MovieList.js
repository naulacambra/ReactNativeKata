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
import { MovieItem } from '../../components';


export default class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.array,
  }

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { movies } = this.props;
    return (
      <View>
        <Text>
          Movie List with { movies.length } movies;
        </Text>
        {movies.map((movie, index) => <MovieItem key={index} movie={movie} />)}
      </View>
    );
  }
}
