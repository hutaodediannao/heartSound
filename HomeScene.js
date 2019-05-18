import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class HomeScene extends Component{
    //UI渲染
    render() {
        //return不带（）会报错
        return(
            <View style={styles.container}>
                <Text style={styles.text}>我是首页</Text>
            </View>
        );
    }
}

//CSS样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text:{
        fontSize:20,
    }
});
