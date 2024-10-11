const url = "https://stand-by-me.herokuapp.com/api/v1/characters"

/*async function loadCharacters(){
    fetch(url) 
        .then(response => response.json()) 
        .then(json => {
            for(let i = 0; i<175;i++){
                json[i].id
                console.log(json)
                const characterText = GetCharacterText()
                characterText.innerHTML += `
                <p>${json[i].name}</p>
                <p>${json[i].japaneseName}</p>
                <p>${json[i].abilities}</p>
                `
            }

        })
        .catch(error => console.error('Error fetching text:', error));
  }*/
  function BoxesCreate(){
    fetch(url) 
    .then(response => response.json()) 
    .then(json => {
        for(let j = 0; j<175;j++){
            const container = GetCharacterText()
            const box = document.createElement("div")
            box.setAttribute("class","box")
            box.innerHTML += `
            <p>${json[j].name}</p>
            <p>${json[j].japaneseName}</p>
            <p>${json[j].abilities}</p>
            <p>${json[j].nationality}</p>
            <p>${json[j].catchphrase}</p>
            <p>${json[j].chapter}</p>
            `
            container.appendChild(box)
        }
    })
    .catch(error => console.error('Error fetching text:', error));
  }

  function GetCharacterText() {
    return document.getElementsByClassName("container")[0]
}
  //window.onload = loadCharacters;
  window.onload = BoxesCreate;