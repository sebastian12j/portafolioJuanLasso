import { useState } from 'react'
import NavBar from './componente/NavBar'

import ModuleParallax from './ModuleParallax/ModuleParallax';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <ModuleParallax/>
      </div>
     
    </>
  )
}

export default App

