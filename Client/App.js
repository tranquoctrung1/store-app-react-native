import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import AppNavigator from './AppNavigator';
import CartProvider from './context/CartProvider';

class App extends Component {
  render() 
  {
    return (
      <CartProvider>
        <AppNavigator></AppNavigator>
      </CartProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerScrollView: {
    width: '100%',
    // padding: 20
  }
});

export default App;
