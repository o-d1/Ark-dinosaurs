const searchBar = document.getElementById("search");
searchBar.addEventListener('input', locateDinos);

const message = document.getElementById('message');

const dinos = [
    {
        name: "pteranodon",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "raw prime meat, raw meat"
    }, 
    {
        name: "allosauros",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "raw prime meat, raw mutton, raw meat"
    }, 
    {
        name: "parasaur",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "mejoberrys"
    }, 
    {
        name: "ankylosaur",
        taming: "idk yet, give taming food",
        food: "meat"
    }, 
    {
        name: "phiomia",
        taming: "idk yet, give taming food",
        food: "berries"
    }, 
    {
        name: "carbonemys",
        taming: "Shoot with tnaquilizing darts or narcotic arrows, give taming food",
        food: ""
    }, 
    {
        name: "dodo",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "berries"
    },
    {
        name: "dilopasaur",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "raw meat, berries"
    },
    {
        name: "pelagonis",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "raw meat, raw prime meat"
    },
    {
        name: "argentavis",
        taming: "Shoot with tnaquilizing darts or narcotic arrows, give taming food",
        food: "raw meat, raw prime meat"
    },
    {
        name: "itchysauras",
        taming: "Go up to if and feed taming food",
        food: "raw meat, raw prime meat"
    },
    {
        name: "rex",
        taming: "Shoot with tnaquilizing darts or narcotic arrows, give taming food",
        food: "raw prime meat, raw meat"
    },
    {
        name: "raptor",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "raw prime meat, raw meat"
    },
    {
        name: "pachy",
        taming: "Bolas it, knock unconcious with bat, give taming food",
        food: "berries"
    }
]
/* let newDinos = []

function locateDinos () {
    let userInput = document.getElementById('search').value.toLowerCase();
    let newDinosName;
    // Adds to a new array with items that start with same letter(s) as the users input
    dinos.map(function newDinoList (dino) {
        if (dino.name.startsWith(userInput)) {
            newDinos.push(dino)
            newDinosName = dino.name
        }
        setTimeout (() => {
            newDinos = []
        }, 1)
    })
    console.log(newDinosName)
} */


function locateDinos () {
    let userInput = document.getElementById('search').value.toLowerCase();
    const dinoListDiv = document.getElementById('message');
    dinos.forEach((dino) => { // Goes througth each array and check if the name is the same as the user.
        if (dino.name.startsWith(userInput)) {
            const dinoElement = document.createElement('p'); // Creates a new p element in the html and then the content below is then added to it..
            dinoElement.textContent = (` Name: ${dino.name} --- Taming: ${dino.taming} --- Food: ${dino.food} `);
            dinoListDiv.appendChild(dinoElement); // [LEARN!!!!!!!!!!]
            //console.log(` Name: ${dinoNames} \n Taming: ${dinoTaming} \n Food: ${dinoFood}`);
        } 
        if (userInput !== userInput) {
            dinoElement.remove()
        } 
    })
}


/* const animals = ['Tyrannosaurus Rex', 'Velociraptor', 'Triceratops', 'Stegosaurus'];

const animalListDiv = document.getElementById('animalList');

animals.forEach(animal => {
    const animalElement = document.createElement('p');
    animalElement.textContent = animal;
    animalListDiv.appendChild(animalElement); // Append to the div, not overwrite
});  */



/*
function locatateDinos () {
    let userInput = document.getElementById('search').value.toLowerCase();
    dinos.filter((dino) => {
        if (dino.name.startsWith(userInput)) {
            let dinosaur = dino.name;
            console.log(dinosaur)
            document.getElementById('message').innerText = dinosaur
        }
    }
    )
} 


const searchBar = document.getElementById("search")
searchBar.addEventListener('input', (e) => {
    const value = e.target.value
    console.log(value)
    return 
})

function findDinos () {
    
}
*/