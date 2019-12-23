import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import {Meal} from "../interfaces";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData: any) => {
    return <MealItem meal={itemData.item} onSelectMeal={() =>
      props.navigation.navigate({routeName: 'MealDetail', params: {mealId: itemData.item.id}})
    }/>
  };

  const categoryId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals}
                keyExtractor={(meal: Meal, index) => meal.id.toString()}
                renderItem={itemData => renderMealItem(itemData)}
                style={{width: '100%'}}
      />
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