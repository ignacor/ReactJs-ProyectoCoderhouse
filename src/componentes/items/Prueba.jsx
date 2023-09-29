import  "react";
const Pruebaxd= () => {

  fetch('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=086e6423d6bac0426b6629197aa1daca&hash=55651af81a3da9ffc061eb682273a7fd')
    .then(response => response.json)
    .then(json =>{
        json.data.results.map(item=>{
            let url = item.thumbnail.path+item.thumbnail.extension
            appDiv.innerHTML += `<div class="item">
            <img src=${url.replace('http','https')}/>
            <span>${item.name}</span>
            </div>`
        })
    })


}





export default Pruebaxd