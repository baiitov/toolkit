import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'
const DivModal = styled.div`
	margin-left: 400px;

	width: 500px;
	height: 326px;
	padding: 1rem;
	justify-content: flex-start;
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	border-radius: 10px;
	position: relative;
	bottom: 100px;
	z-index: 100;
`
const DIVH = styled.div`
	display: flex;
	h2 {
		margin-left: 10px;
	}
`
const ImgModal = styled.img`
	width: 30px;
	height: 30px;
	margin-top: 19px;
`
const PP = styled.p`
	font-size: 20px;
	margin-left: 10px;
`

const Imgdiv = styled.div`
	display: flex;
`
const Inputmodal = styled.input`
	width: 490px;
	height: 90px;
`
const ImgOtmena = styled.img`
	font-size: 15px;
	width: 30px;
	height: 30px;
	position: relative;
	right: 20px;
`
const Footerdiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`
const Footerp = styled.p`
	width: 250px;
	height: 25px;
	background-color: wheat;
	border-radius: 4px;
	margin-bottom: 6px;
`
const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.75);
`
const BackDrop = () => {
	return <Backdrop />
}

const Modal = ({ item, setError }) => {
	return (
		<DivModal>
			<DIVH>
				<ImgModal
					src='https://img.icons8.com/ios-glyphs/2x/web-design.png'
					alt=''
				/>
				<h2>Redux middleware</h2>
			</DIVH>

			<p>в калонке </p>
			<Imgdiv>
				<ImgModal
					src='https://img.icons8.com/ios-glyphs/344/menu-rounded.png'
					alt=''
				/>
				<PP>Описание</PP>
			</Imgdiv>
			<Inputmodal
				placeholder='Добивить более подробное описание...'
				type='text'
			/>
			<Footerdiv>
				<Button>Сохранит</Button>
				<ImgOtmena
					onClick={() => setError(false)}
					src='https://img.icons8.com/ios-glyphs/2x/delete-sign.png'
					alt=''
				/>
				<Footerp>Помощь по форматированию</Footerp>
			</Footerdiv>
		</DivModal>
	)
}
const Modalka = ({ item, setError }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Modal item={item} setError={setError} />,
				document.getElementById('modal-root'),
			)}
			{ReactDOM.createPortal(
				<BackDrop />,
				document.getElementById('backdrop-root'),
			)}
		</>
	)
}
export default Modalka
