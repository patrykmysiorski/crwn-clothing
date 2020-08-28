import React from "react";
import './cart-dropdown.styles.scss'
import CustomButton from "../customButton/CustomButton";
import {connect} from "react-redux";
import CartItem from "../cartItem/CartItem";
import {selectCartItems} from "../../redux/cart/cartSelectors";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cartActions";

const CartDropdown = ({cartItems, history, dispatch}) => {

    const handleClick = () => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
    }

    return (
        <div className={'cart-dropdown'}>
            <div className={'cart-items'}>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                        : <span className={'empty-message'}>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
