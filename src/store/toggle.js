import { createSlice } from '@reduxjs/toolkit'

const toggleSlice = createSlice({
	name: 'toggle',
	initialState: { columns: [] },
	reducers: {
		todoDobavit(state, action) {
			const { todo, id } = action.payload
			state.columns.push({
				todo,
				id,
				item: [],
			})
		},
		toggleTrello(state, action) {
			state.showCounter = !state.showCounter
		},
		inputTodo(state, action) {
			const current = state.columns.find(
				(el) => el.id === action.payload.id,
			)
			current.item.push({
				item: action.payload.value,
			})
		},
	},
})
export const toggleActions = toggleSlice.actions
export default toggleSlice
