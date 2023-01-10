import React from "react";
import '../estilos/Boton.css'

const Boton = (props) => { 

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.')
    }

    return (
        <div
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
             onClick = {() => props.manejarClick(props.children)} >
            {props.children}
        </div>
    )
}

export default Boton