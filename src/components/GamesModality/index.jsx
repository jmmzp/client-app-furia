import CardGame from '../CardGame'
import { BoxAllGames, BoxGames, TitleGame } from './styles'

export default function GamesModality({ gamesByModality }) {
	return (
		<BoxAllGames>
			<BoxGames>
				<TitleGame>
					Próximos jogos de <span>CS:GO</span>
				</TitleGame>

				{gamesByModality.csgo.length > 0 ? (
					gamesByModality.csgo.map(game => (
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
				) : (
					<span>Não existem jogos marcados.</span>
				)}
			</BoxGames>

			<BoxGames>
				<TitleGame>
					Próximos jogos de <span>Valorant</span>
				</TitleGame>

				{gamesByModality.valorant.length > 0 ? (
					gamesByModality.valorant.map(game => (
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
				) : (
					<span>Não existem jogos marcados.</span>
				)}
			</BoxGames>

			<BoxGames>
				<TitleGame>
					Próximos jogos de <span>LoL</span>
				</TitleGame>

				{gamesByModality.lol.length > 0 ? (
					gamesByModality.lol.map(game => (
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
				) : (
					<span>Não existem jogos marcados.</span>
				)}
			</BoxGames>

			<BoxGames>
				<TitleGame>
					Próximos jogos de <span>Rocket League</span>
				</TitleGame>

				{gamesByModality.rocketLeague.length > 0 ? (
					gamesByModality.rocketLeague.map(game => (
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
				) : (
					<span>Não existem jogos marcados.</span>
				)}
			</BoxGames>

			<BoxGames>
				<TitleGame>
					Próximos jogos de <span>RaimbowSix</span>
				</TitleGame>

				{gamesByModality.r6.length > 0 ? (
					gamesByModality.r6.map(game => (
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
				) : (
					<span>Não existem jogos marcados.</span>
				)}
			</BoxGames>
		</BoxAllGames>
	)
}
