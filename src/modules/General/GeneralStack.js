import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import ProductStack from '../Productos/ProductStack';
import PedidosStack from '../Pedidos/PedidosStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Productos: {
    screen: ProductStack,
  },
  Pedidos: {
    screen: PedidosStack,
  },
});

export default createAppContainer(RootDrawerNavigator);