import { useState } from "react"


function Panel({ title, isActive, onActive, index }) {


    return (
        <div className="border-2 p-3 mb-3">
            <h1 className="text-3xl font-bold">{title}</h1>
            {
                isActive &&
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nostrum quod ipsa asperiores suscipit odit dolores nam sequi, excepturi sunt iure voluptatibus, consequatur distinctio! Perferendis perspiciatis ipsum illum dignissimos! Aliquid.</p>
            }

            {
                !isActive && <button onClick={() => onActive(index)} className="bg-rose-400">Show</button>
            }

        </div>
    )
}

export default Panel