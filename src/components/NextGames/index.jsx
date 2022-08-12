import CardGame from '../CardGame'
import { BoxCards, Title, Wrapper } from './styles'

export default function NextGames() {
	return (
		<Wrapper>
			<Title>PROXIMOS JOGOS</Title>

			<BoxCards>
				<CardGame />
				<CardGame />
			</BoxCards>
		</Wrapper>
	)
}
