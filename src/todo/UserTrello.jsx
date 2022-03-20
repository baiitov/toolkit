import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { toggleActions } from '../store/toggle'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Todo from './Todo'
const DivConteiner = createGlobalStyle`
body{
background-image: url('https://miro.medium.com/max/1400/1*xMuIOwjliGUPjkzukeWKfw.jpeg');
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 100%;
}
`
const DivTrello = styled.div`
	display: flex;
	justify-content: space-around;
	justify-content: flex-start;

	button {
		justify-content: flex-start;
		font-size: 13px;
		border: none;
		margin-left: 15px;
	}
`

const Togglediv = styled.div`
	width: 250px;
	height: 110px;
	margin: 15px;
	background-color: aliceblue;
	border-radius: 5px;
`
const TextDiv = styled.div`
	width: 220px;
	height: 50px;
	background-color: whitesmoke;
	border-radius: 9px;
	margin-top: 15px;
	margin-left: 10px;
`
const P = styled.p`
	font-size: 18px;
	color: blueviolet;
	font-family: Pacifico;
	text-align: center;
	align-items: center;
`

const UserTrello = () => {
	const [todo, setTodo] = useState('')
	const dispatch = useDispatch()
	const [showToogle, setShowToogle] = useState(false)

	const todoHandler = (e) => {
		setTodo(e.target.value)
	}

	const onSubmitHandler = (e) => {
		e.preventDefault()
		if (todo.trim() === '') {
			return
		}
		setTodo()
		const newData = {
			todo: todo,
			id: Math.random().toString(),
		}
		setTodo('')
		dispatch(toggleActions.todoDobavit(newData))
	}
	return (
		<form onSubmit={onSubmitHandler}>
			<DivTrello>
				<Todo />
				{!showToogle ? (
					<TextDiv>
						<P onClick={() => setShowToogle(true)}>
							+ Добавить список
						</P>
					</TextDiv>
				) : (
					<Togglediv>
						<Input
							value={todo}
							onChange={todoHandler}
							type='text'
							placeholder='ввести заговолок для этой карточки'
						/>
						<Button type='submit'>добавить список</Button>
						<button onClick={() => setShowToogle(false)}>╳ </button>
					</Togglediv>
				)}
			</DivTrello>
			<DivConteiner />
		</form>
	)
}

export default UserTrello
