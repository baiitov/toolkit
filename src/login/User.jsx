import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import Input from '../UI/Input'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import Todo from './Todo'

const DivControl = styled.div`
	text-align: center;
	margin: 2rem auto;
	width: 350px;
	height: 350px;
	padding: 1rem;
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	border-radius: 10px;
`

const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 40px;
		height: 40px;
	}
	h1 {
		margin-left: 10px;
	}
`
const Loginparol = styled.p`
	color: red;
	font-family: Dancing Script;
`
const User = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const state = useSelector((state) => state.base)
	const [error, setError] = useState('')

	console.log(state)

	const emailHandler = (e) => setEmail(e.target.value)
	const passwordHandler = (e) => setPassword(e.target.value)

	const navigate = useNavigate()
	const submitHandler = (e) => {
		e.preventDefault()

		state.map((user) => {
			if (user.email === email && user.password === password) {
				return navigate('/UserTrello')
			} else {
				setError('Вы неправильно ввели данные!!!')
				setEmail('')
				setPassword('')
			}
		})
	}

	return (
		<>
			<form onSubmit={submitHandler}>
				<Div>
					<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEUmhP////8Aev/p9P8egf/5/f9goP/s9v/F2P9hpP8Gff8XgP9ElP+PuP+x0P/K4f+FtP/a6f+nyP+rzP9vp/85jv/g7v+Tvf8mhv+71v/S5P9Znv8uif/F3P9Pmf/0+P+cw/96hTX9AAACjElEQVR4nO3da0/bMBSA4Th12s1umzsUCmP//1cOiiZNwnYk1uPTuO/z/Uh+lfQSSOOqAgAAAAAAAAAAAAAAAACgANY7V+finLeZ+7zbH45tv8mjb4+HvfM5+6qub0xeTd9V2Rr91GfO+9RPmRLdoNL3YXBZAlu1QGPaDImqgTkSvd4p+mkQfi36STnQGOm3G5130X/1on2+0+5710keRKd/CN8PouCbjd3n/iYT0uzlvqP6g3bdxUHuNHVH7biLo9xpqvxp/5fgp379oB130ddyhRvtuIsNhRRSqI5CCimMa8KuPqNU2IzTNuIxNrZ5jI1MYyJSp3A3OxvjTk/BmadTYmbe3VZhM6euaKx9Dsw829R1np+jR1GlcEx/3bfnwMw5fSHrxpsqnBYuu+3XA9IsjUT/rKdR2GyXlvv1VbVbGtnGTlMK/wOFieVSGBihUAKFieVSGBihUAKFieVSGBihUAKFieVSGBihUAKFieVSGBihUAKFieVSGBihUAKFieVSGBihUAKFieVSGBihUAKFieVSGBhZfWGz8JuC9d+LsfQTrTp8I9WaCvuX5D1R55u6J+pbheZ1dj5yW5v3v95igSsqNG/j9DOsi56i6yr8JgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKZQrXHxK3OmKgTqFC49ucr9XX2iGOnGeuui/c1dUaIbZujD/0l3zVaj3bJNd+yPs9drPQOP5NBRSqI9CCinURyGFFOqjkEIK9UkW3sLGAcY8yBWW/0z28p+rX/7eCOXvb1H+HiV3sM9M+XsF3cN+T8Xv2aX+qV/81nI5Au9g/8M72MPyDvYhrcrfS/ZD6fsBAwAAAAAAAAAAAAAAAAAg4g/cAln6U+DzaQAAAABJRU5ErkJggg==' />
					<h1>Trello</h1>
				</Div>

				<DivControl>
					<h3>Вход в Trello </h3>
					<div>
						<Input
							value={email}
							onChange={emailHandler}
							type='text'
							placeholder='  Укажите адрес электроннoй почты'
						/>
						<Loginparol>{error}</Loginparol>
					</div>
					<div>
						<Input
							value={password}
							onChange={passwordHandler}
							type='password'
							placeholder='  Введите пароль'
						/>
					</div>

					<Button>Войти</Button>
				</DivControl>
			</form>
		</>
	)
}

export default User
