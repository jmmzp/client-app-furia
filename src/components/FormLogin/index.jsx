import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useUserContext from '../../hooks/useUserContext'
import Button from '../../styles/Button'
import Form from '../../styles/Form'
import Input from '../../styles/Input'
import AlertError from '../AlertError'
import AlertWarning from '../AlertWarning'

import { userLogin } from '../../services/api'

export default function FormLogin() {
	const { setModal, setToken } = useUserContext()
	const navigate = useNavigate()

	const [form, setForm] = useState({
		email: '',
		senha: ''
	})

	const handleSubmitForm = async e => {
		e.preventDefault()

		if (!form.email || !form.senha) {
			return setModal(
				<AlertWarning>Você precisa digitar todos os campos</AlertWarning>
			)
		}

		setModal(null)

		try {
			const { data } = await userLogin(form)

			setToken(data.token)

			return navigate('/')
		} catch ({ response }) {
			return setModal(<AlertError>{response.data.mensagem}</AlertError>)
		}
	}

	const handleChangeForm = e => {
		const value = e.target.value

		setForm({ ...form, [e.target.name]: value })
	}

	return (
		<Form onSubmit={e => handleSubmitForm(e)}>
			<Input
				name="email"
				type="email"
				placeholder="Email"
				value={form.email}
				onChange={e => handleChangeForm(e)}
			/>

			<Input
				name="senha"
				type="password"
				placeholder="Senha"
				value={form.senha}
				onChange={e => handleChangeForm(e)}
			/>

			<Button type="submit">ENTRAR</Button>
		</Form>
	)
}
