import { useState } from "react"


function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="border bg-rose-100 mb-3 p-2 text-center w-[200px]">
            <h1>{count}</h1>
            <button className="bg-green-400 py-2 px-4" onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}

export default Counter