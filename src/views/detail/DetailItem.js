import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
const DetailItem = ({navigation, route}) => {
  const {id, image, title} = route.params;
  return (
    <View style={styles.detailItem}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <Text style={styles.detailItemTitle}>{title}</Text>
      <Text style={styles.detailItemValue}>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  detailItemTitle: {
    color: 'black',
    fontSize: 18,
  },
  detailItemValue: {
    color: '#888',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default DetailItem;
