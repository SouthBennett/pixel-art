import './ColorPicker.css'

export default function ColorPicker({ currentColor, setCurrentColor }){
    // const colorCells = [];

    const presetColors = [
        "#000000", "#FFFFFF", "#FF0000", "#FFAA00", "#FFDA8A",
        "#8AFFC4", "#1B8AB5", "#541082", "#FF407D", "#FF8C75"
    ];

    // for(let i = 0; i< 10;i++){
    //     colorCells.push(
    //         <div className='color-cell'></div>
    //     )
    // }

    return(
        <section >
            <div className="colorPicker-container">
                    <h1>COLOR</h1>

                <div className='preview-color'>
                    <input 
                        type="color" 
                        onChange={(event) => setCurrentColor(event.target.value)} 
                        value={currentColor}
                        className = "preview-bar" 
                    />
                </div>

                <div className='color-picker-grid'>
                    {presetColors.map((color) => {
                        return (
                            <div
                                className='color-cell'
                                key={color}
                                style={{ backgroundColor: color}}
                                onClick={() => setCurrentColor(color)}
                            ></div>
                        )
                    })}
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

