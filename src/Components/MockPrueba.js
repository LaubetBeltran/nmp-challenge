import React from 'react'
import '../Styles/TableRecluter.css'
import Joya from "../assets/JoyaGray.png";
import openModal from './ModalFunction';
import ModalInfoPostulant from './ModalInfoPostulant';


export default function MockPrueba({name, cv, phone, status, vacant, email}) {
    
const changeImage = () => {
    if (document.getElementById("addFavorite").src == "../assets/JoyaGray.png") 
    {
        document.getElementById("addFavorite").src = "../assets/Joya.png";
    }
    else 
    {
        document.getElementById("addFavorite").src = "../assets/JoyaGray.png";
    }
   
  }
    
    return (
        <table className='tableStyle'>
            <thead>
            <tr>
                <td><img alt="favorites" src={Joya} className="favorites" id="addFavorite" onClick={changeImage}/></td>
                <th>VACANTE</th>
                <th>NOMBRE</th>
                <th>CORREO</th>
                <th>TELÉFONO</th>
                <th>CV</th>
                <th>STATUS</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{vacant}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{cv}</td>
                <td>{status}</td>
                <td>
                    <button className="MyButton" onClick={()=>openModal(ModalInfoPostulant)}>ACTUALIZAR ESTADO</button>
                </td>
            </tr>
            </tbody>
    </table>    
       
    )
}
