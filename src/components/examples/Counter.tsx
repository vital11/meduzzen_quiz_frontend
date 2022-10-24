import { useState } from 'react';


const Counter = function () {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div className='m-5'>
            <h1>{count}</h1>
            <button className='p-5 mx-1 bg-slate-100' onClick={increment}>Increment</button>
            <button className='p-5 mx-1 bg-slate-100' onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;
