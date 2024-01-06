import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByValue } from '../feature/counter/counterSlice'

function Counter() {
    const {value}=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
    return (
        <>
        <button onClick={()=>dispatch(increment())}>Increment</button><br />
        <button onClick={()=>dispatch(incrementByValue(5))}>Increment by 5</button>
        <h1>{value}</h1>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </>
    )
}

export default Counter
