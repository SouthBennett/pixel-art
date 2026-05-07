import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Grid from './components/Grid'
import ColorPicker from './components/ColorPicker'

function App() {
  const [currentColor, setCurrentColor] = useState("#F73107");

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
          /> 
          <Grid />
        </div>

      </section>

    </main>
    </>
  )
}

export default App
