import useUserContext from '../../hooks/useUserContext'
import CardGame from '../CardGame'
import { BoxCards, Title, Wrapper } from './styles'

export default function NextGames() {
	const { nextGames } = useUserContext()

	return (
		<Wrapper>
			<Title>PROXIMOS JOGOS</Title>

			<BoxCards>
				{nextGames.length < 1 ? (
					<span>Não tem nenhum jogo próximo.</span>
				) : (
					nextGames.map(game => (
						<CardGame
							key={game.id}
							id={game.id}
							team1={game.time_1}
							team2={game.time_2}
							teamLogo={game.logo_adversario}
							modality={game.modalidade}
							date={game.data_jogo}
							time={game.hora_jogo}
						/>
					))
				)}
			</BoxCards>
		</Wrapper>
	)
}
