import React from 'react'
import ButtonPanel from '../components/ButtonPanel'

function _renderReasons(reasons) {
    return reasons.map(reason => {
        return(
            <option key={reason.key} value={reason.key}>{reason.value}</option>
        )
    })
}

const TLD2 = (props) => {        
    const { data } = props.trxData
    console.log('data', data)
    return(
        <form className='form-bank'>                        
            <div className="form-row form-row-bank">  
                <label className='label-bank col-sm-2' htmlFor="validationDefault01">Importe</label>
                <div className='col-sm-8'><input size='10' maxLength='10' onChange={props.onChange} value={data.import} type="text" className="form-control input-amount" id="validationDefault01" required/></div>
            </div>
            <div className="form-row form-row-bank">  
                <label className='label-bank col-sm-2' htmlFor="validationDefault02">Cuenta Corriente</label>
                <div placeholder='Entidad' className='col-sm-2'><input size='4' maxLength='4' onChange={props.onChangeCC} type="text" className="form-control" id="validationDefault02" required/></div>
                <div placeholder='Oficina' className='col-sm-2'><input size='4' maxLength='4' onChange={props.onChangeCC} type="text" className="form-control" id="validationDefault03" required/></div>
                <div placeholder='CS' className='col-sm-2'><input size='2' maxLength='2' onChange={props.onChangeCC} type="text" className="form-control" id="validationDefault04" required/></div>
                <div placeholder='Cuenta' className='col-sm-2'><input size='10' maxLength='10' onChange={props.onChangeCC} type="text" className="form-control" id="validationDefault05" required/></div>
            </div>            
            <div className="form-row form-row-bank">
                <label className="form-check-label label-bank col-sm-2'" htmlFor="exampleCheck1">Excluir comision</label>
                <input type="checkbox" className="form-check-input col-sm-5" id="exampleCheck1" onChange={props.onChangeCheck}/>
            </div>
            <div className="form-row form-row-bank">  
                <label className='label-bank col-sm-2' htmlFor="validationDefault07">Motivo de exclusion</label>
                <div className='col-sm-8'>
                    <select className='form-control' disabled={data.skypComission} id='validationDefault07'>
                        {_renderReasons(data.reasons)}            
                    </select>
                </div>                    
            </div>
            <ButtonPanel props={props}/>
        </form>
    )
}
export default TLD2