
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    const container = document.getElementById("cards-container");
    
    data.results.forEach((character) => {

      const card = document.createElement("div");
      card.className = "card";
      
      const cardHeader = document.createElement("div");
      cardHeader.className = "card-header";
      cardHeader.style.backgroundImage = `url(${character.image})`;
      
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
      
      const cardTitle = document.createElement("h3");
      cardTitle.className = "card-title";
      cardTitle.innerHTML = character.name;
      
      const cardText = document.createElement("p");
      cardText.className = "card-text";
      cardText.innerHTML = `Status: ${character.status}<br>Species: ${character.species}<br>Gender: ${character.gender}`;
      const episodeLink = document.createElement("a");
      episodeLink.className = "episode-link";
      episodeLink.innerHTML = "episode"; 
      episodeLink.href = character.episode; 
      

      cardBody.appendChild(episodeLink);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
  
      card.appendChild(cardHeader);
      card.appendChild(cardBody);
     
      container.appendChild(card);
    });
  })
  .catch((error) => {
    // Handle the error
    console.error(error);
  });
