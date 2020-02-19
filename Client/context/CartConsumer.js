import React, {Component} from 'react';

import CartContext from './Context';

class CartConsumer extends Component {
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const {children} = this.props;
        return(
            <CartContext.Consumer>
                {(context) =>  children}
            </CartContext.Consumer>
        )
    }
}

export default CartConsumer;