import React, { Component } from 'react';
import { StyleSheet, FlatList, TouchableHighlight, View, TextInput } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { NavigationActions } from 'react-navigation'


export default class Account extends Component {
    static navigationOptions = {
        headerMode: 'float',
        title: 'Account'
    }

    constructor(props) {
        super(props);

    }

    componentWillMount() {
        // setTimeout(() => this.props.navigation.navigate('Course'), 5000)

    }

    render() {

        return (
            <Container >
                <Content style={{backgroundColor: 'white'}}>
                    <List>
                        <ListItem><Text>Change password</Text></ListItem>
                    </List>
                </Content>
            </Container>
        )
    }



}