import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAqYIDo33m2_jUcx66K6YiZicgs1v2EwOc',
            authDomain: 'authentication-react-nat-a28dc.firebaseapp.com',
            databaseURL: 'https://authentication-react-nat-a28dc.firebaseio.com',
            projectId: 'authentication-react-nat-a28dc',
            storageBucket: 'authentication-react-nat-a28dc.appspot.com',
            messagingSenderId: '839429482018'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}


export default App;