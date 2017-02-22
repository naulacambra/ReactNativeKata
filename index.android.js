/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { MovieList, AuthorList } from './components';

export default class ReactNativeKata extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      authors: [],
    }
    this.getMoviesFromApiAsync();
    this.getAuthorsFromApiAsync();
  }

  getMoviesFromApiAsync() {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          movies: responseJson.movies,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getAuthorsFromApiAsync() {
    setTimeout(() => {
      fetch('http://tokiotabookstore-latest.azurewebsites.net/api/Authors')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            authors: responseJson,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }, 0);
  }

  render() {
    const { movies, authors } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Kata Day!
        </Text>
        <MovieList movies={movies} />
        <AuthorList authors={authors} />
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
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
});

AppRegistry.registerComponent('ReactNativeKata', () => ReactNativeKata);
