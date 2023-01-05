import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const Card: () => Node = props => {
  const {title, image, id, onPress} = props;
  return (
    <View style={styles.listItem}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSeeMore} onPress={onPress}>
          See More
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 10,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    height: 250,
    width: 300,
  },
  image: {
    width: '100%',
    height: 180,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  cardTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '27%',
    padding: 20,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#4d4d4d',
  },
  cardSeeMore: {
    color: 'blue',
  },
});

export default Card;
