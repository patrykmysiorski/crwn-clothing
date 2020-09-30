import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cart/CartDropdown";
import {selectCurrentUser} from "../../redux/user/userSelectors";
import {selectCartHidden} from "../../redux/cart/cartSelectors";
import {createStructuredSelector} from "reselect";
import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from "./headerStyles";

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to={"/"}>
            <Logo className={'logo'}/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to={'/shop'}>
                SHOP
            </OptionLink>
            <OptionLink to={'/contact'}>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionLink as={'div'} onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to={'/signin'}>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {!hidden && (<CartDropdown/>)}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
