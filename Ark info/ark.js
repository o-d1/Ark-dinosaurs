//const findButton = document.getElementById("find-button");
//findButton.addEventListener("click", locatateDino)
const searchBar = document.getElementById("search")
searchBar.addEventListener('input', locateDinos)

const message = document.getElementById('message')

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
    dinos.forEach((dino) => {
        if (dino.name.startsWith(userInput)) {
            let dinoNames = dino.name
            let dinoTaming = dino.taming
            let dinoFood = dino.food
            console.log(` Name: ${dinoNames} \n Taming: ${dinoTaming} \n Food: ${dinoFood}`)
        }
    })
}






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