import React, { useState } from "react";
import "../Styles/signUpform.css";
import firebase from "../Firebase/firebase";
import "firebase/firestore";
import { useHistory } from "react-router-dom";
import loginBack from "../Static/Images/login-back.png";
import ReCaptchaComponent from "./ReCaptcha";
import { useToasts } from "react-toast-notifications";
import openModal from '../Components/ModalFunction';
import ModalPrivacy from '../Components/ModalPrivacy';

const initialInputs = {
	email: '',
	password: ''
}

export const SignUpForm = () => {
	const auth = firebase.auth();
	const db = firebase.firestore();
	const history = useHistory();

	const [name, setName] = useState("");
	const [rfc, setRfc] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState(initialInputs);
	const [password, setPassword] = useState(initialInputs);
	// const [recruiterName, setRecruiterName] = useState('');
	const [idPreSign, setIdPreSign] = useState('');
	const status = 'initial';
	const cv = 'none';
	const interviews = [];
	const[samePassword, setSamePasword] = useState();

	const info = async () => {
		db.collection('preSignUp').doc(email).get()
			.then((res) => {
				console.log(res.data().rfc, res)
				return res.data()
			})
			.then((res) => {
				console.log(res);
				auth.createUserWithEmailAndPassword(email, password)
					.then(() => {
						console.log('registrado')
						db.collection("candidates").doc().set({ name, rfc, phone, email, 'recruiter': res.recruiter, status, cv, interviews, 'vacant': res.vacant })
						db.collection("users").doc(email).set({ name, email, 'permission': 'applicant' });
						db.collection('preSignUp').doc(email).delete();
						history.pushState('./');
					})
					.catch(() => {
						console.log('no registrado :c')
					})
			})
			.catch((err) => {
				// addToast(
				// 	"Necesitas estar dado de alta en la plaaforma para poder registrarte, contacta a tu recluador",
				// 	{
				// 		autoDismiss: true,
				// 		placement: "top-right",
				// 		appearance: "warning",
				// 	}
				// );
				console.log(err, 'no se encontró usuario')
			})
	}


	const [isVerified, setIsVerified] = useState(false);
	const { addToast } = useToasts();

	// const signUpBtn = () => {
	//   if (isVerified && email && password) {
	//     firebase
	//       .auth()
	//       .signInWithEmailAndPassword(email, password)
	//       .then(() => {
	//         history.push("/");
	//       })                                                                                          
	//       .catch(function (error) {
	//         console.log(error);
	//         addToast("Correo o contraseña incorrectos", {
	//           autoDismiss: true,
	//           placement: "top-right",
	//           appearance: "error",
	//         });
	//       });
	//   } else {
	//     addToast(
	//       "Ingresa tu correo y contraseña, y muéstranos que no eres un robot",
	//       {
	//         autoDismiss: true,
	//         placement: "top-right",
	//         appearance: "warning",
	//       }
	//     );
	//   }
	// };
	
	const pasworInput = ()=> {
		const pwdText= document.getElementById('loginPsw').value
		const confirmpwdText = document.getElementById('loginPswConfirmed').value
		if (confirmpwdText !== '' && pwdText !== 'confirmpwdText') {
			console.log('confirme contraseña');
			setSamePasword('empty');
		} else if (confirmpwdText === '' && pwdText ===''){
			samePassword('conraseñas vacías');
			setSamePasword('empty')
		}else if (confirmpwdText === pwdText){
			console.log('contraseñas iguales');
			setSamePasword(true)
		} else if (confirmpwdText !== pwdText){
			console.log('contraseñas diferentes');
			setSamePasword(false)
		}
	}
	const confirmPasworInput = ()=> {
		const pwdText= document.getElementById('loginPsw').value
		const confirmpwdText = document.getElementById('loginPswConfirmed').value
		if (pwdText !== '' && pwdText !== confirmpwdText) {
			console.log('contraseñas diferentes');
			setSamePasword(false);
		} else if (confirmpwdText === '' && pwdText ===''){
			samePassword('conraseñas vavías');
			setSamePasword('empty')
		} else if (confirmpwdText === pwdText){
			console.log('contraseñas iguales');
			setSamePasword(true)
		}else if (confirmpwdText !== pwdText){
			console.log('contraseñas diferentes');
			setSamePasword(false)
		}
	}






	const privacyModal = () => {
		openModal(ModalPrivacy);
	}

	return (
		<div className="signUp-container">
			<img className="signUpbackImg" src={loginBack} alt="signUpbackImg" />

			<form className="signUp-form-container" onSubmit={(e) => {
				e.preventDefault()
				info()
				console.log('hola')
			}}>
				<p>Registro de Postulantes</p>

				<div id="signUp-form-container-w">
					<div className="formLR">
						<div className="labelInputSgngUp">
							<label className="namee" for="signUpName">
								Nombre
            </label>
							<input
								type="text"
								id="signUpName"
								name="nombre"
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="labelInputSgngUp">
							<label for="RFC">RFC</label>
							<input
								type="text"
								id="signUpRFC"
								rfc=""
								onChange={(e) => setRfc(e.target.value)}
							/>
						</div>
						<div className="labelInputSgngUp">
							<label for="Telefono">Telefono</label>
							<input
								type="number"
								id="signUpnumber"
								phone=""
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
					</div>

					<div className="formLR">
						<div className="labelInputSgngUp">
							<label for="loginUser">Correo electrónico</label>
							<input
								type="email"
								id="singUpUser"
								email=""
								value={email.email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="labelInputSgngUp">
							<label for="loginPsw">Contraseña</label>
							<input
								type="password"
								id="loginPsw"
								password=""
								// value={password.password}
								onChange={(e) => {
									pasworInput()
									setPassword(e.target.value)
								}}
							/>
						</div>
						<div className="labelInputSgngUp">
							<label for="loginPswConfirmed">Confirma tu Contraseña</label>
							<input type="password" id="loginPswConfirmed" 
							password=""
							// value={password.password}
							onChange={(e) => {
								confirmPasworInput()
								setPassword(e.target.value)
							}}/>
						</div>
						{/* if (loginPsw !=== loginPswConfirmed) {
                            <label> No coinciden las contraseñas</label>
                        }
                        */}
					</div>
				</div>
				<div className="AvisoDePrivacidad">
					<input
						type="checkbox"
						className="checkbox-politics"
						id="politics"
						value="true"
					// onChange={politicsChecked}
					/>
					<label for="politics" className="politics">
						Acepto el Aviso Legal sobre Protección de Datos Personales y los{" "}
						<a
							target="_blanck"
							// href="https://www.montepiedad.com.mx/legales-aviso-de-privacidad-empleo"
							className="a-politics"
							onClick={privacyModal}
						>
							<span>Términos y Condiciones </span>
						</a>{" "}
            de este concurso.
          </label>
				</div>


				<ReCaptchaComponent
					isVerified={isVerified}
					setIsVerified={setIsVerified}
				/>

				<input
					type="submit"
					className={
						isVerified && email && password ? "btn-enabled" : "btn-disabled"
					}
					id="loginBtn"
					value="INGRESAR"
				/>
				<div className="AvisoDePrivacidad"></div>
			</form>
		</div>
	);
};



export default SignUpForm;
