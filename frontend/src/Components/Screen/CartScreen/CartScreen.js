import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartScreen.css';

import { addToCart, removeFromCart} from '../../../Redux/actions/CartAction';
import CartItem from '../../Pages/CartItem/CartItem';
const CartScreen = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItem } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItem.reduce((qty,item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItem.reduce((price, item) => (item.price * item.qty) + price, 0)
    }
    return (
        <div className='cartscreen'>
            <div className='cartscreen__left'>
                <h2>Shopping Cart</h2>
                {cartItem.length === 0 ? (
                    <div>
                        Your cart is empty <Link to='/'> Go Back</Link>
                    </div>
                ) : cartItem.map(item => (
                    <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler} />
                ))}
            </div>
            <div className='cartscreen__right'>
                <div className='cartscreen__info'>
                    <p>SubTotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proceed To Check</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
