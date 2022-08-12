import styled from 'styled-components'

const Select = styled.select`
	border: none;
	width: 100%;
	padding: 1.4rem;
	margin-bottom: 1.6rem;
	border-radius: none;
	font: 500 normal 1.4rem 'Raleway';

	color: #090909;

	background-color: #fff;

	&:focus {
		box-shadow: 0 0 40px 5px rgba(255, 255, 255, 0.12);
		outline: 0;
	}
`

export default Select
