import React, { Component } from 'react';
import { Button, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';

class Login extends Component{
    constructor(props) {
        super(props);
    }
    render() {

        const { navigate } = this.props.navigation;

        return(
            <View style={styles.login}>
                <Input 
                    type='text'
                    placeholder='Email Address'
                />
                <Input 
                    type='text'
                    placeholder='Password'
                />
                <Button 
                    title='Sign in'
                    onPress={() => navigate('Home')}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    login: {
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 200,
        marginHorizontal: 50
    }

}
)
export default Login;