import React, { Component } from 'react';
import CartContext from './Context';

class CartProvider extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            listProduct: []
        };

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(product)
    {
        this.setState({listProduct: this.state.listProduct.concat(product)});
        console.log(this.state.listProduct.length);
    }

   
    render()
    {
        const {children} = this.props;
        return (
            <CartContext.Provider value={{
                listProduct: this.state.listProduct, 
                addToCart: this.addToCart}}>
                {children}
            </CartContext.Provider>
        )
    }
}

export default CartProvider;