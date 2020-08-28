import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cart/CartDropdown";
import {selectCurrentUser} from "../../redux/user/userSelectors";
import {selectCartHidden} from "../../redux/cart/cartSelectors";
import {createStructuredSelector} from "reselect";

const Header = ({currentUser, hidden}) => (
    <div className={'header'}>
        <Link className={'logo-container'} to={"/"}>
            <Logo className={'logo'}/>
        </Link>
        <div className="options">
            <Link className="option" to={'/shop'}>
                SHOP
            </Link>
            <Link className="option" to={'/contact'}>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className={'option'} onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className={'option'} to={'/signin'}>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {!hidden && (<CartDropdown/>)}
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
