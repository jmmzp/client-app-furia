import { useEffect, useState } from 'react'
import GamesModality from '../../components/GamesModality'
import Header from '../../components/Header'
import useUserContext from '../../hooks/useUserContext'
import { getNextGamesByModality } from '../../services/api'
import Container from '../../styles/Container'
import Divider from '../../styles/Divider'
import Wrapper from '../../styles/Wrapper'
import { Points } from './styles'

export default function Bets() {
	const { userData, modal, token } = useUserContext()
	const [gamesByModality, setGamesByModality] = useState(null)

	useEffect(() => {
		;(async function () {
			try {
				const { data } = await getNextGamesByModality(token)

				return setGamesByModality(data)
			} catch (error) {
				return error.message
			}
		})()
	}, [])

	return (
		<Container>
			{modal}
			<Wrapper>
				<Header>
					<Points>
						F$ <span>{userData.pontos}</span>
					</Points>
				</Header>

				<Divider />

				{gamesByModality ? (
					<GamesModality gamesByModality={gamesByModality} />
				) : null}
			</Wrapper>
		</Container>
	)
}
