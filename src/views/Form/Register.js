import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const [mail, setMail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdConfirmation, setPwdConfirmation] = useState('');
  let verifPwd = useMemo(() => pwd, [pwd]);
  const navigation = useNavigation();

  const saveUser = async () => {
    try {
      const getUser = JSON.stringify({mail: mail, pwd: pwd});
      console.log(getUser);
      await AsyncStorage.setItem('savedUser', getUser);
    } catch (e) {
      console.log(e);
    }
  };

  const inscription = useCallback(
    async () => {
      if (
        mail.length !== 0 &&
        pwd.length >= 3 &&
        pwdConfirmation.length !== 0 &&
        verifPwd === pwdConfirmation
      ) {
        await saveUser();
        navigation.goBack();
        //Alert.alert('Bonjour ' + mail + ' , votre mot de passe est ' + pwd);
      } else {
        Alert.alert('Le mail ou le mot de passe est incorrect !');
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [mail, pwd, pwdConfirmation, verifPwd],
  );

  return (
    <View style={styles.body}>
      <View style={styles.div1}>
        <Text style={styles.text}>Inscription</Text>
      </View>
      <View style={styles.div2}>
        <TextInput
          value={mail}
          onChangeText={setMail}
          placeholder={'Mail'}
          style={styles.textInput}
        />
        <TextInput
          value={pwd}
          onChangeText={setPwd}
          placeholder={'Mot de passe'}
          secureTextEntry={true}
          style={styles.textInput}
        />
        <TextInput
          value={pwdConfirmation}
          onChangeText={setPwdConfirmation}
          placeholder={'Confirmation du mot de passe'}
          secureTextEntry={true}
          style={styles.textInput}
        />
        <Button title={'Valider'} onPress={inscription} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  div1: {
    flex: 2,
    textAlign: 'center',
    justifyContent: 'center',
  },
  div2: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  textInput: {
    width: 300,
    height: 50,
    marginBottom: 40,
    color: '#000',
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  textInputError: {
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'red',
    backgroundColor: '#C0C0C0',
  },
});
export default Register;
