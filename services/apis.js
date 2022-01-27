fetch('https://pokeapi.co/api/v2/pokemon')
.then(response => response.json())
.then(data => {
  data.results.forEach(element => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
    .then(response => response.json())
    .then(data => {
      const messages = document.querySelector(".messages");

      messages.innerHTML += `
        <div class="message">
          <figure>
            <img src="${data.sprites.front_default}" alt=""  class="image-person">
          </figure>

          <div class="message-content">
            <span>${data.name}<span>

            <p class="message-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      `
    })
  });
})
.catch(err => console.log(err));