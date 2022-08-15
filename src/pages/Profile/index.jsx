import Header from '../../components/Header'
import useUserContext from '../../hooks/useUserContext'
import Container from '../../styles/Container'
import Divider from '../../styles/Divider'
import Wrapper from '../../styles/Wrapper'

export default function Bets() {
	const { modal } = useUserContext()

	return (
		<Container>
			{modal}
			<Wrapper>
				<Header />

				<Divider />
			</Wrapper>
		</Container>
	)
}
