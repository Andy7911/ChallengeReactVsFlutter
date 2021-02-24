import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import SignUpScreen from '../component/SignUpScreen'
import CommandScreen from '../component/CommandScreen'
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';
import { Icon, Item, Input } from 'native-base';
export default function Route() {
    const [initializing, setInitializing] = useState(true);
    const { user, setUser, logout } = useContext(AuthContext);
    const customDrawer = (props) => (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 20, width: 100 }}>
                <Item>
                    <Icon style={{ height: 20, height: 20 }} type="FontAwesome" name="sign-out" onPress={() => { logout() }} />
                    <Text> Logout</Text>
                </Item>
            </View>
            <View style={{ height: 100, width: 200,marginBottom:20}}>
                <Image style={{ height: 100, width: 50 }} source={require('../image/logo.png')} ></Image>
                <Text>{`Welcome :${user.email}`}</Text>
            </View>

            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>
        </SafeAreaView>

    );

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
                headerShown: false
            })
        },
    })

    const LoginContainer = createAppContainer(LoginApp)
    const UserContainer = createAppContainer(UserApp);


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
