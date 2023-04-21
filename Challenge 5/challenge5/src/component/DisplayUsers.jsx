import React from 'react'
import { useContext } from 'react'
import { usersContext } from '../App'
import { useEffect } from 'react';

function DisplayUsers() {
    const {state, setUsers} = useContext(usersContext)


    useEffect(()=>{
        
        let keys = Object.keys(state)
        let timerId = setInterval(() => {
          let randomIndex = Math.floor(Math.random() * (keys.length))
          console.log(randomIndex, keys)
         let toChange= keys[randomIndex]
         setUsers({...state, [toChange]:false})
        }, 1000);
        return ()=>clearInterval(timerId)
      }, [])
    return <div>
    <h1>users</h1>
    {
        Object.keys(state).map(key=>{
            
            return <p>{`${key}`}: { state[key] ? '🟢' : '🔴'} </p>
        })
    }
    </div>
}

export default DisplayUsers