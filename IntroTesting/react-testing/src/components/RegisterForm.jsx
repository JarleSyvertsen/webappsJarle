import {useState} from "react";

export default function RegisterForm(props) {
    const [name, setName] = useState("John Doe");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    // Sikkert en mye renere måte å benytte flere update functions på, uten å direkte calle sets.
    // Kanskje call function from string value, og så passe hva slags setter gjennom function param?
    // Vil ikke inline heller, der jeg vil teste disse funksjonene uavhengig av HTML elementene.
    function updateName(e) {
        setName(e.target.value);
    }
    function updateAddress(e) {
        setAddress(e.target.value);
    }
    function updatePassword(e) {
        setPassword(e.target.value);
    }



 return (
     <div className="App">
         <form id="registerUser">
             <h1>Create user here</h1>
             <label htmlFor="name">Skriv inn navn</label>
             <input id="name" value={name} onChange={(updateName)} />
             <label htmlFor="address">Skriv inn adresse</label>
             <input id="address" value={address} onChange={updateAddress} />
             <label htmlFor="address">Skriv inn passord</label>
             <input id="password" value={password} onChange={updatePassword} />
             <button>Registrer bruker.</button>
         </form>
     </div>
 )
}