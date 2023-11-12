import IMCLogo from './assets/escala-de-peso.png'
import './App.css'
import Formulario from './assets/Components/Formulario/Formulario'

function App() {

  return (
    <>
      <div className="container">
        <header>
          <img src={IMCLogo} className="logo" alt="IMC logo" />
          <h1 className='title'>Calculadora de IMC</h1>
        </header>
        <Formulario />
      </div>
    </>
  )
}

export default App
