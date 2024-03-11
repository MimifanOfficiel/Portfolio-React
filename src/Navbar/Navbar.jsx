import DarkTheme from '../assets/dark-theme.svg'
import LightTheme from '../assets/light-theme.svg'
import React from '../assets/react.svg'

import { useTheme } from '../Contexts/ThemeContext'

export default function Navbar() {
    const { theme, setTheme } = useTheme();

    /**
     * Toggles the theme between light and dark.
     */
    function handleThemeChange() {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <nav className={`flex justify-between items-center h-16 w-full fixed top-0 shadow-sm font-mono ${theme}`} role='navigation'>
            <img src={React} alt='React' className='w-10 mx-2 my-auto' />
            <ul className='flex justify-between items-center w-2/3 my-auto'>
                <li className='text-lg font-bold px-2'>Présentation</li>
                <li className='text-lg font-bold px-2'>Mes expériences</li>
                <li className='text-lg font-bold px-2'>Mes projets</li>
                <li className='text-lg font-bold px-2'>Me contacter</li>
            </ul>
            <div>
                <button onClick={handleThemeChange} className='w-10 my-auto mx-2'>
                    <img src={theme === "dark" ? LightTheme : DarkTheme} alt={"ChangeTheme"} className={`${theme == "dark" ? 'invert' : 'invert-0'}`}/>
                </button>
            </div>
        </nav>
    )
}