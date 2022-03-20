import React, { useState } from 'react'
import styled from 'styled-components'
import Modalka from '../UI/Modal'
import Modal from '../UI/Modal'
const lishka = styled.li`
	list-style: none;
`
const TodoTasks = ({ item, id }) => {
	const [error, setError] = useState(false)

	const modalHandler = () => {
		setError(true)
	}

	return (
		<div>
			{item.map((el) => (
				<lishka key={el.id}>
					<p onClick={modalHandler}>{el.item}</p>
				</lishka>
			))}
			{error && <Modalka id={id} item={item} setError={setError} />}
		</div>
	)
}

export default TodoTasks
