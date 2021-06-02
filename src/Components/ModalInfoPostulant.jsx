import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import './ModalInfoPostulant.css';
import ImgCV from "../Static/Images/icon1-form-copy.png";
import ImgInitial from "../Static/Images/emptyProfile2.png";
import ImgIterview from "../Static/Images/icon3-man-c.png";
import ImgeEvaluation from "../Static/Images/icon2-computer-c.png";
import ImgDocuments from "../Static/Images/icon4-folder-c.png";
import ImgMedicalExam from "../Static/Images/icon5-doctor-c.png";
import ImgSocioEconomic from "../Static/Images/icon6-house-c.png";
import openModal from '../Components/ModalFunction';
import ModalAgenda from "../Components/ModalAgenda";
import { ModalCloseProcess, ModalDocRequire, ModalProcessComplite, ModalSendMail, ModalSendTests, ModalSEStudy } from "./ModalStausTemplates";



function ModalInfoPostulant({ dataModal }) {
	const [nextStatus, setNextSatus] = useState();
	const [newCandidate, setNewCandidate]=useState();
	const [udateStatus, setUpdateStatus]=useState();
	const handleUpdate=()=> {

	}

	const arrStatus = ['REGISTRADO', 'CV Y SOLICITUD','EVALUACIÓN', 'ENTREVISTAS','DOCUMENTACIÓN', 'EXAMEN MÉDICO', 'ESTUDIO SOCIO-ECONÓMICO']
	const buttonTitle= {
		'0':'Pedir CV y Solicitud',
		'1':'Iniciar a Evaluación',
		'2':'Agendar una entrevista', 
		'3':'Pedir documentación', 
		'4':'Agendar examen médico', 
		'5':'Enviar estudio socio-económico', 
		'6':'Proceso Completo'
	}
	const statusOrder= arrStatus.indexOf(dataModal.status)
	const buttonText = buttonTitle[statusOrder]
	
		const imgStatusObj = {
			'0': ImgInitial,
			'1': ImgCV,
			'2': ImgeEvaluation,
			'3': ImgIterview,
			'4': ImgDocuments,
			'5': ImgMedicalExam,
			'6': ImgSocioEconomic
	}
	const modalsStausObj = {
			'0': ModalSendMail,
			'1': ModalSendTests,
			'2': ModalAgenda,
			'3': ModalDocRequire,
			'4': ModalAgenda,
			'5': ModalSEStudy,
			'6': ModalProcessComplite
	}
	const ModalStatus = modalsStausObj[statusOrder]

	const imgStatus = imgStatusObj[statusOrder]

	const dialog = useDialog();
	return (
		<div className="ip-modal-container">
			<div className="ip-info-postulant">
				<div className="ip-vacant-title">Especialista de relaciones laborales</div>
				<div className="ip-info-text">
					<p>{dataModal.name}</p>
					<p>Email: {dataModal.email}</p>
					<p>Teléfono: {dataModal.phone}</p>
					<a className="ip-linkCV">LINK_CV_{dataModal.name} </a>
				</div>
			</div>
			<div className="ip-modal-process">
				<div className="ip-info-process">
					<img className="ip-imgProcess" src={imgStatus} />
					<div>{dataModal.status}</div>
				</div>
				<div className="ip-buttons-container">
					<button className="ip-modal-button" onClick={() => openModal(ModalStatus)}>{buttonText}</button>
					<button className="ip-modal-button" onClick={() => openModal(ModalCloseProcess)}>FINALIZAR PROCESO</button>
				</div>
			</div>
		</div>
	);
}

export default ModalInfoPostulant;