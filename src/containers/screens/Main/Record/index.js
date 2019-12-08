import React, {useState, useRef, Fragment} from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import ScreenWrapper from '../../../../components/screenWrapper';

const Record = props => {
  return (
    <ScreenWrapper>
      <View style={styles.inputWrapper} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 100,
  },
});

export default Record;
