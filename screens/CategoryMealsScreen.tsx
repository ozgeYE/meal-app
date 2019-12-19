import React from 'react';
import {Text, View, Button, StyleSheet, Platform} from "react-native";
import CATEGORIES from "../data/dummy-data";
import Colors from "../constants/Color";

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(c => c.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Text>{selectedCategory.name}</Text>
      <Button title="Go to Detail" onPress={() => {
        props.navigation.navigate({routeName: 'MealDetail'})
      }}/>
      <Button title="Go Back" onPress={() => {
        props.navigation.goBack();
      }}/>
    </View>
  )
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(c => c.id === categoryId);

  return {
    headerTitle: selectedCategory.name,
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;