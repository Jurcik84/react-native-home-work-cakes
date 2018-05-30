import React from 'react';
import { Font } from 'expo';
import { Image } from 'react-native';
import {
    Container, Header, Content, Form, Item, Input, Label, Text, Textarea, Button, Picker
} from 'native-base';


const CAKES_END_POINT = `http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes/`;


class CreateScreen extends React.Component {

    state = {

        name: '',
        imageUrl: '',
        yumFactor: '1',
        comment: '',


    }

    onSubmit = async (value) => {

        console.log(JSON.stringify({ ...this.state, id: Math.floor((Math.random() * 100) + 1) }))

        try {

            const cake_req = {
                ...this.state,
                yumFactor: Number(this.state.yumFactor),
                id: Math.floor((Math.random() * 100) + 1)
            };

            const method_post = 'POST';

            const response = await fetch(CAKES_END_POINT, {

                method: method_post,

                body: JSON.stringify(cake_req),

                headers: new Headers({

                    'Content-Type': 'application/json'
                }),
            });

            if (response.status === 201) {

                this.setState({
                    name: '',
                    imageUrl: '',
                    yumFactor: '1',
                    comment: '',
                });

                console.log('', response)

                this.props.navigation.navigate('Home');
            }
        }
        catch (error) {
            console.error("fetchCakeById:ERROR")
        }
    }

    render() {
        return (<Container>
            <Header />
            <Content>
                <Form>
                    <Item>
                        <Input
                            placeholder="Cake Name"
                            onChangeText={(name) => this.setState({ name })} />
                    </Item>
                    <Item >
                        <Input
                            placeholder="Cake Url"
                            onChangeText={(imageUrl) => this.setState({ imageUrl })} />
                    </Item>
                    <Item>
                        <Picker
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.yumFactor}
                            onValueChange={(yumFactor) => this.setState({ yumFactor })}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                        </Picker>

                    </Item>
                    <Textarea
                        onChangeText={(comment) => this.setState({ comment })}
                        rowSpan={5}
                        bordered
                        placeholder="Textarea" />
                </Form>
                <Button
                    block
                    dark
                    onPress={() => this.onSubmit()}>
                    <Text>Add New Cake</Text>
                </Button>
                <Text>{
                    JSON.stringify(this.state)
                }</Text>
            </Content>
        </Container>
        )
    }
}



export default CreateScreen;