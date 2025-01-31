import React, {useEffect, useState} from 'react';
import Button from "../Button/Button.tsx";
import './ThemeToggle.css'
import darkThemeImg from '../../../public/bedtime.svg'
import lightThemeImg from '../../../public/brightness_7.svg'

const ThemeToggle: React.FC = () => {

    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(localStorage.getItem('theme') === 'dark')

    useEffect(() => {
        const body = document.body
        if (isDarkTheme) {
            body.className = 'dark-theme'
        }
        else {
            body.className = 'light-theme'
        }

        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light')
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <div className={`${isDarkTheme ? 'dark-button' : 'light-button'}`}>
            <Button onClick={toggleTheme}>
                <img src={isDarkTheme ? darkThemeImg : lightThemeImg} alt={isDarkTheme ? 'dark-theme' : 'light-theme'} />
            </Button>
        </div>
    );
}

export default ThemeToggle;