console.log('%c HI', 'color: firebrick')

function getImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
}

function renderImages(json){
    let imgBox = document.querySelector("div#dog-image-container");
    json.message.forEach(image_url => {
        imgTag = document.createElement("img");
        imgTag.setAttribute("src", `${image_url}`);
        imgBox.appendChild(imgTag);
    });
}

document.addEventListener("DOMContentLoaded", (e) => {
    getImages();
});