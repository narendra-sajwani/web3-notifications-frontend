import React from 'react';
import './index.scss';
import { Button } from '../components';
import logo from "../assets/push-notification.png";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {

    const handleConnectWallet = () => {

    }

    const goBackHome = () => {
        
    }

    return(
        <div className="main-container">
            <header className="navbar">
                <div className="navbar-left" onClick={goBackHome}>
                    <a href="/" style={{textDecoration: "none", display: "flex"}}>
                        <img className="logo" src={logo} alt="Logo" />
                        <p>Web 3 Notification</p>
                    </a>
                </div>
                <div className='navbar-right'>
                    <Button text="Connect Wallet" handleClick={handleConnectWallet} />
                </div>
            </header>
            {props.children}
        </div>
    )
}

export default Layout;