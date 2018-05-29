import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class DetailScreen extends React.Component {

    render() {

        const itemFromParams = this.props.navigation.getParam("itemId")

        return (
            <View style={styles.container}>
              <Text>
                {
itemFromParams
                }
             </Text>
            </View>
        )
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

export default DetailScreen;