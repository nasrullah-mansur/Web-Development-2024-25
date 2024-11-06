import { forwardRef } from "react"


function Input({ onAdd }, ref) {
    return (
        <div>
            <input ref={ref} className="border p-2" type="text" />
            <br />
            <br />
            <button onClick={() => onAdd()} className="border p-2">Add Item</button>

        </div>
    )
}


export default forwardRef(Input);
