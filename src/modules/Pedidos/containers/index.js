import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Button, Icon, View } from 'native-base';
import { StyleSheet } from 'react-native';
import PiePagina from '../../General/footer';

export default class Pedidos extends Component {
  render() {
    return (
        <Container>
          <Content>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={ require('../../../../assets/jeff.jpeg') } />
                </Left>
                <Body style={styles.body}>
                  
                </Body>
              </ListItem>
              
            </List>
            
          </Content>
          <PiePagina/>
        </Container>

    );
  }
}

const styles = StyleSheet.create({
  body:{
    marginLeft: '20%',
    justifyContent:'center'
  },
  view: {
    flex:1,
    flexDirection:'row'
  },
  viewPerson1: {
    width: '50px',
    alignItems:"flex-start",
    flex:2,
    flexDirection:'row'
  },
  viewPerson: {
    alignContent: "flex-end",
    alignItems:"flex-end",
    flex:1,
    flexDirection:'row'
  }

});