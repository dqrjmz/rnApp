import {StyleSheet} from 'react-native';

export const loginStyle=StyleSheet.create({
    warpper:{
        flex:1,
        flexDirection :'row',
        justifyContent:'center',
        alignItems:'center'
    },
    loginBox:{
        flex:1,
        height:250,
        marginLeft:20,
        marginRight:20,
        borderWidth:1,
        borderColor:'#333',
    },
    title:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    close:{
        position:'absolute',
        right:10,
        top:0
    },
    inpMargin:{
          marginTop:10,
        marginLeft:20,
        marginRight:20
    },
    name:{
        borderWidth:1,
        borderColor:'#333',
        height:40
    },
    loginBtn:{
        backgroundColor:'green'
    },
    passwordBox:{
        height:20
    },
    forgetPassword:{
        position:'absolute',
        right:20
    }
})