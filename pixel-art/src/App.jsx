import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Grid from './components/Grid'
import ColorPicker from './components/ColorPicker'

function App() {
  const [currentColor, setCurrentColor] = useState("#0BD465");

      const [ pixels, setPixels ] = useState(
        Array(256).fill("#ffffff")
    )

      function clearColors() {
        setPixels(Array(256).fill("#ffffff"))
    } 

  return (
    <>
    <main>
      <Header /> 
      <section className='home-page'>
        <h1>Pixel Art Editor</h1>

        <div className='home-layout'>
          <ColorPicker 
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
            clearColors={clearColors}
          /> 
          <Grid 
            currentColor={currentColor}
            pixels={pixels}
            setPixels={setPixels}
          />
        </div>

      </section>

    </main>
    </>
  )
}

export default App
