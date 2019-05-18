// import React, {React.Component<Props>} from 'react';
// import {
//     Platform,
//     Image,
//     View,
//     Text,
// } from 'react-native';
// import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
//
// // 1import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
//
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
//
//
// class Home extends React.Component<Props> {
//     static navigationOptions = {
//         title: '这是主页',
//     };
//
//     render() {
//         return (
//             <View>
//                 <Text>Home</Text>
//             </View>
//         );
//     }
// }
//
// class Case extends React.Component<Props> {
//     static navigationOptions = {
//         title: '这是case页',
//     };
//
//     render() {
//         return (
//             <View>
//                 <Text>Case</Text>
//             </View>
//         );
//     }
// }
//
// class Educate extends React.Component<Props> {
//     static navigationOptions = {
//         title: '这是Educate页',
//     };
//
//     render() {
//         return (
//             <View>
//                 <Text>Educate</Text>
//             </View>
//         );
//     }
// }
//
// class Mine extends React.Component<Props> {
//     static navigationOptions = {
//         title: '这是Mine页',
//     };
//
//     render() {
//         return (
//             <View>
//                 <Text>Mine</Text>
//             </View>
//         );
//     }
// }
//
// const TabContainer = createBottomTabNavigator(
// // RouteConfigs
//     {
//         首页: createStackNavigator(
// // RouteConfigs
//             {
//                 screen: Home,
//             },
// // StackNavigatorConfig
//             {
//                 headerMode: 'screen',
//                 mode: Platform.OS === 'ios' ? 'modal' : 'card',
//                 navigationOptions: {
//                     headerStyle: {
//                         backgroundColor: '#6699ff',
//                     },
//                     title: '首页',
//                     headerTintColor: '#ffffff',
//                     headerTitleStyle: {
//                         fontWeight: 'normal',
//                     },
//                 },
//             },
//         ),
//         病例: createStackNavigator(
//             // RouteConfigs
//             {
//                 screen: Case,
//             },
//             // StackNavigatorConfig
//             {
//                 headerMode: 'screen',
//                 mode: Platform.OS === 'ios' ? 'modal' : 'card',
//                 navigationOptions: {
//                     headerStyle: {
//                         backgroundColor: '#6699ff',
//                     },
//                     title: '病历',
//                     headerTintColor: '#ffffff',
//                     headerTitleStyle: {
//                         fontWeight: 'normal',
//                     },
//                 },
//             },
//         ),
//         宣教: createStackNavigator(
//             // RouteConfigs
//             {
//                 screen: Educate,
//             },
//             // StackNavigatorConfig
//             {
//                 headerMode: 'screen',
//                 mode: Platform.OS === 'ios' ? 'modal' : 'card',
//                 navigationOptions: {
//                     headerStyle: {
//                         backgroundColor: '#6699ff',
//                     },
//                     title: '宣教',
//                     headerTintColor: '#ffffff',
//                     headerTitleStyle: {
//                         fontWeight: 'normal',
//                     },
//                     tabBarIcon: ({tintColor}) => (<Icon name='educate_select'/>),
//
//                 },
//             },
//         ),
//         我的: createStackNavigator(
//             // RouteConfigs
//             {
//                 screen: Mine,
//             },
//             // StackNavigatorConfig
//             {
//                 headerMode: 'screen',
//                 mode: Platform.OS === 'ios' ? 'modal' : 'card',
//                 navigationOptions: {
//                     headerStyle: {
//                         backgroundColor: '#6699ff',
//                     },
//                     title: '我的',
//                     headerTintColor: '#ffffff',
//                     headerTitleStyle: {
//                         fontWeight: 'normal',
//                     },
//                 },
//             },
//         ),
//     },
// // BottomTabNavigatorConfig
//     {
//         backBehavior: 'none',
//         tabBarOptions: {
//             activeTintColor: '#5599ff',
//             style: {
//                 backgroundColor: '#f8f8f8'
//             },
//             indicatorStyle: {
//                 opacity: 0
//             },
//             tabStyle: {
//                 padding: 0
//             },
//             labelStyle: {
//                 fontSize: 12,
//             },
//
//         },
//         navigationOptions: ({navigation}) => ({
//             tabBarIcon: ({focused, tintColor}) => {
//                 const {routeName} = navigation.state;
//                 if (routeName === '首页') {
//                     if (focused) {
//                         return <Image source={require('./xx_wode.png')}/>;
//                     } else {
//                         return <Image source={require('./jy_wode.png')}/>;
//                     }
//                 } else if (routeName === '病例') {
//                     if (focused) {
//                         return <Image source={require('./xx_wode.png')}/>;
//                     } else {
//                         return <Image source={require('./xx_wode.png')}/>;
//                     }
//
//                 } else if (routeName === '宣教') {
//                     if (focused) {
//                         return <Image source={require('./xx_wode.png')}/>;
//                     } else {
//                         return <Image source={require('./xx_wode.png')}/>;
//                     }
//
//                 } else {
//                     if (focused) {
//                         return <Image source={require('./xx_wode.png')}/>;
//                     } else {
//                         return <Image source={require('./xx_wode.png')}/>;
//                     }
//
//                 }
//             },
//         }),
//     }
// );
//
// const Navagitor = createBottomTabNavigator(
//     {
//         HOME: createStackNavigator(
//             {
//                 screen: Home
//             }
//         ),
//         CASE: createStackNavigator(
//             {screen: Case}
//         ),
//         EDUCATE: createStackNavigator(
//             {screen: Educate}
//         ),
//         MINE: createStackNavigator(
//             {screen: Mine}
//         ),
//     },
//     {
//         initialRouteName: 'HOME',
//         tabBarOptions: {
//             activeTintColor: 'white',
//             labelStyle: {
//                 fontSize: 12,
//             },
//             style: {
//                 backgroundColor: 'orange',
//             },
//             showIcon: true,
//             inactiveTintColor: 'blue',
//             inactiveBackgroundColor: 'red',
//         },
//     },
// )
//
// export default createAppContainer(Navagitor)

import React, {Component} from "react";
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from "react-navigation";
import {
    Platform,
    StyleSheet,
    Image,
    View,
    Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

class ListScreen extends React.Component<Props> {
    static navigationOptions = {
        title: '列表',
    }

    render() {
        return (<View>
            <Text>list</Text>
        </View>)
    }
}

class NetScreen extends React.Component<Props> {
    static navigationOptions = {
        title: '主页',
    }

    render() {
        return (<View>
            <Text>forms</Text>
        </View>)
    }
}

class PhotoScreen extends React.Component<Props> {
    static navigationOptions = {
        title: '照片',
    }

    render() {
        return (<View>
            <Text>face</Text>
        </View>)
    }
}

class MyScreen extends React.Component<Props> {
    static navigationOptions = {
        title: '设置',
    }

    render() {
        return (<View>
            <Text>setting</Text>
        </View>)
    }
}

const BottomTabNavigator = createBottomTabNavigator(
    {
        Photo: {
            screen: createStackNavigator({Screen: PhotoScreen}, {initialRouteName: 'Screen'}),
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '消息',
                tabBarIcon: ({focused, tintColor}) => {
                    if (focused) {
                        return <Image style={styles.imgStyle} source={require('./res/icon/jy_xiaoxi.png')}/>
                    } else {
                        return <Image style={styles.imgStyle} source={require('./res/icon/xx_xiaoxi.png')}/>
                    }
                    // /*<MaterialCommunityIcons*/}
                    //     {/*name={'face'}*/}
                    //     {/*size={30}*/}
                    //     {/*color={tintColor}*/}
                    // {/*/>*/
                },
                tabBarOnPress: () => {
                    route(navigation)
                }
            }),
        },
        List1: {
            screen: createStackNavigator({Screen: ListScreen}, {initialRouteName: 'Screen'}),
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '联系人',
                tabBarIcon: ({focused, tintColor}) => {
                    if (focused) {
                        return <Image style={styles.imgStyle} source={require('./res/icon/jy_leiida.png')}/>
                    } else {
                        return <Image style={styles.imgStyle} source={require('./res/icon/xx_qunliao.png')}/>
                    }
                },

                //     (
                //     <MaterialCommunityIcons
                //         name={'format-list-bulleted'}
                //         size={30}
                //         color={tintColor}
                //     />
                // ),
                tabBarOnPress: () => {
                    route(navigation)
                }
            }),
        },
        My: {
            screen: createStackNavigator({Screen: MyScreen}, {initialRouteName: 'Screen'}),
            navigationOptions: {
                tabBarLabel: '雷达',
                tabBarIcon: ({focused, tintColor}) => {
                    if (focused) {
                        return <Image style={styles.imgStyle} source={require('./res/icon/tab_found_hover.png')}/>
                    } else {
                        return <Image style={styles.imgStyle} source={require('./res/icon/tab_found.png')}/>
                    }
                },
                //     (
                //     <Feather
                //         name={'settings'}
                //         size={30}
                //         color={tintColor}
                //     />
                // ),
            }
        },
        Net: {
            screen: createStackNavigator({Screen: NetScreen}, {initialRouteName: 'Screen'}),
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => {
                    if (focused) {
                        return <Image style={styles.imgStyle} source={require('./res/icon/jy_wode.png')}/>
                    } else {
                        return <Image style={styles.imgStyle} source={require('./res/icon/xx_wode.png')}/>
                    }
                    // <FontAwesome
                    //     name={'wpforms'}
                    //     size={30}
                    //     color={tintColor}
                    // />
                },
                tabBarOnPress: () => {
                    route(navigation)
                }
            }),
        },
    },
    {
        initialRouteName: 'Net', // 设置默认的页面组件
        initialRouteParams: {title: 'Net'}, // 找这条命令不容易, 翻github翻了一个小时
        lazy: true, // 在app打开的时候将底部标签栏全部加载，默认false, 推荐改成true
        backBehavior: null, // 点击返回退到上级界面
        tabBarOptions: {
            activeTintColor: '#6699FF', // 选中的颜色
            inactiveTintColor: 'black', // 未选中的颜色

            showLabel: true,
            showIcon: true,
            style: {
                backgroundColor: '#FFFFF',
                height: 50,
            },
            tabStyle: {
                height: 50,
            },
            labelStyle: {
                fontSize: 12,
            },
        },
    },
);

const styles = StyleSheet.create({
    imgStyle: {
        width: 20,
        height: 20,
    }
})

/**
 * Tab点击跳转调用的公共方法
 */
const route = (navigation) => {
    if (!navigation.isFocused()) {
        navigation.navigate(navigation.state.routeName, {
            title: navigation.state.routeName
        })
    }
};

export default createAppContainer(BottomTabNavigator)