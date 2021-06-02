import React from 'react';

import '../Styles/TableRecluter.css'
import '../Styles/RecruiterView.css'

const FilterVacants = (props) => {
  const filterDataVacant = (vacant) => {
    if (vacant === "All") {props.setPostulants(props.allData)
    }else {
    const filterItems = props.allData.filter((item)=> item.vacant === vacant)
    props.setPostulants(filterItems)}
  }

    return (
      <>
        <select
					id='selectVacant'
					onClick={()=>document.getElementById('selectStatus').selectedIndex = 0}
          className ="btn-selectRecluter"
          type="number"
          onChange={(e) => {
            const valueSetear = e.target.value;
            filterDataVacant(valueSetear);
            console.log(e.target.value,'Soy select')
          }}>
            <option value="All" >FILTRAR POR VACANTE</option>
            <option value="BUSSINESS INTELLIGENCE" >BUSSINESS INTELLIGENCE</option>
            <option value="TECNOLOGÍA DE LA INF./SISTEMAS" >TECNOLOGÍA DE LA INF./SISTEMAS</option>
            <option value="ESTRATEGÍA COMERCIAL" >ESTRATEGÍA COMERCIAL</option>
            <option value="OPERACIÓN PRENDARIA" >OPERACIÓN PRENDARIA</option>
            <option value="SERVICIOS GENERALES" >SERVICIOS GENERALES</option>
            <option value="CONTROL PRESUPUESTAL" >CONTROL PRESUPUESTAL</option>
            <option value="AUDITORÍA" >AUDITORÍA</option>
            <option value="PRODUCTOS" >PRODUCTOS</option>
            <option value="PLANEACIÓN FINANCIERA" >PLANEACIÓN FINANCIERA</option>
          </select>
        
      </>
    )
};

export default FilterVacants;