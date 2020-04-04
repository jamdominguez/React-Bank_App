import React from 'react'

const Error = () => {
    return(
        <div className='errorMsg-danger error' align='center'>
            Se ha producido un error en la carga de la transaccion
            <div>
                <small>Por favor, verifique que el nombre de la transaccion es correcto</small>
            </div>
        </div>
    )
}
export default Error