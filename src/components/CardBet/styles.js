import styled from 'styled-components'

export const AllCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`

export const Card = styled.div`
	width: 100%;

	height: 100px;
	border: 1px solid #fff;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	box-shadow: 3px 3px 15px 2px #202020;
`

export const DescriptionBet = styled.p`
	font: 400 normal 1.4rem 'Montserrat';
	text-align: center;
	margin-bottom: 1.2rem;
`

export const BoxAllOdds = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`

export const BoxOdd = styled.div`
	width: 50%;
	padding: 0.2rem auto;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	color: #121212;
	background-color: #fff;

	transition: 0.4s;
	&:hover:first-child {
		cursor: pointer;
		transform: translateY(-5px);
		box-shadow: 0 5px 0 0 #fff;

		color: #fff;
		background-color: #171717;
	}

	&:hover:last-child {
		cursor: pointer;
		transform: translateY(-5px);
		box-shadow: 0 5px 0 0 #ffffff90;

		color: #fff;
		background-color: #171717;
	}
`

export const OptionBet = styled.span`
	font: 300 normal 1.2rem 'Montserrat';
`

export const OddBet = styled.span`
	font: 700 normal 1.2rem 'Montserrat';
`
