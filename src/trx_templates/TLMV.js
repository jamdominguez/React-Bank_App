import React from 'react'
import ButtonPanel from '../components/ButtonPanel'

function _renderOperations(operations) {
    return operations.map(operation => {
        return(
            <tr key={operation.key}>
                <td><input type="checkbox" className="form-check-input"/></td>
                <td><label className="">{operation.trx}</label></td>
                <td><label className="">{operation.date}</label></td>
            </tr>
        )
    })
}

const TLD2 = (props) => {        
    const { data } = props.trxData
    console.log('data', data)
    return(
        <form className='form-bank'>                        
            <div className="form-row form-row-bank">  
                <label className='label-bank col-sm-2' htmlFor="validationDefault01">Usuario</label>
                <div className='col-sm-2'><input size='7' maxLength='7' onChange={props.onChange} value={data.user} type="text" className="form-control input-amount" id="validationDefault01" required/></div>
                <label className='label-bank col-sm-2' htmlFor="validationDefault01">Transaccion</label>
                <div className='col-sm-2'><input size='4' maxLength='4' onChange={props.onChange} value={data.trx} type="text" className="form-control input-amount" id="validationDefault01" required/></div>                
            </div>
            <div className="form-row form-row-bank">  
                <label className='label-bank col-sm-2' htmlFor="validationDefault01">Fecha Inicio</label>
                <div className='col-sm-2'><input size='8' maxLength='8' onChange={props.onChange} value={data.dateI} type="text" className="form-control input-amount" id="validationDefault01" required/></div>
                <label className='label-bank col-sm-2' htmlFor="validationDefault01">Fecha Fin</label>
                <div className='col-sm-2'><input size='8' maxLength='8' onChange={props.onChange} value={new Date().toLocaleDateString()} type="text" className="form-control input-amount" id="validationDefault01" required/></div>                
            </div>            
            <div className="form-row form-row-bank">
                <table className="table table-bank">
                    <thead className="nav-bank">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Transaccion</th>
                            <th scope="col">Fecha</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        {_renderOperations(data.operations)}   
                    </tbody>
                </table>                
            </div>
            <ButtonPanel props={props}/>
        </form>
    )
}
export default TLD2