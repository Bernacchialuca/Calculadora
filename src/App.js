import './App.css';
import logoReact from './imagenes/React-icon.svg';
import Boton from './componentes/Boton.jsx'
import Pantalla from './componentes/Pantalla.jsx'
import BotonClear from './componentes/BotonClear.jsx'
import { useState } from 'react'
import { evaluate } from 'mathjs'

const App = () => {

  const [input, setInput] = useState('')
  const agregarInput = valor => setInput(input + valor)

  const calcularResultado = () => {

    if (input) { setInput(evaluate(input)) }
    else { setInput('') }

  }

  const borrar = () => {
    setInput(input.slice(0, input.length -1))
  
  } 

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <h1>Calculadora con React</h1>
        <img className='logo-react' src={logoReact} alt='logo' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')} >C</BotonClear>
          <Boton manejarClick={agregarInput} >/</Boton>
          <Boton manejarClick={agregarInput} >*</Boton>
          <Boton manejarClick={borrar} >←</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput} >7</Boton>
          <Boton manejarClick={agregarInput} >8</Boton>
          <Boton manejarClick={agregarInput} >9</Boton>
          <Boton manejarClick={agregarInput} >-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput} >6</Boton>
          <Boton manejarClick={agregarInput} >5</Boton>
          <Boton manejarClick={agregarInput} >4</Boton>
          <Boton manejarClick={agregarInput} >+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput} >.</Boton>
          <Boton manejarClick={agregarInput} >0</Boton>
          <Boton manejarClick={agregarInput} >00</Boton>
          <Boton manejarClick={calcularResultado}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
