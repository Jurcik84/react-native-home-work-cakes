import React from 'react';
import { Font, AppLoading } from 'expo';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Button, Title, Form, Item, Input, Label } from 'native-base';


import Roboto from 'native-base/Fonts/Roboto.ttf';
import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf';
// Roboto: require("native-base/Fonts/Roboto.ttf"),
// Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),


// screens
import DetailScreen from './DetailScreen';
import CreateScreen from './CreateScreen';


// server end point
const CAKES_END_POINT = `http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes/`;


// HomeScreen
class HomeScreen extends React.Component {

  state = {
    data: [],
    fetchError: '',
    isFontLoaded: false
  }

  // static navigationOptions = {
  //   headerRight: (
  //     <Button onPress={() => this.props.navigation.navigate('Create')}>
  //       <Text>Miau</Text>
  //     </Button>
  //   )
  // }



  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': Roboto,
      'Roboto_medium': Roboto_medium,
    });

    this.setState({
      isFontLoaded: true
    })
  }

  async componentDidMount() {

    try {
      const resposne = await fetch(CAKES_END_POINT);
      const json = await resposne.json();

      // setState sync-like
      this.setState({
        data: json
      });

    } catch (error) {
      this.setState({
        fetchError: error.message
      });
    }
  }

  render() {

    const { data, fetchError, isFontLoaded } = this.state;

    if (isFontLoaded === false) {
      return <AppLoading />;
    }
    return (
      <Container>
        <Header>
          <Button onPress={() => this.props.navigation.navigate('Create')}>
            <Text>Create Screen</Text>
          </Button>
        </Header>
        <Content>
          <List>
            {
              data.map((cakeItem, cakeIndex) => <ListItem
                key={cakeItem.id}
                onPress={() => this.props.navigation.navigate('Details', {
                  data: cakeItem
                })} >
                <Thumbnail
                  size={80}
                  source={{ uri: cakeItem.imageUrl }} />
                <Body>
                  <Text>Sankhadeep</Text>
                  <Text>{cakeItem.name}</Text>
                </Body>
              </ListItem>)
            }
          </List>
        </Content>
      </Container>
    );
  }
}


export default createStackNavigator(
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

