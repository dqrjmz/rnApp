import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, ImageBackground, ListView } from 'react-native';

import { WatchDetail } from './watchDetail';

import { WatchDirversStyle } from './styles/watchDirvers';

const json = require('./data/data.json');

export class WatchDirvers extends Component {
    data = [
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        },
        {
            "type": "jmz",
            "num": 34
        }
    ]

    constructor(props) {
        super(props);

        this.state = {
            listen: 5,
            serverIng: 5,
            shouChe: 20
        }

        this.initListView();
    }

    /**
     * 初始化ListView组件数原
     */
    initListView() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state.dataSource = ds.cloneWithRows(this.data);
    }

    rowIdFn(num) {
        alert(num);
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
     * 渲染行
     */
    _renderRow(rowData) {
        return (
            <View style={[WatchDirversStyle.itemBox]}>
                <TouchableOpacity style={[WatchDirversStyle.btnBoxGO]} onPress={() => {
                    const { navigator } = this.props;
                    if (navigator) {
                        navigator.push({
                            name: 'watchDetail',
                            component: WatchDetail,
                            passProps: {
                                num: rowData.num
                            }
                        });
                    }
                }}>
                    <Text style={[WatchDirversStyle.type]}>{rowData.type}</Text>
                    <Text style={[WatchDirversStyle.num]}>{rowData.num}</Text>
                    <Image style={[WatchDirversStyle.arrowIcon]} source={require('./imgs/watchDirvers/arrow.png')} />
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={[WatchDirversStyle.flex]}>
                <View style={[WatchDirversStyle.topBar]}>
                    <TouchableOpacity style={[WatchDirversStyle.btnBox]} onPress={this.goBack.bind(this)} >
                        <Image style={[WatchDirversStyle.backIcon]} source={require('./imgs/watchDirvers/download.png')} />
                    </TouchableOpacity>
                    <Text>
                        司机监控
                    </Text>
                </View>
                <View style={[WatchDirversStyle.tipText]}>
                    <Text>听单中{this.state.listen}人，服务中{this.state.serverIng}人，手车中{this.state.shouChe}人</Text>
                </View>
                <View style={[WatchDirversStyle.listBox]}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow.bind(this)} />
                </View>
            </View>
        );
    }
}