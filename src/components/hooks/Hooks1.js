import React, { useState } from 'react'

const Hooks1 = () => {

    const [data, setData] = useState(5)

    function handleDecrease() {
        setData(data - 1)
    }

    function handleIncrease() {
        setData(data + 1)
    }

    return (
        <></>
        // <div style={{ height: 400 }}>

        //     <h1>counter {data}</h1>
        //     <button onClick={handleDecrease}>Decrement</button>
        //     <button onClick={handleIncrease}>Increment</button>

        // </div>
    )
}

export default Hooks1
