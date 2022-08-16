import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://api-centraldafuria.herokuapp.com/',
	headers: {
		api_key: 'OX5MFkHJAFHRWL6pv09UCriKIF54SYXh',
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

export const getNextGames = async token => {
	return await api.get('/games', {
		headers: {
			authorization: 'Bearer ' + token
		}
	})
}

export const getNextGamesByModality = async token => {
	return await api.get('/games/modality', {
		headers: {
			authorization: 'Bearer ' + token
		}
	})
}

export const getAllBets = async token => {
	return await api.get('/bets', {
		headers: {
			authorization: 'Bearer ' + token
		}
	})
}

export const getMyBets = async token => {
	return await api.get('/bets/me', {
		headers: {
			authorization: 'Bearer ' + token
		}
	})
}

export const getBetsByGameId = async (token, id) => {
	return await api.get(`/bets/game/${id}`, {
		headers: {
			authorization: 'Bearer ' + token
		}
	})
}
