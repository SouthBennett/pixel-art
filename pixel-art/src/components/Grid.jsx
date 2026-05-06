import './Grid.css'

export default function Grid(){
    const cells = [];

    for(let i =0;i < 256;i++){
        cells.push(
            <div className='cell'></div>
        )
    }


    return(
        <section className="grid-container">
            {cells}
        </section>
    )


}

