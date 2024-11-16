import { useState } from "react";

export default function useInput(initValue) {
    const [value, setValue] = useState(initValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleClear = () => {
        setValue("");
    };

    return {
        attr: {
            value: value,
            onChange: handleChange,
        },
        onClear: handleClear,
    };

    // return {
    //     value: value,
    //     onChange: handleChange,
    // };
}

// const {value, onChange} =  useInput('');
