export default function Alert({ updateFunction, toggleVisible }) {
    function handleChange(e) {
        updateFunction(e.target.value)
    }

    function handleToggle() {
        toggleVisible((current) => !current)
    }

    return (
        <>
            <input type="text" onChange={handleChange} />
            <br />
            <button onClick={handleToggle}>Click me!</button>
        </>
    )

}

