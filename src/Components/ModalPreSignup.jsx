import { useDialog } from "react-st-modal";
import React, { useState } from "react";
import "./ModalPreSignup.css";
import firebase from "../Firebase/firebase";
import "firebase/firestore";

const ModalPreSingup = () => {
	const db = firebase.firestore();
	const dialog = useDialog();
	
	const [name, setName] = useState("");
	const [rfc, setRfc] = useState("");
	const [vacant, setVacant] = useState("");
	const [email, setEmail] = useState("");
	const status = 'presign';
	const credentialFirebase = firebase.auth().currentUser;

	const sendInfo = () => {	
		db.collection('users').doc(credentialFirebase.email).get()
			.then((res)=>{
				let recruiterName = res.data().name;
				return recruiterName;
			})
			.then((recruiterName)=>db.collection("preSignUp").doc(email).set({ name, email, rfc, vacant, status, 'recruiter':recruiterName}))
	}

	return (
		<div className="ps-modalForm-container">
			<div className="ps-titleModal">Registrar Nuevo Candidato</div>
			<form
				className="ps-form"
				onSubmit={(e) => {
					e.preventDefault();
					sendInfo();
					dialog.close();
				}}
			>
				<div className="sp-input-container">
					<div className="ps-label-inpuForm">
						Nombre completo
          </div>
					<input
						className="ps-form-input"
						type="text"
						id="psName"
						name="nombre"
						onChange={(e) => setName(e.target.value)}
						required />
				</div>
				<div className="sp-input-container">
					<div className="ps-label-inpuForm">Correo electrónico</div>
					<input
						className="ps-form-input"
						type="email"
						id="singUpUser"
						email=""
						value={email.email}
						onChange={(e) => setEmail(e.target.value)}
						required />
				</div>
				<div className="sp-input-container">
					<div className="ps-label-inpuForm">RFC</div>
					<input
						className="ps-form-input"
						type="text"
						id="psRFC"
						rfc=""
						onChange={(e) => setRfc(e.target.value)}
						required />
				</div>
				<div className="sp-input-container">
					<div className="ps-label-inpuForm">Vacante</div>
					<select name="select" className="ps-form-select" onChange={(e) => setVacant(e.target.value)} required>
						<option value="">SELECCIONAR VACANTE</option>
						<option value="BUSSINESS INTELLIGENCE">BUSSINESS INTELLIGENCE</option>
						<option value="TECNOLOGÍA DE LA INF.">TECNOLOGÍA DE LA INF./SISTEMAS</option>
						<option value="ESTRATEGÍA COMERCIAL">ESTRATEGÍA COMERCIAL</option>
						<option value="OPERACIÓN PRENDARIA">OPERACIÓN PRENDARIA</option>
						<option value="SERVICIOS GENERALES">SERVICIOS GENERALES</option>
						<option value="CONTROL PRESUPUESTAL">CONTROL PRESUPUESTAL</option>
						<option value="AUDITORÍA">AUDITORÍA</option>
						<option value="PRODUCTOS">PRODUCTOS</option>
						<option value="PLANEACIÓN FINANCIERA">PLANEACIÓN FINANCIERA</option>
					</select>
				</div>
				<button className="ps-submit-button">REGISTRAR NUEVO CANDIDATO</button>
			</form>
		</div>
	);
}

export default ModalPreSingup;