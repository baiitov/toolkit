import './App.css'
import Modal from './UI/Modal'
import User from './login/User'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserTrello from './todo/UserTrello'

function App() {
	return (
		<>
			<BrowserRouter>
				<div className='App'>
					<Routes>
						<Route path='/' element={<User />} />
						<Route path='/UserTrello' element={<UserTrello />} />
					</Routes>
				</div>
			</BrowserRouter>
		</>
	)
}

export default App
