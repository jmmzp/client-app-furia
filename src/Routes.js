import { Navigate, Route, Routes as Routers } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import Login from './pages/Login'
import Main from './pages/Main'
import Register from './pages/Register'

export default function Routes() {
	return (
		<Routers>
			<Route element={<PrivateRoutes />}>
				<Route exact path="/" element={<Main />} />
			</Route>

			<Route exact path="/login" element={<Login />} />

			<Route exact path="/register" element={<Register />} />

			<Route path="*" element={<Navigate to="/" />} />
		</Routers>
	)
}
