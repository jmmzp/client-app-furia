import { useEffect } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import NextGames from '../../components/NextGames'
import useUserContext from '../../hooks/useUserContext'
import Container from '../../styles/Container'
import Divider from '../../styles/Divider'
import { BoxCard, BoxGames, CustomMain, Wrapper } from './styles'
import { getUserData, getNextGames } from '../../services/api'

export default function Main() {
	const { modal, setUserData, setNextGames, token, logout } = useUserContext()

	useEffect(() => {
		;(async function () {
			try {
				const { data } = await getUserData(token)

				return setUserData(data)
			} catch (error) {
				return logout()
			}
		})()
		;(async function () {
			try {
				const { data } = await getNextGames(token)

				return setNextGames(data)
			} catch (error) {
				return setNextGames([])
			}
		})()

		return
	}, [])

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
