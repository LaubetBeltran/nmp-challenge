import { useDialog } from "react-st-modal";
import React from "react";
import './ModalAgenda.css'

function ModalAgenda() {
	const dialog = useDialog();
	return (
		<div className="ma-modalForm-container">
			<div className="ma-titleModal">Agendar Entrevista</div>
			<div className="ma-CandidatoModal">Candidato: Ana Martínez</div>
			<form className="ma-form" onSubmit={(e) => {
				e.preventDefault();
				dialog.close();
			}}>
				<div className="ma-inputsForms-container">
					<div className="ma-input-container">
						<div className="ma-label-inpuForm">Entrevista:</div>
						<select name="select" className="ma-form-select" required>
							<option value="value1">Value 1</option>
							<option value="value2" selected>Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</div>
					<div className="ma-input-container">
						<div className="ma-label-inpuForm">Cede:</div>
						<select name="select" className="ma-form-select" required>
							<option value="value1">Value 1</option>
							<option value="value2" selected>Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</div>
					<div className="ma-input-container">
						<div className="ma-label-inpuForm">Fecha:</div>
						<input type="date" className="ma-form-input" required/>
					</div>
					<div className="ma-input-container">
						<div className="ma-label-inpuForm">Hora:</div>
						<input type="time" className="ma-form-input" required/>
					</div>
					<div className="ma-input-container">
						<div className="ma-label-inpuForm">Lugar:</div>
						<select name="select" className="ma-form-select" required>
							<option value="value1">Value 1</option>
							<option value="value2" selected>Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</div>
					<div className="ma-input-container">
						<div className="ma-label-inpuForm">Enlace:</div>
						<input type="text" className="ma-form-input" required/>
					</div>
					<div className="ma-input-container">
						<div className="ma-label-inpuForm">Entervistador:</div>
						<select name="select" className="ma-form-select"  required>
							<option value="value1">Value 1</option>
							<option value="value2" selected>Value 2</option>
							<option value="value3">Value 3</option>
						</select>
					</div>
					<div className="ma-input-container">
						<div className="ma-label-inpuForm">Correo del entrevistador:</div>
						<input type="mail" className="ma-form-input" required/>
					</div>
					<div className="ma-input-container">
						<div className="ma-label-inpuForm">Teléfono del entrevistador:</div>
						<input type="number" className="ma-form-input" required/>
					</div>
					<div className="ma-input-container">
						<div className="ma-label-inpuForm">Observaciones:</div>
						<textarea className="ma-form-Biginput" />
					</div>
				</div>
				<div className="ma-button-container">
					<button className="ma-submit-button">Actualizar:</button>
				</div>
			</form>

		</div>
	);
}

export default ModalAgenda;
