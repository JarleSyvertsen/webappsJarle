import {useState} from "react";

export default function useFormValues() {
    const [formData, setFormData] =
        useState({name: "John Doe", address: "", password: ""})

    function handleChange(e) {
        const {id, value} = e.target;
        setFormData((currentForm) => ({...currentForm, [id]: value}))
    }
    function handleSubmit(e) {
        console.log(formData);
        e.preventDefault();
    }

    return {formData, setFormData, handleChange, handleSubmit}
}