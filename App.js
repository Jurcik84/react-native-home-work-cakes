import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';



// screens
import DetailScreen from './DetailScreen';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Ahoj Lubos</Text>
        <Button 
        title="Go to detail page"
        onPress={()=> this.props.navigation.navigate('Details', {
          itemId: 123,
          data: [1,2,3,4,5,6]
        })} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen

  }, {
    initialRouteName: 'Home'
  }
);

