import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);


    function inc() {
        if (count < 10) {
            setCount(count + 1);
        }
    }
    
    function dec() {
        if (count > 0) {
            setCount(count - 1); 
        }
    }

    return (
        <div className='counter'>
            <h4>Count:{count}</h4>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}

