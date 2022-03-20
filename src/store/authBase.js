import { createSlice } from '@reduxjs/toolkit'
const initState = [
	{
		email: 'bilalbaitov@gmail.com',
		password: '123456',
	},
	{
		email: 'baitovbilal@gmail.com',
		password: '123456',
	},
]
const trelloSlise = createSlice({
	name: 'trello',
	initialState: initState,
	reducers: {
		addInputToCard(state, action) {
			// const newItem = action.payload
		},
	},
})
export const trelloActions = trelloSlise.actions
export default trelloSlise
