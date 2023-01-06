import React, {useCallback, useEffect, useMemo} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Card from './components/Card';

const HomeView: () => Node = props => {
  const {navigation} = props;
  const [count, setCount] = React.useState(0);
  const [drinks, setDrinks] = React.useState([]);
  const [search, setSearch] = React.useState('');

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
        json.drinks.map(drink => console.log({drink}));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const filteredDrinks = useMemo(() => {
    return drinks.filter(drink => {
      return drink.strDrink.toLowerCase().includes(search.toLowerCase());
    });
  }, [drinks, search]);

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#aaaaaa"
          onChangeText={setSearch}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to BarToi !</Text>
          <Text style={styles.instructions}>Drink List</Text>
          <View style={styles.listContainer}>
            {filteredDrinks.length > 0 ? (
              filteredDrinks.map(drink => (
                <Card
                  key={drink.idDrink}
                  title={drink.strDrink}
                  image={drink.strDrinkThumb}
                  onPress={() => goToDetails(drink)}
                />
              ))
            ) : (
              <Text style={styles.noResult}>No Drinks found :(</Text>
            )}
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
    marginBottom: 100,
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
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  noResult: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
});

export default HomeView;
