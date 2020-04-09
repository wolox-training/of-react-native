import React, { Component } from 'react';
import { arrayOf } from 'prop-types';
import { FlatList, SafeAreaView } from 'react-native';

import Book from '../Book';
import { bookProps } from '@models/propTypes';

import styles from './styles';

class Library extends Component {
  renderBook = ({ item }) => (
    <Book bookTitle={item.title} bookAuthor={item.author} bookImage={item.image_url} />
  );

  extractBookId = item => item.id.toString();

  render() {
    const { books } = this.props;
    return (
      <SafeAreaView style={styles.library}>
        <FlatList data={books} renderItem={this.renderBook} keyExtractor={this.extractBookId} />
      </SafeAreaView>
    );
  }
}

Library.propTypes = {
  books: arrayOf(bookProps).isRequired
};

export default Library;