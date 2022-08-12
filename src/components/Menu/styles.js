import styled from 'styled-components'

export const CustomMenu = styled.div`
	position: absolute;
	z-index: 4;
	left: 0;

	max-width: 500px;
	width: 100%;
	height: 100vh;
	padding: 2.4rem;

	background-color: #090909;
	box-shadow: 0 0 30px 10px #ffffff10;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	overflow: hidden;

	div {
		width: 100%;

		display: flex;
		justify-content: end;
	}

	img.logo {
		width: 5rem;
		transition: 1s;
		filter: invert(100%);

		&:hover {
			cursor: pointer;
			filter: invert(0%);
			transform: scale(1.2);
		}
	}
`

export const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 1.6rem;

	p {
		font: 200 normal 2.8rem 'Raleway';
		transition: 0.8s;

		&:hover {
			cursor: pointer;
			opacity: 60%;
			transform: scale(1.1);
		}
	}
`
