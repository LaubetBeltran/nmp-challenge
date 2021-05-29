import React from 'react'
import '../Styles/TableRecluter.css'

import Joya from "../assets/Joya.png";

const UserTable = () => (
  <table className='tableStyle'>
    <thead>
      <tr>
        <th></th>
        <th>VACANTE</th>
        <th>NOMBRE</th>
        <th>CORREO</th>
        <th>TELÉFONO</th>
        <th>LINK CV</th>
        <th>STATUS</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img alt="favorites" src={Joya} className="favorites" /></td>
        <td>Especialista de relaciones laborales</td>
        <td>Ana Martínez</td>
        <td>anamat@hotmail.com</td>
        <td>55 50 20 25 02</td>
        <td>LINK ANA C.V.</td>
        <td>EN EVALUACIÓN</td>
        <td>
          <button className="MyButton" onClick={console.log('Si sirvo, actualizo')}>ACTUALIZAR ESTADO</button>
        </td>
      </tr>
    </tbody>
  </table>
)

export default UserTable