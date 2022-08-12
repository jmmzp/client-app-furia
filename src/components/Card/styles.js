import styled from 'styled-components'
import cardImage from '../../assets/card-base.png'

export const CustomCard = styled.div`
	width: 340px;
	height: 191px;

	padding: 1.2rem 1.8rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	background-image: url(${cardImage});
	background-size: cover;
	background-repeat: no-repeat;

	transition: 0.7s;
	&:hover {
		cursor: pointer;
		transform: translateY(-3%) scale(1.01);
	}

	section {
		padding-right: 2.6rem;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	section img {
		width: 11%;
	}

	@media (min-width: 490px) {
		width: 420px;
		height: 236px;

		padding: 1.6rem 2.2rem;
	}
`

export const CustomId = styled.p`
	font: 800 normal 2.2rem 'Montserrat';
`

export const InfoBox = styled.div`
	display: flex;
	flex-direction: column;

	h2 {
		font: 600 normal 1.4rem 'Montserrat';
	}
`

export const Label = styled.span`
	color: #ffffff99;
	font: 400 normal 0.8rem 'Montserrat';
`
