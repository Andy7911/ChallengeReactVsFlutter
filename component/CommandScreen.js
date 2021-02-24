import React, { Component,useContext } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { AuthContext } from '../navigate/AuthProvider';
 const CommandScreen=({navigate})=> {
  
  const {logout} =useContext(AuthContext) 
    return (
        <Container>
        
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://i.ibb.co/ftvyhP2/vegan-mushroom-bean-burger-recipe-3378623-13-preview1-5b241897fa6bcc0036d2c9bf.jpg'}} style={{height: 200, width: 300, flex: 1,opacity:0.5}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
        <Button onPress={()=>{logout()}}><Text>Press</Text></Button>
      </Container>
    );
  }
  export default CommandScreen;

