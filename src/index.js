console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded"), (e) => {
  fetch(imgUrl)
  .then(response => response.json())
  .then(results => {
      results.message.forEach(image => addImage(image))
    });
}

const addImage = (dogPicUrl) => {
  let container = document.querySelector('#dog-image-container');
  let newImageEl = document.createElement('img');
  newImage.src = dogPicUrl;
  container.appendChild(newImage);
  
}

const addBreed = (breed) => {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  ul.appendChild(li);
  li.addEventListener('click', updateColor);
}

const updateColour = (event) => {
  event.target.style.color = 'purple';
}