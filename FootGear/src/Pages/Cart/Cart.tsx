import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../Components/CartItem/CartItem';
import Header from '../../Components/Header/Header';
import { RootState } from '../../redux/store';
import './Cart.scss';

const Cart: React.FC = () => {
    const snk = useSelector((state: RootState) => state.cart.cart);
    const totalPriceSnk = snk.reduce(
        (sum: number, item: any) => item.price * item.count + sum,
        0
    );

    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').substring(0, 16);
        const formattedValue = value.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, '$1 $2 $3 $4');
        setCardNumber(formattedValue);
    };

    const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').substring(0, 4);
        const formattedValue = value.replace(/(\d{2})(\d{0,2})/, '$1/$2');
        setExpiration(formattedValue);
    };

    const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').substring(0, 3);
        setCvv(value);
    };

    return (
        <div className='cart'>
            <div className="cart-header">
                <Header />
            </div>
            <div className="cart-content">
                <div className='cart-items'>
                    <div className="snk-box">
                        <div className="snk-box-content">
                            <div>
                                {snk.length === 0 ? (
                                    <div className="cart-empty">Cart is empty...</div>
                                ) : (
                                    <div>
                                        {snk.map((obj, i) => (
                                            <div className="items" key={i}>
                                                <CartItem {...obj} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="totalPrice">
                            <span className="totalPrice-text">Total price: </span>
                            <span className="totalPrice-count">{totalPriceSnk}$</span>
                        </div>
                    </div>
                    <div className="form-box">
                        <div className="input-group">
                            <span className="input-group-text" >
                                Full Name
                            </span>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>

                        <div className="input-group">
                            <span className="input-group-text">
                                Card Number
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="**** **** **** ****"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                            />
                        </div>
                        <div className="input-group">
                            <span className="input-group-text">Expiration</span>
                            <input
                                type="text"
                                className="form-control exp"
                                placeholder="MM/YY"
                                value={expiration}
                                onChange={handleExpirationChange}
                            />
                            <span className="input-group-text cvv">
                                CVV
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="CVV"
                                value={cvv}
                                onChange={handleCvvChange}
                            />
                        </div>
                        <div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                />
                                <label className="form-check-label">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-100"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
