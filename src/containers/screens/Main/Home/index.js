import React, {useState, useRef, Fragment} from 'react';
import {View, Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import ScreenWrapper from '../../../../components/screenWrapper';
import HeaderWrapper from '../../../../components/headerWrapper';
import {Colors} from '@config/style';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Tab1 from '../Tab/Tab1';
import Tab2 from '../Tab/Tab2';

const Home = props => {
  const [tabRouter, setTabRouter] = useState({
    index: 0,
    routes: [{key: 'first', title: 'Tab 1'}, {key: 'second', title: 'Tab 2'}],
  });

  const onIndexChange = index => {
    setTabRouter(prev => ({
      ...prev,
      index,
    }));
  };

  const renderHeader = () => {
    return <HeaderWrapper centerText={'Home'} />;
  };

  return (
    <ScreenWrapper customStyle={{backgroundColor: Colors.primary}}>
      {/*Header*/}
      {renderHeader()}

      {/*Content*/}
      <View style={styles.inputWrapper}>
        <TabView
          navigationState={tabRouter}
          renderScene={SceneMap({
            first: Tab1,
            second: Tab2,
          })}
          onIndexChange={onIndexChange}
          initialLayout={{width: Dimensions.get('window').width}}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{
                backgroundColor: '#EC7D30',
              }}
              style={{
                backgroundColor: Colors.primary,
                height: 50,
              }}
            />
          )}
          lazy={true}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 100,
    backgroundColor: Colors.primary,
  },
});

export default Home;
