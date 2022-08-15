import styled from 'styled-components'

export const BoxAllGames = styled.div`
	width: 100%;
	height: 100%;

	margin: 1.6rem 0;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	gap: 2rem;
`

export const BoxGames = styled.div`
	width: 100%;
	max-width: 450px;
	height: 100%;
	padding: 1rem 0 1.8rem;

	border: 1px solid #313131;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.2rem;

	@media (min-width: 1000px) {
		height: 300px;
		overflow: auto;
	}
`

export const TitleGame = styled.p`
	font: 300 normal 1.8rem 'Raleway';

	span {
		font-weight: 700;
	}
`
