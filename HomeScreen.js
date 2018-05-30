import React from 'react';
import { connect } from 'react-redux';
import { Font, AppLoading } from 'expo';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Button, Title, Form, Item, Input, Label, Right } from 'native-base';


import Roboto from 'native-base/Fonts/Roboto.ttf';
import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf';
// Roboto: require("native-base/Fonts/Roboto.ttf"),
// Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),

// server end point
const CAKES_END_POINT = `http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes/`;


// Redux Actions
import { loadAllCakes } from './src/actions';

// HomeScreen
class HomeScreen extends React.Component {

    state = {
        cakes: [],
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

    componentDidMount() {
        this.props.loadAllCakes();
    }

    render() {

        const { fetchError, isFontLoaded } = this.state;
        const { cakes } = this.props;

        if (isFontLoaded === false) {
            return <AppLoading />;
        }
        return (
            <Container>
                <Header>
                    <Right>
                        <Button
                            rounded
                            danger
                            onPress={() => this.props.navigation.navigate('Create')}>
                            <Text>+</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List>
                        {
                            cakes.map((cakeItem, cakeIndex) => <ListItem
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


const mapStateToProps = (state) => {

    return {
        cakes: state.cakes,
    }
};


const mapDispatchToProps = (dispatch) => {

    return {
        loadAllCakes: () => {
            dispatch(loadAllCakes())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)