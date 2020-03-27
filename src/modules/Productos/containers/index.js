import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Button, Icon, View} from 'native-base';
import { StyleSheet } from 'react-native';
import Footer from "../../General/footer";

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
                  <View style={styles.view}>
                    <View style={styles.viewPerson1}>
                      <Text style={{ flex:5 }}>Bacardí 50 años</Text>
                      <Text note style={{ flex:3 }}> $ 50.000</Text>
                    </View>
                    <View style={styles.viewPerson}>
                    <Button iconLeft transparent primary style={{ marginRight: '8px' }} onPress={() => navigation.navigate('AddCart')}>
                      <Icon name='eye' />
                    </Button>
                    <Button iconRight transparent primary onPress={() => navigation.navigate('Producto')}>
                      <Icon name='cart' />
                    </Button>
                    </View>
                  </View>
                </Body>
              </ListItem>
            </List>
          </Content>
          <Footer />
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