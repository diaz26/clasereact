import React, { Component } from 'react';
import { Text, Button, Icon, Footer, FooterTab, Badge } from 'native-base';

export default class PiePagina extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button vertical onPress={() => this.props.navigation.navigate('Productos')} >
                        <Icon name="grid" />
                        <Text>Productos</Text>
                    </Button>
    
                    <Button vertical onPress={() => this.props.navigation.navigate('Pedidos')} badge>
                        <Badge ><Text>51</Text></Badge>
                        <Icon name="paper" />
                        <Text>Pedidos</Text>
                    </Button>
                    
                    <Button vertical onPress={() => this.props.navigation.navigate('Login')} >
                        <Icon name="logout" />
                        <Text>Salir</Text>
                    </Button>
                    
                </FooterTab>
            </Footer>
        );
    }
}
