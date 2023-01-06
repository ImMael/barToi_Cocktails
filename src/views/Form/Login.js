import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import HomeView from '../home/HomeView';

const Login: () => Node = props => {
  const [mail, setMail] = useState('');
  const [pwd, setPwd] = useState('');
  const navigation = useNavigation();

  const findUser = async () => {
    try {
      return await AsyncStorage.getItem('savedUser');
    } catch (e) {
      console.log(e);
    }
  };

  const inscription = useCallback(async () => {
    const user = await findUser();
    if (user) {
      const result = JSON.parse(user);
      if (mail === result.mail && pwd === result.pwd) {
        navigation.navigate('Home2');
      } else {
        Alert.alert('Le mail ou le mot de passe est incorrect !');
      }
    } else {
      console.log('USER NOT FOUND');
    }
  }, [mail, navigation, pwd]);

  const goToRegister = useCallback(async () => {
    navigation.navigate('Register');
  }, [navigation]);

  return (
    <View style={styles.body}>
      <View style={styles.div1}>
        <Text style={styles.text}>Connexion</Text>
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
        <Button title={'Valider'} onPress={inscription} />
      </View>
      <Button title={"S'inscrire"} onPress={goToRegister} />
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
  div3: {
    flex: 1,
    justifyContent: 'space-evenly',
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
export default Login;
