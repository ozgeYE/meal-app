import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import {Ionicons} from '@expo/vector-icons';

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const meal = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>Meal Detail Screen</Text>
      <Text>{meal.title}</Text>
      <Button title="Go back to Categories" onPress={() => {
        props.navigation.popToTop()
      }}/>
    </View>
  )
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(m => m.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight:
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#ccc"
      >
        <Ionicons name="md-checkmark-circle" size={32} color="green"/>
      </Button>
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;