import React, { useState, useEffect } from "react";
import { CustomDialog} from 'react-st-modal';
import Candidates from "./Candidates";

const openModal= async (ModalComponent, dataModal) => {
	console.log(dataModal)
	const result = await CustomDialog(
		<ModalComponent 
		dataModal={dataModal}
		/>,
		{
			title: ' ',
			showCloseIcon: true,
		}
	);
}

export default openModal;