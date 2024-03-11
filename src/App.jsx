import './App.css'
import { ThemeProvider } from './Contexts/ThemeContext'
import Navbar from './Navbar/Navbar'
import Body from './Body/Body'


function App() {

	return (
		<>
			<ThemeProvider>
				<Navbar/>
				<Body/>
			</ThemeProvider>
		</>
	)
}

export default App
