import './ColorPicker.css'

export default function ColorPicker({ currentColor, setCurrentColor, clearColors}){


    const presetColors = [
        "#000000", "#FFFFFF", "#FF0000", "#FFAA00", "#FFDA8A",
        "#8AFFC4", "#1B8AB5", "#541082", "#FF407D", "#FF8C75"
    ];


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
                                className={currentColor === color ? 'styled-cell' : 'color-cell'}
                                key={color}
                                style={{ backgroundColor: color}}
                                onClick={() => setCurrentColor(color)}
                            ></div>
                        )
                    })}
                </div>
                <div>
                    <button className='clear-btn' onClick={clearColors}>Clear</button>
                </div>
                <div className='color-msg'>
                    Click any cell to paint it with 
                    the current color
                </div>
            </div>
        </section>
    )



}

