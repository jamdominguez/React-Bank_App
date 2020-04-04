import React from 'react'

const ButtonPanel = (props) => {
    return(
        <div className="form-group btn-section-bank" align='center'>
            <button className="btn btn-light btn-trx btn-bank" type="submit">Aceptar</button>
            <button className="btn btn-light btn-trx btn-bank">Modificar</button>
            <button className="btn btn-light btn-trx btn-bank" disabled>Ver PDF</button>
            <button className="btn btn-light btn-trx btn-bank">Submit form for {props.trx}</button>
        </div>        
    )
}
export default ButtonPanel