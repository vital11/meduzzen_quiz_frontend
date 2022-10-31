import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Button } from "../UI/Button";


const Counter: React.FC = () => {
    const { count } = useTypedSelector(state => state.counter);
    const { increment, decrement, reset } = useActions();

    useEffect(() => {
        increment(0)
    }, [])

    useEffect(() => {
        decrement(0)
    }, [])

    useEffect(() => {
        reset()
    }, [])

    return (
        <>
            <p>{ count }</p>
            <div >
                <Button onClick={() => increment(10)} text='Increment'/>
                <Button onClick={() => decrement(10)} text='Decrement'/>
                <Button onClick={() => reset()} text='Reset'/>
            </div>
        </>
    )
}

export default Counter;