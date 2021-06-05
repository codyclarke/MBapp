import React, { Component } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Faq from './FaqComponent';
import Sales from './SalesComponent';
import StoreDetail from './StoreDetailComponent';

const SalesNavigator = createStackNavigator(
    {
        Sales: { screen: Sales },
        StoreDetail: { screen: StoreDetail}
        
    },
    {
        initialRouteName: 'Sales',
        headerMode: 'screen'
    }
)

const MainNavigator = createMaterialTopTabNavigator(
    {
        Sales: {screen: SalesNavigator},
        Faqs: {screen: Faq}
    },
    {
        initialRouteName: 'Sales',
        tabBarOptions: {
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: '#153853',
            },
            indicatorStyle: {
                backgroundColor: '#dee0c8'
            },
            pressColor: {
                backgroundColor: '#000'
            }
        }
    }
)

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component{
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    };
}

export default Main;