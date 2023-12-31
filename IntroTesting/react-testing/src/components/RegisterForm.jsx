import useFormValues from "./useFormValues";

export default function RegisterForm({ submitHandler }) {
    const {formData, handleChange, submit} = useFormValues(submitHandler);

    return (
        <div className="App">
            <form id="registerUser" onSubmit={submit}>
                <h1>Create user here</h1>
                <label htmlFor="name">Skriv inn navn</label>
                <input id="name" value={formData.name} onChange={handleChange}/>
                <label htmlFor="address">Skriv inn adresse</label>
                <input id="address" value={formData.address} onChange={handleChange}/>
                <label htmlFor="address">Skriv inn passord</label>
                <input id="password" value={formData.password} onChange={handleChange}/>
                <button type="submit" id="submitButton">Registrer bruker.</button>
            </form>
        </div>
    )
}