import React, {useState} from 'react';
import JewelNoFav from "../assets/JoyaGray.png";
import JewelFav from "../assets/Joya.png";
import openModal from './ModalFunction';
import ModalInfoPostulant from './ModalInfoPostulant';

import '../Styles/TableRecluter.css'


const Candidates = (props) => {
  const [myFav, setMyFav] = useState(true);
  

  const changeImage = () => {
    setMyFav(!myFav)
  } 

  return (
    <>
      { 
        props.postulants.map((candidate) => (
          <tr key={candidate.id}>
            <td key={candidate}><img alt="favorites" src={myFav ? JewelNoFav : JewelFav} className="favorites" id="addFavorite" onChange={(e) => {setMyFav(e.target.value)}} onClick={changeImage}/>
            </td>
            <td key={candidate}>{candidate.vacant}</td>
            <td key={candidate}>{candidate.name}</td>
            <td key={candidate}>{candidate.email}</td>
            <td key={candidate}>{candidate.phone}</td>
            <td key={candidate}>{candidate.cv}</td>
            <td key={candidate}>{candidate.status}</td>
            <td key={candidate}>
              <button className="MyButton" onClick={()=>openModal(ModalInfoPostulant, candidate)}>ACTUALIZAR ESTADO</button>
            </td>
        </tr>
        ))
      }
      
    </>
  )
};

  export default Candidates;