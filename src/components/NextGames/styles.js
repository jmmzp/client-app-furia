import styled from 'styled-components'

export const Wrapper = styled.section`
	padding: 1.6rem;

	border: 1px solid #303030;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const Title = styled.p`
	font: 100 normal 2rem 'Montserrat';
	text-align: center;

	margin-bottom: 1rem;

	@media (min-width: 1000px) {
		font-size: 2.4rem;
	}
`

export const BoxCards = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`
