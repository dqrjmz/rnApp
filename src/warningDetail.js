import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, ImageBackground, ListView, TouchableHighlight } from 'react-native';


import { WarningDetailStyle } from './styles/warningDetail';

const json = require('./data/data.json');

export class WarningDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.num,
            selectIndex: -1
        }

        this.initListView();
        alert(this.state.id);
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
        var str = '';
        if (rowID == 0) {
            str = (
                <View style={[WarningDetailStyle.title]}><Text style={[WarningDetailStyle.textTitle]}>按投诉时间排序</Text></View>
            )
        } else {
            str = <TouchableOpacity style={[WarningDetailStyle.btnBoxGO]} >
                <View style={[WarningDetailStyle.type]}>
                    <Text >{rowData.type}{rowID}</Text>
                </View>
                <View style={[WarningDetailStyle.num]}>
                    <Text>{rowData.num}</Text>
                </View>
            </TouchableOpacity>
        }
        return (
            <View style={[WarningDetailStyle.itemBox]}>
                {str}
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
            <View style={[WarningDetailStyle.flex]}>
                <View style={[WarningDetailStyle.topBar]}>
                    <TouchableOpacity style={[WarningDetailStyle.btnBox]} onPress={this.goBack.bind(this)} >
                        <Image style={[WarningDetailStyle.backIcon]} source={require('./imgs/watchDirvers/download.png')} />
                    </TouchableOpacity>
                    <Text>
                        oppo测速机
                    </Text>
                    <TouchableOpacity style={[WarningDetailStyle.phoneBox]} onPress={this.callWarning.bind(this)} >
                        <Image style={[WarningDetailStyle.phone]} source={require('./imgs/watchDirvers/phone.png')} />
                    </TouchableOpacity>
                </View>
                <View style={[WarningDetailStyle.tipContent]}>
                    <View style={[WarningDetailStyle.tipSame]}>
                        <Text>5</Text>
                        <Text>15分钟以内人数</Text>
                    </View>
                    <View style={[WarningDetailStyle.tipSame]}>
                        <Text>5</Text>
                        <Text>15分钟以内人数</Text>
                    </View>
                </View>
                <View style={[WarningDetailStyle.listBox]}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow.bind(this)} />
                </View>
            </View>
        );
    }
}