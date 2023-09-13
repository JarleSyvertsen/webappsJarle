import {useState} from "react";

export default function useFormValues(submitFunction) {
    const [formData, setFormData] = useState({name: "John Doe", address: "", password: ""})

    function handleChange(e) {
        const {id, value} = e.target;
        setFormData((currentForm) => ({...currentForm, [id]: value}))
    }

    function verifyFields() {
        return formData.name.length > 3;
    }

    async function submit(e) {
        if (e) {
            e.preventDefault();
        }
        if(!verifyFields()) {
            console.log("Did not match validation requirements.")
            return new Error("Did not match validation requirements.")
        }

        if(submitFunction) {
         return await submitFunction(e)
        }
        return await submitDefaultHandler()
    }

    async function submitDefaultHandler() {


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

    return {formData, setFormData, handleChange, submit}
}