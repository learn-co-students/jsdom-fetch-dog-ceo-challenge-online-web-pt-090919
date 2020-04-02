console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl).then( function(response) {
  return response.json()
  }).then( function(json) {
    json.message.forEach(image => {
      const dogImageContainer = document.createElement("img")
      dogImageContainer.src = `${image}`
      const dogImagePlacer = document.querySelector("#dog-image-container")
      dogImagePlacer.appendChild(dogImageContainer)
    })
})

fetch(breedUrl).then( function(response) {
  return response.json()
  }).then( function(json) {
    for (x in json.message) {
      if (json.message[x].length > 0 ) {
      const dogBreeds = document.getElementById("dog-breeds")
      const newDogBreeds = document.createElement("li")
      newDogBreeds.innerText += json.message[x]
      dogBreeds.appendChild(newDogBreeds)
      }
    }
})
