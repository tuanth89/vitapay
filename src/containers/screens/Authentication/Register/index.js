import React, {Fragment} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {Colors} from '@config/style';
import ScreenWrapper from '../../../../components/screenWrapper';
import SCREENS from '@config/screen';

const Register = props => {
  const registerHandle = () => {
    props.navigation.navigate(SCREENS.MAIN);
  };

  const onRenderInputField = () => {
    return (
      <ScreenWrapper>
        <View style={styles.inputWrapper}>
          <Input
            keyboardAppearance="light"
            autoFocus={false}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={'default'}
            returnKeyType="next"
            placeholder={'Email/ Username'}
            placeholderTextColor={Colors.placeholderLogin}
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.inputInsideContainer}
            inputStyle={styles.input}
            errorStyle={styles.errorInput}
            errorMessage={'Please enter Email or Username'}
          />

          <Input
            keyboardAppearance="light"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            returnKeyType={'done'}
            blurOnSubmit={true}
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.inputInsideContainer}
            inputStyle={styles.input}
            errorStyle={styles.errorInput}
            placeholder={'Password'}
            placeholderTextColor={Colors.placeholderLogin}
            errorMessage={'Password has an invalid format'}
          />

          <Button
            onPress={registerHandle}
            title="REGISTER"
            containerStyle={styles.buttonWrapper}
            buttonStyle={styles.button}
            activeOpacity={0.8}
            underlayColor="transparent"
            titleStyle={styles.registerTitle}
          />
        </View>
      </ScreenWrapper>
    );
  };

  return <Fragment>{onRenderInputField()}</Fragment>;
};

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 100,
    justifyContent: 'center',
  },
  inputContainer: {
    borderBottomColor: 'rgba(0, 0, 0, 0.38)',
  },
  inputInsideContainer: {
    borderRadius: 10,
    borderWidth: 1,
    // borderColor: 'rgba(110, 120, 170, 1)',
    marginVertical: 10,
    marginHorizontal: 10,
    height: 52,
  },
  inputLink: {
    fontSize: 17,
    color: Colors.white,
  },
  input: {
    fontSize: 17,
    color: Colors.white,
    marginLeft: 10,
  },
  errorInput: {
    marginHorizontal: 10,
  },
  registerTitle: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '500',
  },
  buttonWrapper: {
    marginTop: 20,
  },
  button: {
    // backgroundColor: 'rgba(232, 147, 142, 1)',
    borderRadius: 11,
    height: 42,
    marginHorizontal: 20,
    backgroundColor: '#A0A1A0',
  },
});

export default Register;
