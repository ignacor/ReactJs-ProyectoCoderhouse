import React from "react";

const ComicList = ({characters}) =>{
const x ={
    width :'22.6rem',
    margin :'10px',
}
return(
    <div className="row">
        {
            characters.map((character) =>(
                <div className="col-6 col-md-4  " style={x} key={character.id}>
                    <div className="card">
                <img src={character.image} alt={character.name} className="card-img-top "/>
                <h5 className="card-title" style={{color:'#f0131e', textAlign :'center',}} >{character.name}</h5>
                <p class="card-text">{character.species} and {character.gender}</p>
                <button type="button" className="btn btn-dark ">Comprar</button>
                    </div>

                </div>
            ))
        }
    </div>



)


}
export default ComicList