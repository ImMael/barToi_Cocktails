import React from 'react';
import {View, Text} from 'react-native';

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.aboutText}>
        This is a simple app to learn how to prepare cocktails!.
      </Text>
      <Text style={styles.aboutText}>
        We are a team of 4 developpers and we are learning React Native. We used
        the CocktailsDB API to get the data.
      </Text>
      <View style={styles.developpers}>
        <Text style={styles.developper}>- Nohan</Text>
        <Text style={styles.developper}>- Allan</Text>
        <Text style={styles.developper}>- Walid</Text>
        <Text style={styles.developper}>- Maël</Text>
      </View>
      <Text style={styles.aboutText}>We hope you enjoy our app!</Text>
    </View>
  );
};

const styles = {
  aboutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  developpers: {
    flexDirection: 'column',
  },
  developper: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
};

export default About;
