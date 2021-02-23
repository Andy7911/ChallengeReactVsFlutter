import React from 'react';
import 'react-native-gesture-handler';
import SignUpScreen from './component/SignUpScreen';
import CommandScreen from './component/CommandScreen';
import { createAppContainer, } from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AuthProvider} from './navigate/AuthProvider';

const AppDrawerNav =  createDrawerNavigator({
  commad:{screen:CommandScreen}
})

const stackApp = createStackNavigator({
SignUpScreen:{
  screen: SignUpScreen,
  navigationOptions:()=>({
    title:'sighup',
  })
},
CommandScreen:{
  screen: CommandScreen,
  navigationOptions:()=>({
    title:'sighup',
  })
},

});

const AppContainer = createAppContainer(stackApp)

const App =()=>{
  return(
    <AuthProvider>
    <AppContainer/>
    </AuthProvider>
  );
}

export default App;
