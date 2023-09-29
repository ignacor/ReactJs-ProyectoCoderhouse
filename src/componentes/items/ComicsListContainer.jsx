import React,{useEffect, useState} from "react";
import ComicList from "./ComicsList";
const ComicsListContainer = () => {

    const [data,setData] = useState ([]);

    const getData = () => {
        fetch ("https://rickandmortyapi.com/api/character")
        .then ((response) => response.json())
        .then ( (data) => setData(data.results) )
        .catch ( (error) => console.log(error) )

    }
    useEffect ( () =>{
        getData()
    },[] )
    console.log(data)
    return(
      <ComicList characters={data} />
    )



}
export default ComicsListContainer