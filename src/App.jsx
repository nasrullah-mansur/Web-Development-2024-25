import Counter from "./components/Counter";
import TotalCount from "./components/TotalCount";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/counterSlice";

function App() {
    // const initialCounters = [
    //     {
    //         id: 1,
    //         value: 0,
    //     },
    //     {
    //         id: 2,
    //         value: 0,
    //     },
    //     {
    //         id: 3,
    //         value: 0,
    //     },
    // ];

    // const [counters, setCounters] = useState(initialCounters);

    // const totalCounterValue = counters.reduce((sum, item) => {
    //     return sum + item.value;
    // }, 0);

    // const handleIncrement = (id) => {
    //     const updateCounters = counters.map((count) => {
    //         if (count.id == id) {
    //             return {
    //                 ...count,
    //                 value: count.value + 1,
    //             };
    //         } else {
    //             return count;
    //         }
    //     });

    //     setCounters(updateCounters);
    // };
    // const handleDecrement = (id) => {
    //     const updateCounters = counters.map((count) => {
    //         if (count.id == id) {
    //             return {
    //                 ...count,
    //                 value: count.value - 1,
    //             };
    //         } else {
    //             return count;
    //         }
    //     });

    //     setCounters(updateCounters);
    // };

    // Redux here ================================ ;
    const counters = useSelector((store) => store.counters);
    const dispatch = useDispatch();

    const totalCounterValue = counters.reduce((sum, item) => {
        return sum + item.value;
    }, 0);

    const handleIncrement = (id) => {
        dispatch(increment(id));
    };
    const handleDecrement = (id) => {
        dispatch(decrement(id));
    };

    return (
        <div>
            {counters.map((counter) => (
                <Counter
                    key={counter.id}
                    value={counter.value}
                    onIncrement={() => handleIncrement(counter.id)}
                    onDecrement={() => handleDecrement(counter.id)}
                />
            ))}

            <TotalCount totalCount={totalCounterValue} />
        </div>
    );
}

export default App;
