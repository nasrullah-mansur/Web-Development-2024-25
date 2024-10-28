import { useState } from "react"
import Counter from "./Counter"


function CounterSection() {

    const [show, setShow] = useState(true);

    return (
        <div>
            {show && <Counter />}
            <Counter />
            <Counter />

            <button className="bg-green-400 py-2 px-4" onClick={() => setShow(!show)}>Click Me</button>
        </div>
    )
}

export default CounterSection