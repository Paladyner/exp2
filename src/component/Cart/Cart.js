
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { Link } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.handleEmptyCart = this.handleEmptyCart.bind(this);
  }

  handleEmptyCart() {
    this.props.onEmptyCart();
  }

  renderEmptyCart() {
    const { cart } = this.props;
    if (cart.total_unique_items > 0) {
      return;
    }

    return (
      <p className="text-center align-middle">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  }

  renderCart() {
    const { cart } = this.props;
    if (cart.total_unique_items === 0) {
      return;
    }

    return (
      <>
        {cart.line_items.map(lineItem => (
          <CartItem
            item={lineItem}
            key={lineItem.id}
            {...this.props}
            className="space-y-4 max-h-64 overflow-x-hidden"
          />

        ))}

        <div className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <p className="inline">Subtotal:</p>
          <p className="inline">{cart.subtotal.formatted_with_symbol}</p>
        </div>
        <div className="space-y-4 text-center flex flex-col">
          <button className="cart__btn-empty" onClick={this.handleEmptyCart}>Empty cart</button>
          <a
            href="#"
            class="block px-5 py-3 text-sm text-gray-600 transition border border-gray-600 rounded hover:ring-1 hover:ring-gray-400"
          >
            View my cart {cart.subtotal.formatted_with_symbol}
          </a>
          <Link class="no-underline border " to="../checkout">Checkout
          </Link>
        </div>
      </>
    );
  }

  render() {
    return (
      <div className="flex justify-end">
        <h4 className="text-center align-middle">Your Shopping Cart</h4>
        {this.renderEmptyCart()}
        {this.renderCart()}
      </div>
    );
  };
};

export default Cart;

Cart.propTypes = {
  cart: PropTypes.object,
  onUpdateCartQty: () => { },
  onRemoveFromCart: () => { },
  onEmptyCart: () => { },
  handleUpdateCartQty: PropTypes.func,
  history: PropTypes.object
};
