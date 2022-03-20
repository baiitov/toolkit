import styled from 'styled-components'

const Input = styled.input`
	width: 230px;
	height: 30px;
	margin-top: 18px;
	margin-left: 5px;
	border: cadetblue;
	border: 2px solid blue;
	border-radius: 3px;

	&:focus {
		background-color: bisque;
		border: 2px solid blue;
	}
`

export default Input
