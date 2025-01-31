import React from 'react';
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle.tsx";
import todoLogo from '../../../public/todologo.png'
import './Header.css'
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header>
            <div className={'header_root'}>
                <NavLink to={'/'} className={'header_logo'}>
                    <img src={todoLogo} alt={'logo'}/>
                </NavLink>
                <div>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    );
}

export default Header;