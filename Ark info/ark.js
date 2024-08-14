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

/* let newDinos;

function locateDinos () {

    let userInput = document.getElementById('search').value.toLowerCase();

    newDinos = []

    const dinoListDiv = document.getElementById('message');

    dinos.map(function newDinoList (dino) {

        if (dino.name.startsWith(userInput)) {

            newDinos.push(dino.name)
            newDinos.push(dino.taming)
            newDinos.push(dino.food)

            const dinoElement = document.createElement('p');

            dinoElement.textContent = (`dinos are : ${newDinos}`);
            dinoListDiv.appendChild(dinoElement); 
            dinoListDiv.value = (`Dinos are ${newDinos}`)
        }
    })
    console.log(`Dinos are: \n ${newDinos.name} \n ${newDinos.taming} \n ${newDinos.food}`)
}  */


function locateDinos () {
    let newDinos = []
    let userInput = document.getElementById('search').value.toLowerCase();
    //const dinoListDiv = document.getElementById('message');
    dinos.forEach((dino) => { // Goes througth each array and check if the name is the same as the user.
        if (dino.name.startsWith(userInput)) {
            newDinos.push(dino.name)
        }
    })
    console.log(newDinos)
    newDinos.forEach( (name) => {
        let newElement = document.createElement('p');
        newElement.textContent = name;  // You can also use innerHTML here
        message.appendChild(newElement); 
    }); 
    newElement.remove('p')
}





/* names.forEach(name => {
    const nameElement = document.createElement('p');
    nameElement.textContent = name;  // You can also use innerHTML here
    nameList.appendChild(nameElement);
}); */



/* const dinoElement = document.createElement('p'); // Creates a new p element in the html and then the content below is then added to it..
dinoElement.textContent = (` Name: ${dino.name} --- Taming: ${dino.taming} --- Food: ${dino.food} `);
dinoListDiv.appendChild(dinoElement); // [LEARN!!!!!!!!!!]
console.log(` Name: ${dinoNames} \n Taming: ${dinoTaming} \n Food: ${dinoFood}`);
newDinos.push(dino.name)
newDinos.push(dino.taming)
newDinos.push(dino.food) */