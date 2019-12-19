import React from 'react';
import {Text, View, Button, FlatList, StyleSheet, TouchableOpacity, Platform} from "react-native";
import CATEGORIES from "../data/dummy-data";
import {Category} from "../interfaces";
import Colors from "../constants/Color";

const CategoriesScreen = (props) => {
  const categoryItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.gridItem} onPress={() => {
        props.navigation.navigate({routeName: 'CategoryMeals', params: {categoryId: itemData.item.id}})
      }}>
        <View>
          <Text>{itemData.item.name}</Text>
        </View>
      </TouchableOpacity>
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
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});


export default CategoriesScreen;