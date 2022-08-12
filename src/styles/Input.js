import styled from 'styled-components'

const Input = styled.input`
	border: none;
	width: 100%;
	padding: 1.4rem;
	margin-bottom: 1.6rem;
	border-radius: none;
	font: 500 normal 1.4rem 'Raleway';

	color: #090909;

	background-color: #fff;

	&:focus {
		box-shadow: 0 0 30px 5px rgba(255, 255, 255, 0.1);
		outline: 0;
	}
`

export default Input
