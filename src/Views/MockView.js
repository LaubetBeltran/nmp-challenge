import React, { useState, useEffect } from "react";
import ModalPreSingup from '../Components/ModalPreSignup';
import { CustomDialog} from 'react-st-modal';
import ModalAgenda from "../Components/ModalAgenda";
import ModalInfoPostulant from "../Components/ModalInfoPostulant";

const MockView = () => {
	const openModal= async (ModalComponent) => {
		const result = await CustomDialog(
			<ModalComponent />,
			{
				title: ' ',
				showCloseIcon: true,
			}
		);
	}
  return (
		<>
    <div>Ilse y Lau</div>
		<button onClick={()=>openModal(ModalPreSingup)}>Modal Pre Registro</button>
		<button onClick={()=>openModal(ModalAgenda)}>Modal Agendar Entrevista</button>
		<button onClick={()=>openModal(ModalInfoPostulant)}>Modal Info Candidato</button>
		</>
  )
}

export default MockView;
