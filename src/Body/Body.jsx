import { useTheme } from "../Contexts/ThemeContext"

export default function Body() {
    const { theme } = useTheme();

    return (
        <div className={`flex justify-center items-center h-screen ${theme}`}>
            <h1 className='text-3xl font-bold'>Hello World</h1>
            <p className='text-3xl font-bold underline text-violet-700'> KOUKOU LES GEEEEENS </p>
        </div>
    )
}