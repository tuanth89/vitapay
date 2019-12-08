import React, {Component, Fragment} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '@config/style';

const ScreenWrapper = ({children, customStyle}) => (
  <Fragment>
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      start={{x: 1, y: 0}}
      end={{x: 1, y: 0}}>
      <SafeAreaView
        forceInset={{top: 'always', horizontal: 'never'}}
        style={{flex: 0}}
      />
    </LinearGradient>
    <SafeAreaView
      forceInset={{top: 'never', horizontal: 'never'}}
      style={[styles.container, customStyle]}>
      <StatusBar barStyle="light-content" />
      {children}
    </SafeAreaView>
  </Fragment>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.primary,
  },
});

export default ScreenWrapper;
