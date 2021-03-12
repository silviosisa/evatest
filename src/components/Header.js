import React from 'react';
import Logo from '../assets/jijo_logo.svg';
import Wallet from '../assets/wallet.svg';
import IconUser from '../assets/user.svg';
const Header = () => {
    return (
        <div className="home__header grid">
           <div className="logo__item">
               <img src={Logo} alt=""/>
           </div>
            <ul className="menu__links">
                <li>MY MATCHES</li>
                <li>MY CLASSES</li>
                <li>MY FAVORITES</li>
            </ul>
            <div className="wallet__header">
                <img src={Wallet} alt=""/>
            </div>
            <div className="icon__user">
                <img src={IconUser} alt=""/>
            </div>
            <div className="burger__menu">
                <div className="burger__lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className="user__welcome">
                <div><span>Jenny, </span> here is your wallet</div>
            </div>
        </div>
    );
};

export default Header;
