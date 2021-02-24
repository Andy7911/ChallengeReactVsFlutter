import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView,Image } from 'react-native'
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import SignUpScreen from '../component/SignUpScreen'
import CommandScreen from '../component/CommandScreen'
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';
export default function Route() {

    const customDrawer = (props) => {
        <SafeAreaView style={{flex:1}}>
            <View style={{height:150,width:100}}>
                <Image source={require('../image/logo.png')} ></Image>
            </View>
            <ScrollView>
                <DrawerItems{...props} />
            </ScrollView>
        </SafeAreaView>

    }

    const AppDrawerNav = createDrawerNavigator({
        commad: {
            screen: CommandScreen
        },
    },
        {
            contentComponent: customDrawer
        });

    const LoginApp = createStackNavigator({
        SignUpScreen: {
            screen: SignUpScreen,
            navigationOptions: () => ({
                title: 'sighup',
            })
        }


    });
    const UserApp = createStackNavigator({
        CommandScreen: {
            screen: AppDrawerNav,
            navigationOptions: () => ({
                title: 'commande',
            })
        },
    })

    const LoginContainer = createAppContainer(LoginApp)
    const UserContainer = createAppContainer(UserApp);
    const [initializing, setInitializing] = useState(true);
    const { user, setUser } = useContext(AuthContext);

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    if (!user) {
        return (


            <LoginContainer />

        );
    };
    return (

        <UserContainer>

        </UserContainer>


    );
}
