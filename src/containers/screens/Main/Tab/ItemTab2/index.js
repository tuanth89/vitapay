import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Avatar, Text, Button} from 'react-native-elements';
import styles from './styles';
import {Colors} from '@config/style';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const TabItem2 = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemView}>
        <View style={styles.iconStyle}>
          <MaterialIcon name={'image'} size={120} color={Colors.white} />
        </View>

        <View style={styles.itemInfo}>
          <Text style={styles.name}>
            TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TabItem2;
