import React from 'react'
import { useContext } from 'react'
import { usersContext } from '../App'
import { useEffect } from 'react';

function DisplayUsers() {
    const {state, setUsers} = useContext(usersContext)
    console.log(state, setUsers);

    useEffect(()=>{
        let timerId
        let keys = Object.keys(state)
        setInterval(() => {
          let randomIndex = Math.floor(Math.random() * keys.length-1)
         let toChange= keys[randomIndex]
         setUsers({...state, [toChange]:false})
        }, 1000);
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