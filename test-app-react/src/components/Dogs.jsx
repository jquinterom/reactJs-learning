import React, { useEffect, useState } from "react";
import { URL_DOGS } from "../constants/Costants";

function Dogs() {
    const [dogs, setDogs] = useState([])

    // Hooks
    useEffect(() => { getDogs() }, [])


    const getDogs = async () => {
        const responseApi = await fetch(URL_DOGS)
        const responseJson = await responseApi.json()

        // Updating state
        setDogs(responseJson.data.dogs)
    }


    return (
        <div>
            <h1>Wave at my friend</h1>

            {dogs.map(x =>
                <li key={x.id}>
                    <img width={200} src={x.image_url} />
                    <br/>
                    {x.name_es}
                </li>)}
        </div>
    )
}

export default Dogs