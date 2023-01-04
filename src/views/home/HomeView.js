import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const HomeView: () => Node = () => {
  const [count, setCount] = React.useState(0);
  const [drinks, setDrinks] = React.useState([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then(response => response.json())
      .then(json => {
        setCount(json.drinks.length);
        setDrinks(json.drinks.map(drink => drink));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(drinks);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to BarToi !</Text>
      <Text style={styles.instructions}>Using CocktailsDB API !</Text>
      <Text style={styles.instructions}>Current : {count}</Text>
      <View style={styles.listContainer}>
        {drinks.map(drink => (
          <View key={drink.idDrink} style={styles.listItem}>
            <Image
              source={{
                uri: drink.strDrinkThumb,
              }}
              style={styles.image}
            />
            <Text>{drink.strDrink}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#eee',
    borderColor: 'black',
    borderWidth: 1,
  },
  listContainer: {
    width: '80%',
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default HomeView;
