import React, { Component } from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';

import {WatchDirvers} from './watchDirvers';

import {MainStyle} from './styles/main';

export class Main extends Component {
    constructor(props) {
        super(props);

        this.state={
            nowMoney:2000,
            nowDirvers:20,
            warning:20,
            canncel:20
        }
    }

    goBack() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    _onPressButton(){

    }

    /**
     * 监听司机
     */
    watchFn(){
        let {navigator}=this.props;
        if(navigator){
            navigator.push({
                name:'watchDirvers',
                component:WatchDirvers
            });
        }
    }

    warnFn(){
         let {navigator}=this.props;
        if(navigator){
            navigator.push({
                name:'watchDirvers',
                component:WatchDirvers
            });
        }
    }

    render() {
        return (
            <View style={[MainStyle.warpper]}>
                <View style={[MainStyle.tabBox]}>
                    <Text>工作台</Text>
                    <TouchableOpacity style={[MainStyle.watch]} onPress={this.watchFn.bind(this)}>
                        <Text >司机监控</Text>
                    </TouchableOpacity>
                </View>
                <View style={[MainStyle.first]}>
                    <View style={[MainStyle.same]}>
                       <TouchableOpacity style={[MainStyle.btnStyle]} onPress={this._onPressButton.bind(this)}>
                            <Text style={[MainStyle.textColor]}>今日累计流水{this.state.nowMoney}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[MainStyle.same]}>
                         <TouchableOpacity style={[MainStyle.btnStyle]} onPress={this._onPressButton.bind(this)}>
                            <Text style={[MainStyle.textColor]}>在线司机数{this.state.nowDirvers}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[MainStyle.first]}>
                    <View style={[MainStyle.same]}>
                       <TouchableOpacity style={[MainStyle.btnStyle]} onPress={this.warnFn.bind(this)}>
                            <Text style={[MainStyle.textColor]}>投诉{this.state.warning}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[MainStyle.same]}>
                         <TouchableOpacity style={[MainStyle.btnStyle]} onPress={this._onPressButton.bind(this)}>
                            <Text style={[MainStyle.textColor]}>取消{this.state.canncel}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}