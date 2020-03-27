/*import React, { useState } from 'react';
import Navigator from './modules/General/GeneralStack';

export default function App() {
    return (
      <Navigator />
    );
}*/
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { React } from "react";

import Login from './modules/Login/containers/login';
import Productos from './modules/Productos/containers/index';
import Pedidos from './modules/Pedidos/containers/index';
import Header from "./modules/General/footer";

const AppNavigator = createStackNavigator({
  Login: {
    screen : Login,
    navigationOptions: {
      title: 'BASEO'
    }
  },
  Productos: {
    screen : Productos,
    navigationOptions: {
      title: 'MIS PRODUCTOS'
    }
  },
  Pedidos: {
    screen : Pedidos,
    navigationOptions: {
      title: 'MIS PEDIDOS'
    }
  }
}, {headerLayoutPreset: 'center'});

export default createAppContainer(AppNavigator)