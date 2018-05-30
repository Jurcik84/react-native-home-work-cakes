import React from 'react';

import { Provider } from 'react-redux'
import { Font, AppLoading } from 'expo';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Button, Title, Form, Item, Input, Label, Right } from 'native-base';


import Roboto from 'native-base/Fonts/Roboto.ttf';
import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf';
// Roboto: require("native-base/Fonts/Roboto.ttf"),
// Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),


// screens
import DetailScreen from './DetailScreen';
import CreateScreen from './CreateScreen';
import HomeScreen from './HomeScreen';


// Redux Store
import store from './src/store';


const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailScreen
    },
    Create: {
      screen: CreateScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}


export default App;