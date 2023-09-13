import {useState} from "react";

export default function useFormValues() {
    const [formData, setFormData] =
        useState({name: "John Doe", address: "", password: ""})

    function handleChange(e) {
        const {id, value} = e.target;
        setFormData((currentForm) => ({...currentForm, [id]: value}))
    }
    async function  handleSubmit(e) {
        if(e) {
        e.preventDefault();
        }
        let sendData = {method: "POST", body: JSON.stringify(formData)}

        try {
            let res = await fetch("https://fakeAPInoresponseplease.org", sendData)
            let result = await res.json();

            if (res.status === 200) {
                return result;
            }
            else {
                return 'Received answer, but request was not accepted.';
            }
    } catch(err) {
            console.log("Network error.")
        }


}

    return {formData, setFormData, handleChange, handleSubmit}
}