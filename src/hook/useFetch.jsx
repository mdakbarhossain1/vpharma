import { useEffect, useState } from "react"

const useFetch = ( file ) => {

    const [data, setData] = useState([]);
    const url =`./api/${file}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            // console.log(url)
    }, [url])

    return (
        data
    )
}

export default useFetch