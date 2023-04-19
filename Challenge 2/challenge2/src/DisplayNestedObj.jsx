import React from 'react'

function DisplayNestedObj({data}) {
  return (
    <div>
        {Object.entries(data).map(([key, value])=>{
            if(typeof value ==="object"){
                return(
                    <>
                    <p>{`${key}:`}</p>
                    <div style={{paddingLeft:'20px'}}>
                        <DisplayNestedObj data={value}/>
                    </div>
                    </>
                )
            }else{
                return <p>{`${key}:${value}`}</p>
            }
        })}
    </div>
  )
}

export default DisplayNestedObj