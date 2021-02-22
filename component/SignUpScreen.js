import { StatusBar } from 'expo-status-bar';
import React,{useState,useContext,useEffect} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Item, Input, Form, Container, Header, Content, Label, Button, Icon, StyleProvider, Right } from 'native-base';

import auth from '@react-native-firebase/auth';
class SignUpScreen extends React.Component { 
  constructor(props) {
   
    super(props);
    this.state = {
      password: 0,
      email:'',
      auth:false
    };
  }    
  
 async register(email,password){
      try{
      //const navigation = useNavigation();
      await auth().createUserWithEmailAndPassword(email,password);
     
     this.props.navigation.navigate('command')
      
      }
      catch(e){
          console.log(e);
      }
    }
    
  render(){
    const { navigation } = this.props;
/*      const [email,setEmail] = useState();
     const [password, setPassword]=useState();
     const [auth,setAuth]= useState(false); */
  
  return (
 
     
    <Container>
     
      <Content>
    
        <View style={{ flexDirection: 'row', flex: 2, justifyContent: "center",marginTop:35 }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/GHtvyKY/logo-health-food-eating-vector-fork-logo-46ef4e30c07292c0988b786f43ea8a52.png',
            }}
            style={{ width: 160, height: 250 }}
          />

        </View>
        <Form>
          <Item rounded last floatingLabel>
            <Icon type="FontAwesome" name='envelope' style={{ color: 'black' }} />
            <Label>   Email</Label>
            <Input onChange={(email)=>this.setState(email)}  />
          </Item>
          <Item rounded last floatingLabel>
            <Icon type="FontAwesome" name='user' />
            <Label>  Username</Label>
            <Input />
          </Item>
          <Item rounded last floatingLabel style={{marginBottom:10}}>
            <Icon type='FontAwesome5' name='key'></Icon>
            <Label>  Password</Label>
            <Input onChange={(password)=>this.setState({password:password})} />
          </Item>
        </Form>
        <Button rounded success style={{ marginTop: 20,marginBottom:10 }} onPress={()=>this.register('basela@gmail.com','hyqa3212')} block ><Text>Submit</Text></Button>
        <Text style={{textAlign:'center',marginBottom:15}}>Sign up with </Text>
       <View style={{flexDirection:'row',justifyContent:'space-around'}}> 
         <Button style={styles.btn}><Icon type='FontAwesome5'
                 name='twitter' style={{color:'blue'}} ></Icon>
          </Button>
          <Button style={styles.btn}><Icon type='FontAwesome5'
                 name='facebook' style={{color:'blue'}} ></Icon>
          </Button>
          <Button style={styles.btn}><Icon type='FontAwesome5' 
                 name='google' style={{color:'blue'}}  ></Icon>
          </Button>
                
      
      </View>
      </Content>
    </Container>
    
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    display:'flex',
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth:1,
    backgroundColor:'white'

  }


});

export default SignUpScreen;