import React from 'react';
import {View, Text} from 'react-native';

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text>About</Text>
    </View>
  );
};

const styles = {
  aboutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default About;
