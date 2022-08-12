import {
	BoxInfoGame,
	BoxTeams,
	Card,
	InfoDate,
	InfoTime,
	LogoTeam,
	NameTeam,
	NameTeamAdversary,
	Team
} from './styles'
import logoFuria from '../../assets/logo-furia.png'
export default function CardGame() {
	return (
		<Card>
			<BoxTeams>
				<Team>
					<LogoTeam src={logoFuria} />
					<NameTeam>Furia</NameTeam>
				</Team>

				<Team>
					<LogoTeam src="https://seeklogo.com/images/I/imperial-esports-logo-728A269FBB-seeklogo.com.png?v=637810384520000000" />
					<NameTeamAdversary>Imperial</NameTeamAdversary>
				</Team>
			</BoxTeams>

			<BoxInfoGame>
				<InfoDate>
					Data: <span>00/00/0000</span>
				</InfoDate>

				<InfoTime>
					Horário: <span>16:00</span>
				</InfoTime>
			</BoxInfoGame>
		</Card>
	)
}
