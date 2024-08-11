
//const findButton = document.getElementById("find-button");
//findButton.addEventListener("click", locatateDino)
const searchBar = document.getElementById("search")
searchBar.addEventListener('input', locatateDinos)

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
    }]

function locatateDinos () {
    let userInput = document.getElementById('search').value.toLowerCase();
    document.getElementById('message').innerText = ("Congratulations you are a winner.")
    dinos.filter((dino) => {
        if (dino.name.startsWith(userInput)) {
            let dinosaur = dino.name;
            console.log(dinosaur)
        }
    })
    //console.log(filteredItems)
} 

/*
const searchBar = document.getElementById("search")
searchBar.addEventListener('input', (e) => {
    const value = e.target.value
    console.log(value)
    return 
})

function findDinos () {
    
}
*/