import React from 'react';
import './Background.css'
import bg from '../../../public/swirling-cubes-bg.png'
import {createPortal} from "react-dom";

const Background: React.FC = () => {

    const bodyClassname = document.body.classList[0]

    return createPortal(
        <div className={`background ${bodyClassname === 'light-theme' ? 'bg-light' : 'bg-dark'}`}>
            <img src={bg} alt={''}/>
        </div>,
        document.getElementById('background') as HTMLElement
    );
}

export default Background;