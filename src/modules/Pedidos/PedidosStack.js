import { createStackNavigator } from 'react-navigation-stack';
import { React } from "react";

import Pedidos from './containers/index';
import Header from "../General/footer";

const ProductStack = createStackNavigator({
  Pedidos: {
    screen : Pedidos,
    navigationOptions: {
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title='PEDIDOS' navigation={ navigation } />
        }
      }
    }
  }
}, {headerLayoutPreset: 'center'});

export default ProductStack;