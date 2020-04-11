// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', (e) => {
    fetchDog();
    fetchBreed();
})
    
    let imageContainer;
    let imgTag;
    let list;
    let listBreed;
    let dogs;
    let dropdown;

    function fetchDog(){
        fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => {
            return resp.json()
        })
        .then(json => {
            dog(json)
        })
    
        function dog(json) {
            imageContainer = document.querySelector('#dog-image-container')
            json.message.forEach(image_url => {
                imgTag = document.createElement('img');
                imgTag.setAttribute('src', `${image_url}`);
                imageContainer.appendChild(imgTag);
            });  
        }
    }   

    function fetchBreed() {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => {
            return resp.json();
        })
        .then(json => {
            renBreed(json); 
            filter();
        })

        list = document.querySelector('#dog-breeds');

        function renBreed(json) {
            let hash = json.message;
            let breedKeys = Object.keys(hash);

            breedKeys.forEach(breed => {
                list = document.querySelector('#dog-breeds');
                listBreed = document.createElement('li'); 
                listBreed.innerHTML = `<li>${breed}</li>`;
                list.appendChild(listBreed);

                listBreed.addEventListener('click', function() {
                    listBreed.style.color = 'red';
                });
            });       
        }
    
        function filter() {
            dropdown = document.querySelector('#breed-dropdown');
            dogs = list.querySelectorAll('li');
        
            dropdown = addEventListener('change', filtered);

            function filtered(event) {
                let choice = event.target.value;
                let i = 0;
                while(i < dogs.length) {
                    let filterList = dogs[i];
                    if (choice === "all") {
                        breeds(filterList);
                    } else if (filterList.textContent[0] === choice) {
                        breeds(filterList);
                    } else {
                        noBreeds(filterList);
                    }
                        i++;
               }
            
            function breeds(argument) {
                argument.style.display = 'block';
            }
            function noBreeds(argument) {
                argument.style.display = 'none';
            }
        }
    }
}

