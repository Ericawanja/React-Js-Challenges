import React, { useEffect, useState } from 'react'

function DisplayActivityList({ list }) {
    console.log(list)
    let [expanded, setIsExpanded] = useState(null)
    const handleExpand = (key)=>{
        let temp = key === expanded ? null :key
        setIsExpanded(temp)
    }
    return <>
        <h1>List</h1>
        {list.length !== 0 ? <div>
            {
                list.map((activity) => {
                    return <ol key={activity.key}>
                        <span>
                            <li>{activity.activity}</li>
                            <button onClick={() => handleExpand(activity.key)}>{activity.key === expanded ? "Collapse":"Expand"}</button>
                        </span>
                        {activity.key === expanded && <div>
                            <ul>
                                <li>{`type: ${activity.type}`}</li>
                                <li>{`participants: ${activity.participants}`}</li>
                                <li>{`price: ${activity.price}`}</li>
                                <li>{`link: ${activity.link}`}</li>
                                <li>{`key: ${activity.key}`}</li>
                                <li>{`accessibility: ${activity.accessibility}`}</li>
                            </ul>
                        </div>}
                    </ol>

                })
            }
        </div> : <div>
            <h1>No items in the list</h1>
        </div>}
    </>
}
export default React.memo(DisplayActivityList)