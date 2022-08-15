import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import iconBack from '../../assets/icons/icon-back.png'
import logoFuria from '../../assets/logo-furia.png'
import useUserContext from '../../hooks/useUserContext'
import { getBetsByGameId } from '../../services/api'
import Container from '../../styles/Container'
import Divider from '../../styles/Divider'
import Icon from '../../styles/Icon'
import Wrapper from '../../styles/Wrapper'
import {
	Game,
	HeaderBets,
	LogoTeam,
	NameTeam,
	Points,
	Team,
	Versus
} from './styles'

export default function Bets() {
	const navigate = useNavigate()
	const { userData, modal, token } = useUserContext()
	const { id } = useParams()
	const [bets, setBets] = useState(null)

	useEffect(() => {
		;(async function () {
			try {
				const { data } = await getBetsByGameId(token, id)
				console.log(data)
				return setBets(data)
			} catch (error) {
				return error.message
			}
		})()
	}, [])

	return (
		<Container>
			{modal}
			<Wrapper>
				<HeaderBets>
					<Icon src={iconBack} onClick={() => navigate('/games')} />

					<Points>
						FuricoPoints:
						<span> $ {userData.pontos}</span>
					</Points>
				</HeaderBets>

				<Divider />

				<Game>
					<Team>
						<LogoTeam src={logoFuria} />
						<NameTeam>Furia</NameTeam>
					</Team>

					<Team>
						<NameTeam>{bets.game.time_2}</NameTeam>
						<LogoTeam src={bets.game.logo_adversario} />
					</Team>
				</Game>
			</Wrapper>
		</Container>
	)
}
