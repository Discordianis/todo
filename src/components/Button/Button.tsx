import React from 'react';
import './Button.css'
import {IButton} from "../../interfaces/props.tsx";

const Button: React.FC<IButton> = ({children, isActive, ...props}) => {
    return (
        <button className={`button ${isActive ? 'active' : ''}`} {...props}>{children}</button>
    );
}

export default Button;