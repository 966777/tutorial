import React, { useEffect, useState } from 'react'

const Hooks2 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        function myfun() {
            const data = fetch("https://jsonplaceholder.typicode.com/posts")
                .then((res) => res.json())
                .then((data) => setData(data))

        }
        myfun()
    }, [])

 

    return (
        <div>


            {data.map((item, index) =>
                <h1> {index}  {item.title}</h1>
            )}


        </div>
    )
}

export default Hooks2
