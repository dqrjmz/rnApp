import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, ImageBackground, ListView,TouchableHighlight  } from 'react-native';

import {WarningDetail} from './warningDetail'

import { WatchDetailStyle } from './styles/watchDetail';

const json = require('./data/data.json');

export class WatchDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id:this.props.num,
            selectIndex:-1
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
                name: 'WarningDetail',
                component: WarningDetail,
                passProps: {
                    num
                }
            });
        }
    }

    /**
     * 渲染行
     */
    _renderRow(rowData,sectionID, rowID, highlightRow) {
        var str='';
        if(rowID==0){
            str=(
            <View style={[WatchDetailStyle.title]}><Text style={[WatchDetailStyle.textTitle]}>按投诉数量从高到低排序</Text></View>
            )
        }else{
            str= <TouchableOpacity style={[WatchDetailStyle.btnBoxGO]} onPress={() =>{
                    this.goDetail(rowData.num);
                     highlightRow(sectionID, rowID);
                    }}>
                    <Image resizeMode="contain" style={[WatchDetailStyle.IconLeft]} source={require('./imgs/watchDirvers/pic.png')} />
                    <Text style={[WatchDetailStyle.type]}>{rowData.type}{rowID}</Text>
                    <Text style={[WatchDetailStyle.num]}>{rowData.num}</Text>
                    <Image style={[WatchDetailStyle.arrowIcon]} source={require('./imgs/watchDirvers/arrow.png')} />
                </TouchableOpacity>
        }
        return (
            <View style={[WatchDetailStyle.itemBox]}>
               {str}
            </View>
        );
    }

    render() {
        return (
            <View style={[WatchDetailStyle.flex]}>
                <View style={[WatchDetailStyle.topBar]}>
                    <TouchableOpacity style={[WatchDetailStyle.btnBox]} onPress={this.goBack.bind(this)} >
                        <Image style={[WatchDetailStyle.backIcon]} source={require('./imgs/watchDirvers/download.png')} />
                    </TouchableOpacity>
                    <Text>
                        司机监控详情
                    </Text>
                </View>
                <View style={[WatchDetailStyle.tipContent]}>
                    <View style={[WatchDetailStyle.tipSame]}>
                        <Text>5</Text>
                        <Text>15分钟以内人数</Text>
                    </View>
                    <View style={[WatchDetailStyle.tipSame]}>
                        <Text>5</Text>
                        <Text>15分钟以内人数</Text>
                    </View>
                </View>
                <View style={[WatchDetailStyle.listBox]}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow.bind(this)} />
                </View>
            </View>
        );
    }
}