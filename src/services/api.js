import axios from 'axios'

export const api = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		api_key: process.env.REACT_APP_API_KEY,
		'Content-Type': 'application/json'
	}
})

export const userLogin = async form => {
	return await api.post('/login', form)
}

export const userRegister = async form => {
	return await api.post('/register', form)
}

export const getUserData = async token => {
	return await api.get('/user', {
		headers: {
			authorization: 'Bearer ' + token
		}
	})
}
