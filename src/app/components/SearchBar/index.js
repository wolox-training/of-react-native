import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { View, TextInput, Image } from 'react-native';

import actionCreators from '@redux/books/actions';
import icSearch from '@assets/General/ic_search_placeholder.png';
import icCloseInactive from '@assets/General/ic_close_inactive.png';
import icCloseActive from '@assets/General/ic_close_active.png';

import { TouchableOpacity } from 'react-native-gesture-handler';
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

  const cleanSearch = useCallback(() => {
    onSearchChange('');
  }, [onSearchChange]);

  const icClose = search ? icCloseActive : icCloseInactive;

  return (
    <View>
      <View style={styles.container}>
        <Image source={icSearch} resizeMode="contain" style={styles.searchIc} />
        <TextInput
          style={styles.input}
          onChangeText={onSearchChange}
          value={search}
          label="Search"
          placeholder="Search"
        />
        <TouchableOpacity onPress={cleanSearch} disabled={!search}>
          <Image source={icClose} resizeMode="contain" style={styles.closeIc} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SearchBar;
