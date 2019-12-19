import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import MealsNavigator from "./navigation/MealsNavigator";
import {useScreens} from 'react-native-screens';

useScreens();
// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.tff'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.tff'),
//     // 'open-sans-bold': require('../client/assets/fonts/OpenSans-Bold.tff')
//   })
// };

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);
  //
  // if (!fontLoaded) {
  //   return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}/>
  // }

  return (
    <MealsNavigator/>
  );
}

const styles = StyleSheet.create({});
