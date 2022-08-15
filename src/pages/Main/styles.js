import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	max-width: 1440px;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 1.5rem;
`

export const CustomMain = styled.main`
	width: 100%;
	height: 100%;

	padding: 1.6rem 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 2.4rem;

	@media (min-width: 1000px) {
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-start;
		gap: 0;
	}
`

export const BoxCard = styled.section`
	width: 50%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const BoxGames = styled.section`
	width: 50%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
