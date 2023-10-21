import React, { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);

    const getData = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
    }
    useEffect(() => {
        getData()
    },[])
    return [data]
}

export default useFetch