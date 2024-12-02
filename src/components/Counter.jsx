// import { useState } from "react";

export default function Counter({ value, onIncrement, onDecrement }) {
    // const [count, setCount] = useState(0);

    // const handleIncrement = () => {
    //     setCount((prev) => prev + 1);
    // };
    // const handleDecrement = () => {
    //     setCount((prev) => prev - 1);
    // };

    return (
        <div className="max-w-[400px] mx-auto mb-3 border p-10 text-center">
            <h3 className="text-3xl font-bold mb-4">Count: {value}</h3>
            <div className="flex justify-center">
                <button
                    className="block bg-green-600 text-white py-2 px-4 "
                    onClick={() => onIncrement()}
                >
                    Increment
                </button>
                <button
                    className="block bg-red-600 text-white py-2 px-4 "
                    onClick={() => onDecrement()}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}
