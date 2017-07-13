// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import {Login} from './src/login';
import {Main} from './src/main';
import {WatchDirvers} from './src/watchDirvers';
import {WatchDetail} from './src/watchDetail';
import {WarningDetail} from './src/warningDetail';
import {WaterDetail} from './src/waterDetail';

export default class rnTest extends Component{

  render(){
        return (
          <Navigator
            initialRoute={{ 
              name: 'Main', 
              component: WaterDetail,
              passProps:{

              }
            }}
            configureScene={(route) => {
              return Navigator.SceneConfigs.FadeAndroid;
            }}
            renderScene={(route, navigator) => {
              let Component = route.component;
              if(route.component){
                  return <Component  navigator={navigator} {...route} {...route.passProps} />
              }
            }} />
        );
  }
}




AppRegistry.registerComponent('rnTest', () => rnTest);
