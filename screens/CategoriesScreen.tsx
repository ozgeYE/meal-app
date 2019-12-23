import React from 'react';
import {FlatList, StyleSheet} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import {Category} from "../interfaces";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  const categoryItem = (itemData) => {
    return (
      <CategoryGridTile name={itemData.item.name} color={itemData.item.color} onSelect={() => {
        props.navigation.navigate({routeName: 'CategoryMeals', params: {categoryId: itemData.item.id}})
      }}/>
    )
  };

  return (
    <FlatList keyExtractor={(item: Category, index) => item.id.toString()} numColumns={2} data={CATEGORIES}
              renderItem={item => categoryItem(item)}/>
  )
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meals Categories',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


export default CategoriesScreen;