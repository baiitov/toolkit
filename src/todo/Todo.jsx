import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import TodoCart from './TodoCart'

const Todo = () => {
	const items = useSelector((state) => state.toggle.columns)

	return (
		<>
			{items.map((el) => (
				<TodoCart
					key={el.id}
					todo={el.todo}
					id={el.id}
					item={el.item}
				/>
			))}
		</>
	)
}

export default Todo
