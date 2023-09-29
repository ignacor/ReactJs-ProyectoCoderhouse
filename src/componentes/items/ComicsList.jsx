import React from "react";

const ComicList = ({characters}) =>{

return(
    <div className="row">
        {
            characters.map((character) =>(
                <div className="col-6 col-md-4 bg-dark " key={character.id}>
                    <div className="card">
                <img src={character.image} alt={character.name} className="card-img-top "/>
                <h5 className="card-title">{character.name}</h5>
                <button type="button" className="btn btn-dark col-6 col-md-4">Comprar</button>
                    </div>

                </div>
            ))
        }
    </div>



)


}
export default ComicList