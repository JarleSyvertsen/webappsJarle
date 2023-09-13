import {useState} from "react";

export default function useFormValues() {
    const [formData, setFormData] =
        useState({name: "John Doe", address: "", password: ""})

    function handleChange(e) {
        const {id, value} = e.target;
        setFormData((currentForm) => ({...currentForm, [id]: value}))
    }

    async function handleSubmit(e) {
        if (e) {
            e.preventDefault();
        }

        let sendData = {method: "POST", body: JSON.stringify(formData)}

        try {
            let res = await fetch("https://fakeAPInoresponseplease.org", sendData)
            // Hvis vi faktisk skulle gjort noe med responsen
            let result = await res.json();
            return res.status === 200;
        } catch (err) {
            console.log("Network error.")
        }


    }

    return {formData, setFormData, handleChange, handleSubmit}
}