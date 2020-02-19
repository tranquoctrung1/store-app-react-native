import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';


import Category from './screens/category';
import Categories from './screens/categories';
import Cart from './screens/cart';
import Order from './screens/order';
import Setting from './screens/settings';
import IconWithCountBadge from './components/IconWithCountBadge';

import CartContext from './context/Context';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenStack = function () {
  return (
    <Stack.Navigator initialRouteName="Categories">
      {/* initialRouteName is set default component or screen 
        options is set title header for component navigation */}
      <Stack.Screen name="Category" component={Category}
        options={({ route }) => ({ title: route.params.name })} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  )

}
const OrderScreenStack = function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  )

}
const CartScreenStack = function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )

}
const SettingScreenStack = function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  )

}


class AppNavigator extends React.Component {
  render()
  {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
  
              } if (route.name === 'Setting') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
  
              } else if (route.name === 'Cart') {
                iconName = focused ? 'ios-cart' : 'ios-cart';
                return (
                  <CartContext.Consumer>
                    {
                      ({listProduct}) => <IconWithCountBadge name={iconName} size={size} color={color} badgeCount={listProduct.length} />
                    }
                  </CartContext.Consumer>
                );
  
              } else if (route.name === 'Order') {
                iconName = focused ? 'ios-code' : 'ios-code';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          })}
          tabBarOptions={{
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreenStack} />
          <Tab.Screen name="Setting" component={SettingScreenStack} />
          <Tab.Screen name="Cart" component={CartScreenStack} />
          <Tab.Screen name="Order" component={OrderScreenStack} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
}

export default AppNavigator;