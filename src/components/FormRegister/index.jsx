import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useUserContext from '../../hooks/useUserContext'
import { userRegister } from '../../services/api'
import Button from '../../styles/Button'
import Form from '../../styles/Form'
import Input from '../../styles/Input'
import Select from '../../styles/Select'
import AlertError from '../AlertError'
import AlertSuccess from '../AlertSuccess'
import AlertWarning from '../AlertWarning'

export default function FormLogin() {
	const { setModal } = useUserContext()
	const navigate = useNavigate()

	const [form, setForm] = useState({
		nome: '',
		nick: '',
		email: '',
		senha: '',
		cloneSenha: '',
		torcida: ''
	})

	const handleSubmitForm = async e => {
		e.preventDefault()

		if (
			!form.nome ||
			!form.nick ||
			!form.email ||
			!form.senha ||
			!form.cloneSenha ||
			!form.torcida
		) {
			return setModal(
				<AlertWarning>Você precisa digitar todos os campos.</AlertWarning>
			)
		}

		if (form.senha !== form.cloneSenha) {
			return setModal(<AlertError>As senhas não estão iguais.</AlertError>)
		}

		setModal(null)

		try {
			const { data } = await userRegister(form)

			setModal(<AlertSuccess>{data.mensagem}</AlertSuccess>)
			navigate('/login')

			return setInterval(() => setModal(null), 3000)
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
				name="nome"
				type="text"
				placeholder="Nome"
				value={form.nome}
				onChange={e => handleChangeForm(e)}
			/>

			<Input
				name="nick"
				type="text"
				placeholder="Nickname"
				value={form.nick}
				onChange={e => handleChangeForm(e)}
			/>

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

			<Input
				name="cloneSenha"
				type="password"
				placeholder="Repita sua senha"
				value={form.cloneSenha}
				onChange={e => handleChangeForm(e)}
			/>

			<Select
				name="torcida"
				value={form.torcida}
				onChange={e => handleChangeForm(e)}
			>
				<option value="" key="">
					--
				</option>
				<option value="Super Furia" key="1">
					Super Furia
				</option>

				<option value="Tropa do Art" key="2">
					Tropa do Art
				</option>

				<option value="Tropa da Olga" key="3">
					Tropa da Olga
				</option>

				<option value="Meninas Super Furiosas" key="4">
					Meninas Super Furiosas
				</option>

				<option value="Tapa na Pantera" key="5">
					Tapa na Pantera
				</option>

				<option value="Furiacão 2000" key="6">
					Furiacão 2000
				</option>

				<option value="Tropa do Furico" key="7">
					Tropa do Furico
				</option>
			</Select>

			<Button type="submit">CADASTRAR</Button>
		</Form>
	)
}
