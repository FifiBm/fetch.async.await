

async function start() {

    try{
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        const data = await response.json();
        
        createBreedList(data.message)
    } catch(error) {
        console.error(error);
    }
}

start();

// creating a function called createBreedList
// passing in breedList
 function createBreedList(breedList) {
   document.getElementById("breed").innerHTML = `
   <select onchange="loadByBreed(this.value)">
   <option>Choose a dog breed</option>
  ${Object.keys(breedList).map(function (breed) {
     return `<option> ${breed}</option>`
    }).join('')}
    </select>
   `
 }

 async function loadByBreed(breed) {
   try {
       if(breed !== "Choose a dog breed"){
           const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
           const data = await response.json()
           console.log(data);

           document.body.querySelector("dogImage").innerHTML = `<img src=`${data.message[0]}`> `;

       }
   } catch(error) {
    console.log(error);
   }
 }