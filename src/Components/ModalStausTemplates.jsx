import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import "./ModalStatusTemplate.css";
import firebase from "../Firebase/firebase";
import "firebase/firestore";

export const ModalSendMail = () => {
	return (
		<div className='modalStatus-container'>
			<div className='modalStatus-title'>Enviar Mensaje</div>
			<input type="textarea" className='modalStatus-texarea' />
			<button className='modalStatus-button'>ENVIAR MENSAJE</button>
		</div>
	)
}

export const ModalSEStudy = () => {
	return (
		<div className='modalStatus-container'>
			<div className='modalStatus-title'>Enviar archivo estudio socio-económico</div>
			<div className="custom-input-file col-md-6 col-sm-6 col-xs-6">
				<input type="file" id="fichero-tarifas" className="input-file" value="" />
			</div>
			<div className='modlStatus-addmessage'>
				<label>Añadir mensaje:</label>
				<input type="textarea" className='modalStatus-smallTexarea' />
			</div>
			<button className='modalStatus-button'>ENVIAR ARCHIVO</button>
		</div>
	)
}

export const ModalSendTests = () => {
	return (
		<div className='modalStatus-container'>
			<div className='modalStatus-title'>Enviar Tests De Evaluación</div>
			<input className='modalStatus-input' type="text" placeholder='Links para evaluación' />
			<input type="text" className='modalStatus-input' placeholder='Links para evaluación' />
			<div className="custom-input-file col-md-6 col-sm-6 col-xs-6">
				<input type="file" id="fichero-tarifas" className="input-file" value="" />
			</div>
			<div className='modlStatus-addmessage'>
				<label>Añadir mensaje:</label>
				<input type="textarea" className='modalStatus-smallTexarea' />
			</div>
			
			<button className='modalStatus-button'>ENVIAR TESTS</button>
		</div>
	)
}

export const ModalProcessComplite = () => {
	return (
		<div className='modalStatus-container'>
			<div className='modalStatus-title'>Tu Proceso de Selección ha sido completado</div>
			<input type="textarea" className='modalStatus-texarea' value="Nos comunicaremos contigo en los próximos días. ¡Muchas gracias por completar el proceso!" />
			<button className='modalStatus-button'>ENVIAR MENSAJE</button>
		</div>
	)
}

export const ModalDocRequire = () => {
	return (
		<div className='modalStatus-container'>
			<div className='modalStatus-title'>Especifica la documentación requerida para la vacante</div>
			<input type="textarea" className='modalStatus-texarea'/>
			<label>Recuerda incluír el Aviso de Datos Personales</label>
			<div className="custom-input-file col-md-6 col-sm-6 col-xs-6">
				<input type="file" id="fichero-tarifas" className="input-file" value="" />
			</div>
			<button className='modalStatus-button'>ENVIAR MENSAJE</button>
		</div>
	)
}

export const ModalCloseProcess = () => {
	return (
		<div className='modalStatus-container'>
			<div className='modalStatus-title'>Finalizar Proceso</div>
			<div className='modalStatus-msg'>Recuerda agradecer al candidato y enviar tu feedback sobre lo que observaste en el proceso.</div>
			<input type="textarea" className='modalStatus-texarea' />
			<button className='modalStatus-button'>ENVIAR MENSAJE</button>
		</div>
	)
}