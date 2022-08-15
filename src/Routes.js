import { Navigate, Route, Routes as Routers } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import Bets from './pages/Bets'
import Games from './pages/Games'
import Login from './pages/Login'
import Main from './pages/Main'
import Profile from './pages/Profile'
import Register from './pages/Register'

export default function Routes() {
	return (
		<Routers>
			<Route element={<PrivateRoutes />}>
				<Route exact path="/" element={<Main />} />

				<Route exact path="/games" element={<Games />} />

				<Route path="/games/:id/bets" element={<Bets />} />

				<Route exact path="/profile" element={<Profile />} />
			</Route>

			<Route exact path="/login" element={<Login />} />

			<Route exact path="/register" element={<Register />} />

			<Route path="*" element={<Navigate to="/" />} />
		</Routers>
	)
}
