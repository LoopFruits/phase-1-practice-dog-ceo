console.log('%c HI', 'color: firebrick')

// %c is a fancy way of putting css in our console. 

// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


// document.addEventListener("DOMContentLoaded", function(){
//     let dogImageContainer = document.getElementById('dog-image-container')


// // we are adding elements to the DOM for each image in the array
// fetch(imgUrl)
// .then(response => response.json())
// .then(function(data){
//     let arrOfDogURLs = data.message
//     arrOfDogURLs.forEach(url => {
//         //dogImageContainer.innerHTML += makeImgTagString(url) // we can leave this uncommented
//         dogImageContainer.appendChild(makeImageTagElement(url))
//         })
//     })

// })

// function makeImageTagString(url){
//     return `<img src="${url}"/>`
// }

// function makeImageTagElement(url){
//     let imageTag = document.createElement("img")
//     imageTag.src = url 
//     return imageTag
// }




document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
  })
  
  const fetchImages = () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  
    fetch(imgUrl)
      .then(res => res.json()) // turning the image to json
      .then(results => {
        results.message.forEach(image => appendImageToDOM(image))
      })
  }
  
  const appendImageToDOM = (image) => {
    let container = document.querySelector('#dog-image-container')
    let newImage = document.createElement('img')
  
    newImage.src = image
    container.appendChild(newImage)
  }
  
  const fetchBreeds = () => { // challenge 2
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  
    fetch(breedUrl)
      .then(res => res.json())//getting the result and turning them to json
      .then(results => {
        let breeds = Object.keys(results.message)
        updateBreedList(breeds)
        
        // getting the dropdown challenge 4
        let breedDropdown = document.querySelector('#breed-dropdown')
            breedDropdown.addEventListener('change', function(e) { // using 'change' to get the dropdown menu to appear
          let filterValue = e.target.value
  
          let filteredBreeds = breeds.filter(breed => breed[0] === filterValue)
  
          updateBreedList(filteredBreeds)
        })
      })
  }
  
  const updateBreedList = (breeds) => {
    let ul = document.querySelector('#dog-breeds')
    ul.innerHTML = ''
  
    breeds.forEach(breed => appendBreedToDOM(breed))
  }
  
  const appendBreedToDOM = (breed) => {
    let ul = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
  
    li.innerText = breed
    ul.appendChild(li)
    li.addEventListener('click', updateBreedColor)
  }

  // changing the color of the dogs: challenge 3
  const updateBreedColor = (event) => {
    event.target.style.color = 'green'
  }