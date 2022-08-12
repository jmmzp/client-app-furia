import styled from 'styled-components'

const Alert = styled.div`
	position: absolute;
	z-index: 6;
	top: 5%;

	display: flex;
	align-items: center;
	gap: 1.2rem;
	padding: 1rem;
	border-radius: 0.8rem;

	background-color: ${({ color }) => {
		return color
	}};
`

export default Alert
