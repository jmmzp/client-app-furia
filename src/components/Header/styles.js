import styled from 'styled-components'

export const CustomHeader = styled.header`
	width: 100%;

	padding: 1.6rem 0;

	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Logo = styled.img`
	width: 3.8rem;
	cursor: pointer;
	transition: 0.8s;
	&:hover {
		transform: scale(1.1);
		filter: invert(100%);
	}
`
