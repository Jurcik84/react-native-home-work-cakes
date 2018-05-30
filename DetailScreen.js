import React from 'react';
import { Font } from 'expo';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';



class DetailScreen extends React.Component {

    render() {
        const itemFromParams = this.props.navigation.getParam("data");
        return (
            <Container>
                <Header >
                    <Text>Cake Detail</Text>
                </Header>
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <CardItem>
                                    <Image source={{ uri: itemFromParams.imageUrl ? itemFromParams.imageUrl : "" }}
                                        style={{ height: 200, width: null, flex: 1 }} />
                                </CardItem>
                            </Body>
                        </CardItem>
                        <CardItem >
                            <Text>name : {itemFromParams.name}</Text>
                        </CardItem>
                        <CardItem >
                            <Text>comment : {itemFromParams.comment}</Text>
                        </CardItem>
                        <CardItem>
                            <Text>yumFactor : {itemFromParams.yumFactor}</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>

        )
    }
}



export default DetailScreen;