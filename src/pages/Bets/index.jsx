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
import CardBet from '../../components/CardBet'
import {
	BoxTeams,
	Content,
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
	const { userData, modal, token, setOpenBets } = useUserContext()
	const { id } = useParams()
	const [bets, setBets] = useState(null)

	useEffect(() => {
		;(async function () {
			try {
				const { data } = await getBetsByGameId(token, id)

				setBets(data)
				setOpenBets(data.openBets)

				return
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
					<Icon src={iconBack} onClick={() => navigate('/')} />

					<Points>
						Pontos:
						<span> $ {userData.pontos}</span>
					</Points>
				</HeaderBets>

				<Divider />

				{bets ? (
					<Content>
						<Game>
							<BoxTeams>
								<Team>
									<LogoTeam src={logoFuria} />
									<NameTeam>{bets.game.time_1}</NameTeam>
								</Team>

								<Versus>vs</Versus>

								<Team>
									<NameTeam>{bets.game.time_2}</NameTeam>
									<LogoTeam src={bets.game.logo_adversario} />
								</Team>
							</BoxTeams>
						</Game>

						<CardBet />
					</Content>
				) : null}
			</Wrapper>
		</Container>
	)
}
