console.log('%c HI', 'color: firebrick')
let imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDog(){
    return fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => {
            renderDog(json)
        })
}

function renderDog(dogImg){
    const div = document.getElementById("dog-image-container")
    const imageLi = document.createElement("IMG")
    dogImg.message.forEach(doggo => {
        let li = document.createElement("li")
            li.id = "dog-image" 
            imageLi.src = doggo  
            li.appendChild(imageLi)     
            div.appendChild(li)
    })
}
// fetchs all dog breeds, and recive message hash to pass into a function as an argument.
function getDogs(){
    return fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            const breeds = Object.keys(json.message)
            listDogs(breeds)
        })
}

function listDogs(list){
    let ul = document.querySelector("#dog-breeds")
    list.forEach(breed => {
        let li = document.createElement("li") //create an "li" if for a application such as this for each element.
            li.setAttribute("id", "list-dogs")
            console.log(breed)
            li.innerText = breed  
            ul.appendChild(li) 
    })
    let dogColor = document.querySelectorAll("#list-dogs")
        dogColor.forEach(element => {
            element.addEventListener("click", function(event){
            event.preventDefault()
            element.style.color = "red"
            })
        })
}

function show(){
    let array = []
    let selector = document.querySelector("#breed-dropdown")
    let ulDog = document.querySelector("#dog-breeds")
    let allDogs = document.querySelectorAll("#list-dogs")
        selector.addEventListener("change", function(event){
            event.preventDefault()
            for(let el of ulDog.children){
                // debugger
                let inner = el.innerText
                // debugger
                if(inner.startsWith(event.target.value)){
                    // debugger
                    let li = document.createElement("li")
                        li.innerText = inner
                        array.push(li)
                        ulDog.appendChild(li)
                        // debugger
                }
                
                // for(let element of array){
                //     // debugger
                //     ulDog.appendChild(element)
                // }
            }
 
    })
}


document.addEventListener("DOMContentLoaded", function(){
    fetchDog(),
    getDogs(),
    show()
})



