// import React from 'react';
// import PropTypes from 'prop-types';


// const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

// 	const handleUpdateCartQty = (lineItemId, quantity) => {
// 		onUpdateCartQty(lineItemId, quantity);
// 	}

// 	const handleRemoveFromCart = () => {
// 		onRemoveFromCart(item.id);
// 	}


// 	return (
// 		<div className="cart-item">
// 			<img className="cart-item__image" src={item.image.url} alt={item.name} />
// 			<div className="cart-item__details">
// 				<h4 className="cart-item__details-name">{item.name}</h4>
// 				<div className="cart-item__details-qty">
// 						<button type="button" onClick={() => item.quantity > 1 ? handleUpdateCartQty(item.id, item.quantity - 1) : handleRemoveFromCart()}>-</button>
// 						<p>{item.quantity}</p>
// 						<button type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
// 				</div>
// 				<div className="cart-item__details-price">{item.line_total.formatted_with_symbol}</div>
// 			</div>
// 			<button
// 				type="button"
// 				className="cart-item__remove"
// 				onClick={handleRemoveFromCart}
// 			>
// 				Remove
// 			</button>
// 		</div>
// 	);
// };

// export default CartItem;

// CartItem.propTypes = {
//     item: PropTypes.object,
//     handleUpdateCartQty: PropTypes.func,
//     onUpdateCartQty: () => {},
//     onRemoveFromCart: () => {}
//  };

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CartItem extends Component {
	constructor(props) {
		super(props);

		this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this);
		this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
	}

	handleUpdateCartQty(lineItemId, quantity) {
		this.props.onUpdateCartQty(lineItemId, quantity);
	}

	handleRemoveFromCart(lineItemId) {
		this.props.onRemoveFromCart(lineItemId);
	}

	render() {
		const { item } = this.props;

		return (
			<div className="flex items-center">
				<img className="object-cover w-16 h-16 rounded" src={item.media.source} alt={item.name} />
				<div className="ml-4">
					<h4 className="text-sm text-gray-900">{item.name}</h4>
					<div className="flex items-center justify-end flex-1 gap-2">
						<button type="button" onClick={() => item.quantity > 1 ? this.handleUpdateCartQty(item.id, item.quantity - 1) : this.handleRemoveFromCart(item.id)}>-</button>
						<p>{item.quantity}</p>
						<button type="button" onClick={() => this.handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
					</div>
					<div className="flex items-center justify-end flex-1 gap-2">{item.line_total.formatted_with_symbol}</div>
				</div>
				<button type="button" className="text-gray-600 transition hover:text-red-600"
					onClick={() => this.handleRemoveFromCart(item.id)}>
					<span class="sr-only">Remove item</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
						/>
					</svg>
				</button>
			</div>
		);
	};
};

export default CartItem;

CartItem.propTypes = {
	item: PropTypes.object,
	handleUpdateCartQty: PropTypes.func,
	onUpdateCartQty: PropTypes.func,
	onRemoveFromCart: PropTypes.func
};
