import {StyleSheet} from 'react-native';

export const MainStyle=StyleSheet.create({
    warpper:{
        flex:1,
        margin:10
    },
    tabBox:{
        height:20,
        paddingLeft:40
    },
    watch:{
        position:'absolute',
        right:10
    },
    first:{
        marginTop:20,
        flexDirection:'row',
        height:100
    },
    same:{
        flex:1,
        alignItems:'center'
    },
    btnStyle:{
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#333',
        alignItems:'center',
        justifyContent:'center'
    },
    textColor:{
        color:'#333'
    }
})