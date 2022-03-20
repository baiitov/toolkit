import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toggleSlice, { toggleActions } from '../store/toggle'
import styled from 'styled-components'
import TodoTasks from './TodoTasks'
import Button from '../UI/Button'

const Block = styled.div`
	width: 250px;
	height: 100%;
	margin: 15px;
	background-color: aliceblue;
	border-radius: 5px;

	button {
		justify-content: flex-start;
		font-size: 13px;
		border: none;
	}
	h4 {
		text-align: center;
	}
	p {
		width: 240px;
		height: 30px;
		background-color: white;
		text-align: center;
		border-radius: 4px;
		border: solid 2px blue;
		margin-left: 3px;
		&:focus {
			background-color: aliceblue;
		}
	}
`
const TodoInput = styled.input`
	width: 240px;
	height: 50px;
`
const TodoCart = (props) => {
	const dispatch = useDispatch()
	// const state = useSelector(state => state.toggle.columns)
	const [toggle, setToggle] = useState(false)
	const [value, setValue] = useState('')
	const onAddHandler = (e) => {
		if (value.trim() === '') {
			return
		}
		setValue('')
		dispatch(toggleActions.inputTodo({ value, id: props.id }))
	}
	return (
		<Block key={props.id}>
			{!toggle ? (
				<div>
					<p>{props.todo}</p>
					<Button onClick={() => setToggle(true)}>
						+Добавить карточку
					</Button>
				</div>
			) : (
				<>
					<h4>{props.todo}</h4>
					<TodoTasks id={props.id} item={props.item} />

					<TodoInput
						placeholder='Ввести заговолок для этой карточки'
						value={value}
						onChange={(e) => setValue(e.target.value)}
						type='text'
					/>
					<Button type='button' onClick={onAddHandler}>
						добавить
					</Button>
					<button onClick={() => setToggle(false)}>╳</button>
				</>
			)}
		</Block>
	)
}

export default TodoCart
