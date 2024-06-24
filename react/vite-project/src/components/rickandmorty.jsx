import { useEffect, useState } from "react";

export default function rickandmorty(){
    const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((responseData) => setData(responseData));  
    }, [])

}