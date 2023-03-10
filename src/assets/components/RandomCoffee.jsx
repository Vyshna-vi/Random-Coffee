import React, { useEffect, useState } from 'react'
import axios from 'axios'


function RandomCoffee() {
    const [imageurl, setimageurl] = useState({})
    async function CallApi() {
        let response = await axios.get("https://coffee.alexflipnote.dev/random.json")
        console.log(response)
        setimageurl(response.data)
    }
    useEffect(() => { CallApi() }, [])
    return (
        <div>
            <img src={imageurl.file} alt="image" width={500} height={250} />
        </div>
    )
}

export default RandomCoffee