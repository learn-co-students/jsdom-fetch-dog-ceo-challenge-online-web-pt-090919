console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const dogImageContainer = document.getElementById("dog-image-container");
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => console.log(json))
  dogImageContainer.appendChild(imgUrl)
  
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const dogBreeds = document.getElementById("dog-breeds")
  const li = document.createElement('li')
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => console.log(json))
  dogBreeds.appendChild(li)
  li.appendChild(breedUrl)
  
  li.addEventListener('click', (ev) {
    ev.target.color = "yellow";
  })
})


