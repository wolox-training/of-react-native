import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { View, TextInput } from 'react-native';

import actionCreators from '@redux/books/actions';

import styles from './styles';

function SearchBar() {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const onSearchChange = useCallback(
    (value) => {
      setSearch(value);
      dispatch(actionCreators.search(value));
    },
    [dispatch]
  );

  return (
    <View styles={styles.loginContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onSearchChange}
        value={search}
        label="Search"
        placeholder="Search"
      />
    </View>
  );
}

export default SearchBar;
