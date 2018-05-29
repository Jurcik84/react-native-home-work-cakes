import React from 'react';
import { Font } from 'expo';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Text, Textarea, Button } from 'native-base';



class CreateScreen extends React.Component {

    state = {
        text: ''
    }

    render() {

        return (<Container>
            <Header />
            <Content>
                <Form>
                    <Item>
                        <Input
                            placeholder="Cake Name"
                            onChangeText={(text) => this.setState({ text })} />
                    </Item>
                    <Item >
                        <Input
                            placeholder="Cake Url"
                            onChangeText={(text) => this.setState({ text })} />
                    </Item>
                    <Item>
                        <Input
                            placeholder="Cake rate"
                            onChangeText={(text) => this.setState({ text })} />
                    </Item>
                    <Textarea
                        onChangeText={(text) => this.setState({ text })}
                        rowSpan={5}
                        bordered
                        placeholder="Textarea" />
                </Form>
                <Button 
                block
                dark
                onPress={() => this.props.navigation.navigate('Home')}>
                    <Text>Add New Cake</Text>
                </Button>
            </Content>
        </Container>

        )
    }
}



export default CreateScreen;