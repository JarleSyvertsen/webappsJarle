import React, {useState} from "react";
import {productInfo} from "@/types/types";

export default function registerForm() {
    const [formData, setFormData] = useState({} as productInfo);
    const [replyData, setReplyData] = useState("Visning av motatt data kommer her!");
    const updateValue = (e: React.FormEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setFormData(values => ({...values, [name]: value}))
    }

    const postSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };

        fetch("http://localhost:3000/api/items/addProduct", request)
            .then(response => response.json() as unknown as JSON)
            .then(jsonData => JSON.stringify(jsonData))
            .then(data => setReplyData(data))
    }

    return (
        <form className="flex flex-col items-center" onSubmit={postSubmit}>
            <label className="w-1/5">Name of the item: <input type="text" name="name" value={formData.name || ""} onChange={updateValue}></input></label>
            <label className="w-1/5">Price of the item: <input type="text" name="price" value={formData.price || ""} onChange={updateValue}></input></label>
            <label className="w-1/5">Category of the item: <input type="text" name="category" value={formData.category || ""} onChange={updateValue}></input></label>
            <label className="w-1/5">Description of the item: <input type="text" name="description" value={formData.description || ""} onChange={updateValue}></input></label>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 m-2 rounded" type="submit">Submit</button>
            <p>{replyData}</p>
        </form>
    )
}