import React, {useState, useRef, Fragment} from 'react';
import {View, FlatList} from 'react-native';
import {Divider} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {Colors} from '@config/style';
import ItemTab from './ItemTab1';

const Tab1 = props => {
  return (
    <View style={styles.inputWrapper}>
      <FlatList
        data={[
          {
            name: 'test',
            type: 1,
          },
          {
            name: 'test',
            type: 1,
          },
          {
            name: 'test',
            type: 2,
          },
          {
            name: 'test',
            type: 2,
          },
          {
            name: 'test',
            type: 2,
          },
          {
            name: 'test',
            type: 2,
          },
          {
            name: 'test',
            type: 0,
          },
        ]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => {
          return <ItemTab item={item} />;
        }}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 100,
    backgroundColor: Colors.primary,
    paddingHorizontal: 5,
  },
});

export default Tab1;
