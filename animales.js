class Animal{
    constructor(id,nombre,madreId,padreId)
    {
        this.id = id
        this.nombre = nombre,
        this.madreId = madreId,
        this.padreId = padreId
    }
}

class RegistroDeAnimales{
    constructor(registroDeAnimal){
        this.registroDeAnimal = registroDeAnimal;
    }
    buscarAnimal(id){
        for (let index = 0; index < registroDeAnimal.length; index++) {
            const element = registroDeAnimal[index];
            if(element.id == id){
                return element
            }
        }
    }
    arbolHaciaAbajo(animal){
        let familia = [];
        let animalBuscado = this.buscarAnimal(animal.id);
        if(animalBuscado!=null){
            let madre = this.buscarAnimal(animalBuscado.madreId)
            let padre = this.buscarAnimal(animalBuscado.padreId)
            familia.push(madre)
            familia.push(padre)
        }
        return familia
    }
}

let animal = new Animal(1,"Juan",2,3)
let animal2 = new Animal(2,"Fiona",4,5)
let animal3 = new Animal(3,"Juan",6,7)

let registroDeAnimal = [];

let registro = new RegistroDeAnimales(registroDeAnimal)

registro.registroDeAnimal.push(animal)
registro.registroDeAnimal.push(animal2)
registro.registroDeAnimal.push(animal3)

let r = registro.arbolHaciaAbajo(animal)

console.log(JSON.stringify(r))