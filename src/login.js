import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';

import { GetData } from './tools/http';

import { loginStyle } from './styles/login';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    getPassword(text) {
        this.setState({
            password: text,
            username: this.state.username
        });
    }

    getName(text) {
        this.setState({
            username: text,
            password: this.state.password
        });
    }

    loginFn() {
        const { navigator } = this.props;
        if (navigator) {
            // navigator.push({
            //     name: 'SecondPageComonent',
            //     component: SecondPageComonent,
            // })
        }
    }

    close(e) {

    }

    forgetPassword(e) {

    }

    render() {
        return (
            <View style={[loginStyle.warpper]}>
                <View style={[loginStyle.loginBox]}>
                    <View style={[loginStyle.title]}>
                        <Text>用户登录</Text>
                        <TouchableOpacity style={loginStyle.close} onPress={this.close}>
                            <Text >X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[loginStyle.inpMargin]}>
                        <TextInput value={this.state.username} style={[loginStyle.name]} onChangeText={this.getName.bind(this)} />
                    </View>
                    <View style={[loginStyle.inpMargin]}>
                        <TextInput value={this.state.password} onChangeText={this.getPassword.bind(this)} style={[loginStyle.name]} />
                    </View>
                    <View style={[loginStyle.passwordBox]}>
                        <TouchableOpacity style={[loginStyle.forgetPassword]} onPress={this.forgetPassword}>
                            <Text  >忘记密码?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[loginStyle.inpMargin]}>
                        <Button onPress={this.loginFn.bind(this)} title="登录" style={[loginStyle.loginBtn]} />
                    </View>
                </View>
            </View>
        );
    }
}


