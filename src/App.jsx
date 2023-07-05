import Formulario from './components/Formulario'
import Tabela from './components/Tabela'
import './global.css'

function App() {

  return (
    <div className='container'>
      <h1 className='text-center mb-4'>Calculadora de IMC</h1>
      <Tabela />
      <Formulario />
    </div>
  )
}

export default App
