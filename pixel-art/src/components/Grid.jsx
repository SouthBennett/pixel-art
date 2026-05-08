import './Grid.css'
import { useState } from 'react'


export default function Grid({ currentColor }){
    const rows = Array.from({length: 16})
    const cols = Array.from({length: 16})

    const [ pixels, setPixels ] = useState(
        Array(256).fill("#ffffff")
    )

    function paintPixel(index){
        const updatedPixels = [...pixels]
        updatedPixels[index] = currentColor
        setPixels(updatedPixels)
    }
   


    return(
        <section className="grid-container">
            {rows.map((pixel, rowIndex) => (
                <div className='row' key={rowIndex} >
                    {cols.map((_,colIndex) => {
                        const pixelIndex = rowIndex * 16 + colIndex
                        return(
                            <button className='cell' key={colIndex}
                            onClick={() => paintPixel(pixelIndex)}
                            style={{backgroundColor: pixels[pixelIndex]}}
                            ></button>
                        )
                        
                    })}
                </div>
            ))}
        </section>
    )


}

