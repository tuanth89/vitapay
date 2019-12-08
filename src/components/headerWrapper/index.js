import React, {memo} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '@config/style';
import IconIon from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native-elements';

const HeaderWrapper = memo(
  ({
    children,
    customStyle,
    centerText,
    onPressLeft,
    hasLeftIconView,
    leftIconView,
    hasRightView,
    rightContentView,
  }) => (
    <LinearGradient
      colors={[Colors.primary, Colors.primary]}
      start={{x: 1, y: 0}}
      end={{x: 1, y: 0}}>
      <View style={styles.headerWrapper}>
        <View style={styles.centerHeaderWrapper}>
          <Text style={styles.textHeader}>{centerText}</Text>
        </View>

        <View>
          {onPressLeft && (
            <TouchableOpacity
              onPress={onPressLeft}
              style={styles.leftHeaderWrapper}>
              {hasLeftIconView ? (
                leftIconView
              ) : (
                <IconIon name={'ios-arrow-back'} color={'white'} size={27} />
              )}
            </TouchableOpacity>
          )}
        </View>

        {hasRightView && <View>{rightContentView}</View>}
      </View>
    </LinearGradient>
  ),
);

const styles = StyleSheet.create({
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 45,
  },
  leftHeaderWrapper: {
    paddingLeft: 10,
    paddingRight: 30,
    // backgroundColor: 'red',
    justifyContent: 'center',
    flex: 1,
  },
  textHeader: {
    fontSize: 16,
    color: Colors.white,
  },
  centerHeaderWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HeaderWrapper;
