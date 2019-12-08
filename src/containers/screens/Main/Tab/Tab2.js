import React, {useState, useRef, Fragment} from 'react';
import {FlatList, View} from 'react-native';
import {StyleSheet} from 'react-native';
import ScreenWrapper from '../../../../components/screenWrapper';
import {Colors} from '@config/style';
import ItemTab from './ItemTab2';

const Tab2 = props => {
  return (
    <View style={styles.inputWrapper}>
      <FlatList
        data={[
          {
            name: 'test',
          },
          {
            name: 'test',
          },
          {
            name: 'test',
          },
          {
            name: 'test',
          },
          {
            name: 'test',
          },
          {
            name: 'test',
          },
          {
            name: 'test',
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
  },
});

export default Tab2;
