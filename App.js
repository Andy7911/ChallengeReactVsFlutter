import React from 'react';
import 'react-native-gesture-handler';
import SignUpScreen from './component/SignUpScreen';
import CommandScreen from './component/CommandScreen';
import { createAppContainer } from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';



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
    <AppContainer/>
  );
}

export default App;
