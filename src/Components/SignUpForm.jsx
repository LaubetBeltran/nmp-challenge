import React, { useState } from 'react'
import '../Styles/signUpform.css'
import firebase from '../Firebase/firebase'
import 'firebase/firestore'
import { useHistory } from "react-router-dom";
import loginBack from '../Static/Images/login-back.png'
import ReCaptchaComponent from './ReCaptcha'
import { useToasts } from 'react-toast-notifications'

const SignUpForm = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const { addToast } = useToasts()

    const signUpBtn = () => {
        if (isVerified && email && password) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    history.push('/')
                })
                .catch(function (error) {
                    console.log(error);
                    addToast('Correo o contraseña incorrectos', {
                        autoDismiss: true,
                        placement: 'top-right',
                        appearance: 'error'
                    })
                });
        } else {
            addToast('Ingresa tu correo y contraseña, y muéstranos que no eres un robot', {
                autoDismiss: true,
                placement: 'top-right',
                appearance: 'warning'
            })
        }
    }

    return (
        <div className='signUp-container'>
            <img className='signUpbackImg' src={loginBack} alt='signUpbackImg' />
           
            <form className='signUp-form-container'>
                <p>
                        Registro de Postulantes
                 </p>

                <div id="signUp-form-container-w">
                    <div className="formLR">

                    <div className="labelInputSgngUp">
                        <label className="namee" for='signUpName'>
                            Nombre
                        </label>
                        <input type='text'
                            id='signUpName'
                        // name=''
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="labelInputSgngUp">
                        <label for='RFC'>
                            RFC
                        </label>
                        <input type='text'
                            id='signUpRFC'
                        // name=''
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="labelInputSgngUp">
                        <label for='Telefono'>
                            Telefono
                        </label>
                        <input type='number'
                            id='signUpnumber'
                        // name=''
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    </div>

                    <div className="formLR">
                        <div className="labelInputSgngUp">
                            <label for='loginUser'>
                                Correo electrónico
                            </label>
                            <input type='email'
                                id='singUpUser'
                                name=''
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="labelInputSgngUp">
                            <label for='loginPsw'>
                                Contraseña
                            </label>
                            <input type='password'
                                id='loginPsw'
                                name=''
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </div>
                        <div className="labelInputSgngUp">
                        <label for='loginPswConfirmed'>
                            Confirma tu Contraseña
                        </label>
                        <input type='password'
                            id='loginPswConfirmed'
                            
                        />
                    </div>
                        {/* if (loginPsw !=== loginPswConfirmed) {
                            <label> No coinciden las contraseñas</label>
                        }
                        */}
                    </div>
                </div>

                <ReCaptchaComponent
                    isVerified={isVerified}
                    setIsVerified={setIsVerified}
                />

                <input type='button'
                    className={isVerified && email && password ? 'btn-enabled' : 'btn-disabled'}
                    id='loginBtn'
                    value='INGRESAR'
                    nClick={signUpBtn}
                /> 
                <div className="AvisoDePrivacidad"></div>
           </form>
        </div>
    )
}

export default SignUpForm
