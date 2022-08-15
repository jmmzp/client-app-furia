import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import logoFuria from '../../assets/logo-furia.png'
import {
	BoxInfoGame,
	BoxTeams,
	Card,
	Infos,
	LogoTeam,
	NameTeam,
	NameTeamAdversary,
	Team
} from './styles'

export default function CardGame(props) {
	const navigate = useNavigate()

	const handleSelectGame = id => {
		return navigate(`/games/${id}/bets`)
	}

	return (
		<Card
			onClick={() => {
				handleSelectGame(props.id)
			}}
		>
			<BoxTeams>
				<Team>
					<LogoTeam src={logoFuria} />
					<NameTeam>Furia</NameTeam>
				</Team>

				<Team>
					<LogoTeam src={props.teamLogo} />
					<NameTeamAdversary>{props.team2}</NameTeamAdversary>
				</Team>
			</BoxTeams>

			<BoxInfoGame>
				<Infos>
					Game: <span>{props.modality}</span>
				</Infos>

				<Infos>
					Data: <span>{format(new Date(props.date), 'dd/MM/yyyy')}</span>
				</Infos>

				<Infos>
					Horário: <span>{props.time.slice(0, 5)}</span>
				</Infos>
			</BoxInfoGame>
		</Card>
	)
}
