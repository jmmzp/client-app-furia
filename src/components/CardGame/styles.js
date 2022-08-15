import styled from 'styled-components'

export const Card = styled.div`
	min-width: 320px;
	padding: 0.8rem 1rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.6rem;

	background-color: #161616;

	transition: 0.3s;
	transform: translateX(-1%) translateY(-1%);
	box-shadow: 3px 3px 0px 1px #fff;

	&:hover {
		cursor: pointer;
		transform: translateX(0) translateY(0);
		box-shadow: 0px 0px 0px 0px #fff;
	}

	@media (min-width: 490px) {
		min-width: 400px;
	}
`

export const BoxTeams = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const BoxInfoGame = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const Team = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
`

export const LogoTeam = styled.img`
	padding: 0.4rem;

	width: 28px;
`

export const NameTeam = styled.p`
	font: 600 normal 1.6rem 'Raleway';
`

export const NameTeamAdversary = styled.p`
	font: 200 normal 1.6rem 'Raleway';
`

export const Infos = styled.p`
	font: 500 normal 1.2rem 'Montserrat';

	span {
		font-weight: 200;
	}
`
