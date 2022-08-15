import styled from 'styled-components'

export const HeaderBets = styled.header`
	width: 100%;
	padding: 1.6rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Points = styled.p`
	padding: 0.6rem 1rem;
	border: 1px solid #313131;
	border-radius: 50px;
	font: 700 normal 1.4rem 'Montserrat';

	span {
		font-weight: 500;
	}
`

export const Game = styled.div`
	width: 100%;
	padding: 1rem 1.6rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Versus = styled.span`
	font: 100 normal 2rem 'Raleway';
`

export const Team = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
`

export const LogoTeam = styled.img`
	padding: 0.4rem;

	width: 30px;
`

export const NameTeam = styled.p`
	font: 500 normal 2rem 'Montserrat';
`
