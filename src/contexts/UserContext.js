import { createContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'
export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
	const [modal, setModal] = useState(null)
	const [token, setToken, removeToken] = useLocalStorage('token')
	const [userData, setUserData] = useState([])
	const [nextGames, setNextGames] = useState([])

	const isLogged = token ? true : false

	const logout = () => {
		removeToken()
		setUserData([])

		return <Navigate to="/login" />
	}

	return (
		<UserContext.Provider
			value={{
				isLogged,
				modal,
				setModal,
				token,
				setToken,
				removeToken,
				userData,
				setUserData,
				logout,
				nextGames,
				setNextGames
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
