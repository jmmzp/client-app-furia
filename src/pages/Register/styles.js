import styled from 'styled-components'
import bgMobile from '../../assets/bg-login-mobile.png'
import bg1440 from '../../assets/bg-login-1440.png'
import bg1920 from '../../assets/bg-login-1920.png'

export const Wrapper = styled.div`
	width: 100%;
	max-width: 1920px;
	min-height: 100vh;
	padding: 1.6rem;

	background-image: url(${bgMobile});
	background-size: cover;
	background-repeat: no-repeat;

	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;

	img {
		width: 7.5rem;
	}

	div {
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: 1.6rem;
	}

	.btn-login {
		padding: 1.2rem;
		width: 70%;
		max-width: 400px;
	}

	@media (min-width: 520px) {
		background-image: url(${bg1440});
	}

	@media (min-width: 1441px) {
		background-image: url(${bg1920});
	}
`

export const Title = styled.h1`
	font: normal 300 3rem 'Raleway';
	color: #fff;

	@media (min-width: 1000px) {
		font-size: 4.4rem;
	}
`

export const Footer = styled.footer`
	font: normal 200 0.8rem 'Raleway';
	color: #fff;

	@media (min-width: 1000px) {
		font-size: 1rem;
	}
`

export const Span = styled.span`
	font: normal 300 1.4rem 'Raleway';
	color: #ffffff;
`
