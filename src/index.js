console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    fetchBooks()
});

function fetchBooks() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
      renderBooks(json);
    });
};

function renderBooks(json) {
    const body = document.querySelector('body')
    json["message"].forEach(element => {
        let img = document.createElement('img')
        img.src = `${element}`
        body.appendChild(img)
    });
};