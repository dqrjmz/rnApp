
## react-native是什么？能干什么？
```
跨平台移动端框架；
使用前端技术开发移动端app(原生)
```

## 搭建开发环境

[搭建开发环境](http://reactnative.cn/docs/0.46/getting-started.html)

## 调试工具
```
npm install -g react-devtools

react-devtools
```
## 项目基础依赖
```
import React,{Component} from 'react';
import {

} from 'react-native';
```

## react基本介绍
```react

一个组件
state:组件自身状态  this.setState()
props:父组件传递的值
jsx

class ReactComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            disabled:true
        };
    }

    onInit(){

    }

    componentWillReceiveProps (nextProps) {  
        <!--将要接受新的props-->
        if (this.props.disabled !== nextProps.disabled) {
            
        }
    }

    shouldComponentUpdate (nextProps, nextState) {  
        <!--组件是否要更新-->
        <!--比较props或者states，返回true则更新照常，返回false则取消更新，且不会调用下面的两个生命周期函数-->
    }

     componentWillMount(){
        <!--组件将被卸载-->
    }

    componentWillUnmount(){
        <!--组件已经被卸载-->
    }

    render(){
        return (
            <View>

            </View>
        );
    }
}
```

## 各种组件
- 公共
- android组件
- ios组件
- 第三方组件

## 路由
```Navigator

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

    <!--点击跳转-->
    const { navigator } = this.props;
        if (navigator) {
             navigator.push({
                 name: 'SecondPageComonent',
                 component: SecondPageComonent,
             })
        }
    <!--点击返回-->
     const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
```

## flux布局
```
基本需要：
flex:1;  填满父元素整个剩余空间
flexDirection:'row'  布局主轴，交叉轴
alignItems :'center ...'flex-start', 'flex-end', 'center', 'stretch'' 元素在交叉轴方向的排列
justifyContent ：'center ...'flex-start', 'flex-end', 'center'' 元素在主轴上的排列
其他css：
css3样式的驼峰写法；
```