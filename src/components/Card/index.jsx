import { useEffect } from 'react'
import logoFuria from '../../assets/logo-furia-nome.png'
import useUserContext from '../../hooks/useUserContext'
import { getUserData } from '../../services/api'
import { CustomCard, CustomId, InfoBox, Label } from './styles'

export default function Card() {
	const { userData, setUserData, token } = useUserContext()

	useEffect(() => {
		;(async function () {
			try {
				const { data } = await getUserData(token)

				setUserData(data)
			} catch (error) {
				return error.message
			}
		})()
	})

	return (
		<CustomCard>
			<CustomId>ID: {String(userData.id).padStart('6', 0)}</CustomId>

			<InfoBox>
				<Label>Nome:</Label>
				<h2>{userData.nome}</h2>
			</InfoBox>

			<InfoBox>
				<Label>Nick:</Label>
				<h2>{userData.nick}</h2>
			</InfoBox>

			<section>
				<InfoBox>
					<Label>Torcida organizada:</Label>
					<h2>{userData.torcida}</h2>
				</InfoBox>

				<img src={logoFuria} alt="Logo do time da furia com nome em baixo." />
			</section>
		</CustomCard>
	)
}
