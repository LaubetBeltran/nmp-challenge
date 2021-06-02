import React from 'react';

import '../Styles/TableRecluter.css'
import '../Styles/RecruiterView.css'

const FilterStatus = (props) => {
  const filterDataState = (status) => {
    if (status === "All") {props.setPostulants(props.allData)
    }else {
    const filterItems = props.allData.filter((item)=> item.status === status)
    props.setPostulants(filterItems)}
  }

    return (
      <>
        <select
					id='selectStatus'
					onClick={()=>document.getElementById('selectVacant').selectedIndex = 0}
          className ="btn-selectRecluter"
          type="number"
          onChange={(e) => {
            const valueSetear = e.target.value;
            filterDataState(valueSetear);
            console.log(e.target.value,'Soy select Status')
          }}>
            <option value="All">FILTRAR POR STATUS</option>
            <option value="REGISTRADO">REGISTRADO</option>
            <option value="CV Y SOLICITUD">CV Y SOLICITUD</option>
            <option value="EVALUACIÓN">EVALUACIÓN</option>
            <option value="ENTREVISTAS">ENTREVISTAS</option>
            <option value="DOCUMENTACIÓN">DOCUMENTACIÓN</option>
            <option value="EXAMEN MÉDICO">EXAMEN MÉDICO</option>
            <option value="ESTUDIO SOCIO-ECONÓMICO">ESTUDIO SOCIO-ECONÓMICO</option>
						<option value="PROCESO COMPLETADO">PROCESO COMPLETADO</option>
            <option value="PROCESO FINALIZADO">PROCESO FINALIZADO</option>
        </select>
      </>
    )
};

export default FilterStatus;