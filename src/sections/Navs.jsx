
import { useState } from 'react';
import Panel from './Panel'

function Navs() {
    // const [active, setActive] = useState(false);
    const [index, setIndex] = useState(0);

    let activeHandler = (indexNumber) => {
        setIndex(indexNumber);
    }

    return (
        <>
            <Panel isActive={index === 0} index={0} onActive={activeHandler} title="Class One" />
            <Panel isActive={index === 1} index={1} onActive={activeHandler} title="Class Two" />
            <Panel isActive={index === 2} index={2} onActive={activeHandler} title="Class Three" />

        </>
    )
}



export default Navs