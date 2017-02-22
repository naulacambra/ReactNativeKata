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
import { AuthorItem } from '../../components';

export default class AuthorList extends Component {
  static propTypes = {
    authors: PropTypes.array,
  }

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { authors } = this.props;
    return (
      <View>
        <Text>
          Author List with { authors.length } authors;
        </Text>
        {authors.map((author) => <AuthorItem key={author.id} {...author} />)}
      </View>
    );
  }
}
