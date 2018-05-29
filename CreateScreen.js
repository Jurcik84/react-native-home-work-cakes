import React from 'react';
import { Font } from 'expo';
import { Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Text, Textarea } from 'native-base';



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
                    <Item  >
                     
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
                <Text>
                    {
                        this.state.text
                    }
                </Text>
            </Content>
        </Container>

        )
    }
}



export default CreateScreen;