import { createStackNavigator } from 'react-navigation-stack';
import { React } from "react";

import Productos from './containers/index';
import Header from "../General/footer";

const ProductStack = createStackNavigator({
  Productos: {
    screen : Productos,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={ navigation } />
      }
    }
  }
}, {headerLayoutPreset: 'center'});

export default ProductStack;