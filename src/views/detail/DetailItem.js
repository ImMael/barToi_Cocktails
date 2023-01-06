import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
const DetailItem = ({navigation, route}) => {
  const {id} = route.params;
  const [drink, setDrink] = React.useState({});

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(json => {
        setDrink(json.drinks[0]);
      })
      .catch(error => {
        console.error(error);
      });
  });

  const generateIngredients = () => {
    let ingredients = [];
    for (let i = 1; i <= 10; i++) {
      if (drink[`strIngredient${i}`]) {
        ingredients.push(
          <View key={i} style={styles.ingredientTag}>
            <Text style={styles.ingredientText}>
              {drink[`strIngredient${i}`]}
            </Text>
            <Text style={styles.ingredientQuantity}>
              {drink[`strMeasure${i}`]}
            </Text>
          </View>,
        );
      }
    }
    return ingredients;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={{
            uri: drink.strDrinkThumb,
          }}
        />
        <View style={styles.titleSubtitle}>
          <View style={styles.textTitle}>
            <Text style={styles.title}>{drink.strDrink}</Text>
            <Text style={styles.subtitle}>{drink.strAlcoholic}</Text>
          </View>
          <View style={styles.likeContainer}>
            <Text>Like</Text>
          </View>
        </View>
        <Text style={styles.text}>{drink.strInstructions}</Text>
        <View style={styles.ingredients}>
          <Text style={styles.text}>You'll need:</Text>
          <View style={styles.ingredientsList}>{generateIngredients()}</View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  ingredients: {
    marginTop: 20,
  },
  ingredientsList: {
    marginVertical: 10,
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ingredientTag: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    margin: 5,
    height: 60,
  },
  ingredientText: {
    fontSize: 16,
  },
  ingredientQuantity: {
    fontSize: 16,
    color: 'gray',
  },
  titleSubtitle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  textTitle: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    margin: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    width: '80%',
  },
  contentContainer: {
    flex: 2,
    display: 'flex',
    alignItems: 'center',
  },
});

export default DetailItem;
