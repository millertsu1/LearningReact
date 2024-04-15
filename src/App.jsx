
import Categorias from './components/Categorias/Categorias'
import Contador from './components/Contador/Contador'
import Temporizador from './components/Temporizador/Temporizador'
import UseRef from './components/UseRef/UseRef'

const App = () => {
  return (
    <>
    <h1 className='text-5xl bold text-center'>Probando Hooks</h1>
    <Contador stock={10} inicial={1}/>
    <Categorias/> 
    <UseRef/> 
    <Temporizador/> 
    </>
  )
}

export default App