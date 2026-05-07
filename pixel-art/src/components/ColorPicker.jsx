import './ColorPicker.css'

export default function ColorPicker({ currentColor, setCurrentColor }){
    const colorCells = [];

    for(let i = 0; i< 10;i++){
        colorCells.push(
            <div className='color-cell'></div>
        )
    }

    return(
        <section >
            <div className="colorPicker-container">
                    <h1>COLOR</h1>
                
                <div className='preview-color'>
                    preview  color
                </div>

                <div className='color-picker-grid'>
                    {colorCells}
                </div>
                <div>
                    <button className='clear-btn'>Clear</button>
                </div>
                <div className='color-msg'>
                    Click any cell to paint it with 
                    the current color
                </div>
            </div>
        </section>
    )



}

