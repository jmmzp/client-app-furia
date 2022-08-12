import Card from '../../components/Card'
import Header from '../../components/Header'
import NextGames from '../../components/NextGames'
import useUserContext from '../../hooks/useUserContext'
import Container from '../../styles/Container'
import Divider from '../../styles/Divider'
import { BoxCard, BoxGames, CustomMain, Wrapper } from './styles'

export default function Main() {
	const { modal } = useUserContext()

	return (
		<Container>
			{modal}
			<Wrapper>
				<Header />

				<Divider />

				<CustomMain>
					<BoxCard>
						<Card />
					</BoxCard>

					<BoxGames>
						<NextGames />
					</BoxGames>
				</CustomMain>
			</Wrapper>
		</Container>
	)
}
