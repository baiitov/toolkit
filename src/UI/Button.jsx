import styled from 'styled-components'

const Button = styled.button`
	width: 150px;
	height: 30px;
	margin-top: 18px;
	background-color: blue;
	color: black;
	border-radius: 5px;
	border: none;

	font-family: Staatliches;
	& :focus {
		background-color: blue;
	}

	&:active {
		background-color: dimgrey;
	}
`

export default Button
