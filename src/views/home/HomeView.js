import React, {useCallback, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from './components/Card';

const HomeView: () => Node = props => {
  const {navigation} = props;
  const [count, setCount] = React.useState(0);
  const [drinks, setDrinks] = React.useState([]);

  const goToDetails = useCallback(
    drink => {
      navigation.navigate('Details', {
        title: drink.strDrink,
        image: drink.strDrinkThumb,
        id: drink.idDrink,
      });
    },
    [navigation],
  );

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

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to BarToi !</Text>
          <Text style={styles.instructions}>Drink List</Text>
          <View style={styles.listContainer}>
            {drinks.map(drink => (
              <Card
                key={drink.idDrink}
                title={drink.strDrink}
                image={drink.strDrinkThumb}
                onPress={() => goToDetails(drink)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'left',
  },
  listContainer: {
    width: '80%',
  },
});

export default HomeView;
