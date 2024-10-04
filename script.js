const url = "https://stand-by-me.herokuapp.com/api/v1/characters"

async function loadCharacters(){
    fetch(url) 
        .then(response => response.json()) 
        .then(json => {
            for(let i = 0; i<175;i++){
                json[i].id
                console.log(json)
                const characterText = GetCharacterText()
                characterText.innerHTML = `
                <p>${json[i].name}</p>
                <p>${json[i].japaneseName}</p>
                <p>${json[i].abilities}</p>
                `
            }

        })
        .catch(error => console.error('Error fetching text:', error));
  }
  function GetCharacterText() {
    return document.getElementsByClassName("box")[0]
}
  window.onload = loadCharacters;