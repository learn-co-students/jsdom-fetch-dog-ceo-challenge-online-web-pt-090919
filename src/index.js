console.log('%c HI', 'color: firebrick')

function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
        renderDogs(json)
    })
  }

function renderDogs(json) {
    console.log(json.message);
    const main = document.getElementById('dog-image-container')
    json.message.forEach(dog => {
      const img = document.createElement('img')
      const p = document.createElement('p')
      img.setAttribute('src', dog)
      main.append(img)
      main.append(p)
    })
}

  document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
  })