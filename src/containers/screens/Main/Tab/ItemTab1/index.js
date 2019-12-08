import React from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {Avatar, Text, Button} from 'react-native-elements';
import styles from './styles';
import {Colors} from '@config/style';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const TabItem = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemView}>
        <View style={styles.iconStyle}>
          <Avatar
            size={40}
            rounded
            // source={require('@assets/images/avatar.jpg')}
            renderPlaceholderContent={
              <ActivityIndicator color={Colors.white} />
            }
          />
        </View>

        <View style={item.type > 0 ? styles.itemInfo : styles.itemInfoExtend}>
          <Text style={styles.name}>
            TestTestTestTestTestTestTestTestTestTestTestTestTestTest
          </Text>
        </View>

        {item.type > 0 && (
          <View style={styles.itemDateTime}>
            {item.type === 1 && (
              <Button
                title="TEST"
                buttonStyle={{
                  backgroundColor: '#FDD94C',
                  marginLeft: 5,
                  borderRadius: 7,
                }}
                titleStyle={{color: Colors.black_1}}
                activeOpacity={0.8}
                underlayColor="transparent"
              />
            )}

            {item.type === 2 && (
              <MaterialIcon name={'image'} size={80} color={Colors.white} />
            )}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TabItem;
