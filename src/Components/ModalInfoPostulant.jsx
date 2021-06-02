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
import ImgComplete from "../Static/Images/icon-process-complete.png";
import ImgClose from "../Static/Images/close-process-icon.png";
import openModal from '../Components/ModalFunction';
import ModalAgenda from "../Components/ModalAgenda";
import { ModalCloseProcess, ModalDocRequire, ModalProcessComplite, ModalSendMail, ModalSendTests, ModalSEStudy } from "./ModalStausTemplates";

import firebase from '../Firebase/firebase'
import 'firebase/firestore'


function ModalInfoPostulant({ dataModal }) {
	const [nextStatus, setNextSatus] = useState();
	const [newCandidate, setNewCandidate] = useState();
	const [udateStatus, setUpdateStatus] = useState();
	const [idCandidate, setIdCandidate] = useState();
	const firestore = firebase.firestore();
	


	const arrStatus = ['REGISTRADO', 'CV Y SOLICITUD', 'EVALUACIÓN', 'ENTREVISTAS', 'DOCUMENTACIÓN', 'EXAMEN MÉDICO', 'ESTUDIO SOCIO-ECONÓMICO','PROCESO COMPLETADO', 'PROCESO FINALIZADO']
	const buttonTitle = {
		'0': 'SOLICITAR CV Y SOLICITUD',
		'1': 'INICIAR EVALUACIÓN',
		'2': 'AGENDAR UNA ENTREVISTA',
		'3': 'SOLICITAR DOCUMENTACIÓN',
		'4': 'AGENDAR EXAMEN MÉDICO',
		'5': 'EMVIAR ESTUDIO SOCIO-ECONÓMICO',
		'6': 'PROCESO COMPLETADO',
		'7': 'CONTACTAR CANDIDATO',
		'8': 'CONTACTAR CANDIDATO'
	}
	const statusOrder = arrStatus.indexOf(dataModal.status)
	const buttonText = buttonTitle[statusOrder]

	const imgStatusObj = {
		'0': ImgInitial,
		'1': ImgCV,
		'2': ImgeEvaluation,
		'3': ImgIterview,
		'4': ImgDocuments,
		'5': ImgMedicalExam,
		'6': ImgSocioEconomic,
		'7': ImgComplete,
		'8': ImgClose
	}
	const modalsStausObj = {
		'0': ModalSendMail,
		'1': ModalSendTests,
		'2': ModalAgenda,
		'3': ModalDocRequire,
		'4': ModalAgenda,
		'5': ModalSEStudy,
		'6': ModalProcessComplite,
		'7': ModalSendMail,
		'8': ModalSendMail
	}
	const ModalStatus = modalsStausObj[statusOrder]

	const imgStatus = imgStatusObj[statusOrder]

	const dialog = useDialog();

// 	let newStatus;
// 	if(dataModal.status === 'ESTUDIO SOCIO-ECONÓMICO') {
// 		newStatus= 'COMPLETADO'
// 	} else {
// 		newStatus = arrStatus[statusOrder + 1]
// 	}
// 	setNextSatus(newStatus)
// 	console.log(newStatus, 'holi', nextStatus)


// firestore.collection('candidates').get()
// 	.then((res) => {
// 		res.forEach((item) => {
// 			if (item.data().email === dataModal.email && item.data().vacant === dataModal.vacant) {
// 				setIdCandidate(item.id)
// 				console.log(item.id)
// 			}
// 		})
// 	})


	return (
		<div className="ip-modal-container">
			<div className="ip-info-postulant">
				<div className="ip-vacant-title">Especialista de relaciones laborales</div>
				<div className="ip-info-text">
					<p>{dataModal.name}</p>
					<p>Email: {dataModal.email}</p>
					<p>Teléfono: {dataModal.phone}</p>
					{(dataModal.status !== 'REGISTRADO')&& 
						<>
							<a className="ip-linkCV">LINK_CV_{dataModal.name} </a>
							<a className="ip-linkCV">OTROS_ARCHIVOS</a>
						</>
					}
					
				</div>
			</div>
			<div className="ip-modal-process">
				<div className="ip-info-process">
					<img className="ip-imgProcess" src={imgStatus} />
					<div>{dataModal.status}</div>
				</div>
				<div className="ip-buttons-container">
					<button className="ip-modal-button" onClick={() => openModal(ModalStatus)}>{buttonText}</button>
					{(dataModal.status !== 'PROCESO FINALIZADO' && dataModal.status !== 'PROCESO COMPLETADO') &&
						<button className="ip-modal-button" onClick={() => openModal(ModalCloseProcess)}>FINALIZAR PROCESO</button>
					}
					
				</div>
			</div>
		</div>
	);
}

export default ModalInfoPostulant;