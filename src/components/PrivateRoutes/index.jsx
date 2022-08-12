import { Navigate, Outlet } from 'react-router-dom'
import useUserContext from '../../hooks/useUserContext'

export default function PrivateRoutes() {
	const { isLogged } = useUserContext()

	if (!isLogged) {
		return <Navigate to="/login" />
	}

	return <Outlet />
}
