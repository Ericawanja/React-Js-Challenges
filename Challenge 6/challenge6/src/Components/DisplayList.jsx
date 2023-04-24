import React, { useState } from 'react'

function DisplayList() {
    let [list, setList] = useState({
        "Organize closet": [
            { "Donate old clothes and shoes": false },
            { "Buy new shelf": false },
            { "Put in shelf by color": false },
        ],
        "Finish homework": [
            { "Finish math homework": false },
            { "Finish science homework": true },
            { "Finish Reactjs homework": false },
        ],
        "Achieve nirvana": [
            { "Meditate a little": false },
            { "Gain some wisdom": false },
        ],
    })
    return (
        <div>
            {Object.keys(list).length > 0 ? <div>
                {Object.keys(list).map(item => {

                    return <div>
                        <h3>{item}</h3>
                        <h4>Subtasks</h4>
                        <div className='subtasks'>
                            {list[item].map(obj => {
                                let subtask = Object.keys(obj)[0]
                                console.log()
                                {
                                    return obj[subtask] ? (<div>
                                        <h4>Completed</h4>
                                        <p>{subtask}</p>
                                    </div>) : <div> <h4>Uncompleted</h4><p>{subtask}</p></div>
                                }

                            })}

                        </div>
                    </div>

                })}
            </div> : <h1>No items available</h1>}
        </div>
    )
}

export default DisplayList