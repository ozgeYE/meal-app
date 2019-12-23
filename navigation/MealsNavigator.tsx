import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import {Platform} from "react-native";
import Colors from "../constants/Color";
import FavoritesScreen from "../screens/FavoritesScreen";
import {Ionicons} from '@expo/vector-icons';
import React from 'react';

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen
}, {
  // initialRouteName: 'CategoriesScreen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }
});

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Meals',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
      }
    }
  },
  Favorite: {
    screen: FavoritesScreen, navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
      }
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: Colors.accentColor,
  }
});

export default createAppContainer(MealsFavTabNavigator)