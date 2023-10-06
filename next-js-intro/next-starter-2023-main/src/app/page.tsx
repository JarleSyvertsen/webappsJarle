import {redirect} from 'next/navigation';

export default function Home() {
    return (
        <article className="w-1/3 m-auto mt-10">
            <h1 className="w-fit text-center font-bold">Løsning til oppgave Next Intro:</h1>
            <br/>
            <p className="w-fit">Demonstrasjon av GET, uke 40 oppgave som henter fra API punkt
                /api/items/random/[count]. Count kan benyttes til å etterspørre x antall elementer.</p>
            <a href="/products" className="mt-2 block w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">GET
                eksempel</a>
            <br/>
            <p className="w-fit">Demonstrasjon av POST, form eksempel av controlled form input som sendes til
                /api/items/addProduct. Resultatet sendes tilbake som JSON, som rendres i p: </p>
            <a href="/products/addProduct" className="mt-2 block w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">POST eksempel</a>
        </article>
    )
}
