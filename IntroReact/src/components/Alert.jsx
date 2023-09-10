import {useState} from "react";
export default function Alert() {
    const [value, setValue] = useState('Default from hook');

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <>
            <input type="text" onChange={handleChange} value={value} />
            <br />
            <button onClick={() => {alert(value)}}>Click me!</button>
        </>
    )

}

