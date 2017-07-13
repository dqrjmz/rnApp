import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, ImageBackground, ListView, TouchableHighlight } from 'react-native';


import { WaterDetailStyle } from './styles/waterDetail';

const json = require('./data/data.json');

export class WaterDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.num,
            selectIndex: -1
        }

        this.initListView();
    }

    /**
     * 初始化ListView组件数原
     */
    initListView() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state.dataSource = ds.cloneWithRows(json);
    }

    /**
     * 返回上一个场景
     */
    goBack() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    /**
     * 获取详情信息(投诉详情)
     * @param {number} num 
     */
    goDetail(num) {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'watchDetail',
                component: WatchDetail,
                passProps: {
                    num
                }
            });
        }
    }

    /**
     * 渲染行
     */
    _renderRow(rowData, sectionID, rowID, highlightRow) {


        return (
            <View style={[WaterDetailStyle.itemBox]}>
                <TouchableOpacity style={[WaterDetailStyle.btnBoxGO]} >
                    <View style={[WaterDetailStyle.type]}>
                        <Text >{rowData.type}{rowID}</Text>
                    </View>
                    <View style={[WaterDetailStyle.num]}>
                        <Text>{rowData.num}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * 打电话
     */
    callWarning() {

    }

    render() {
        return (
            <View style={[WaterDetailStyle.flex]}>
                <View style={[WaterDetailStyle.topBar]}>
                    <TouchableOpacity style={[WaterDetailStyle.btnBox]} onPress={this.goBack.bind(this)} >
                        <Image style={[WaterDetailStyle.backIcon]} source={require('./imgs/watchDirvers/download.png')} />
                    </TouchableOpacity>
                    <Text>
                        oppo测速机
                    </Text>
                    <TouchableOpacity style={[WaterDetailStyle.phoneBox]} onPress={this.callWarning.bind(this)} >
                        <Image style={[WaterDetailStyle.phone]} source={require('./imgs/watchDirvers/phone.png')} />
                    </TouchableOpacity>
                </View>
                <View style={[WaterDetailStyle.tipContent]}>
                    <View style={[WaterDetailStyle.tipSame]}>
                        <Text>5</Text>
                        <Text>完成流水</Text>
                    </View>
                    <View style={[WaterDetailStyle.tipSame]}>
                        <Text>5</Text>
                        <Text>当日订单</Text>
                    </View>
                    <View style={[WaterDetailStyle.tipSame]}>
                        <Text>5</Text>
                        <Text>计费时长（h）</Text>
                    </View>
                </View>
                <View style={[WaterDetailStyle.imgBox]}>
                    <Image style={[WaterDetailStyle.bigImg]} source={require('./imgs/watchDirvers/u90.png')} />
                </View>
                <View style={[WaterDetailStyle.listBox]}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow.bind(this)} />
                </View>
            </View>
        );
    }
}