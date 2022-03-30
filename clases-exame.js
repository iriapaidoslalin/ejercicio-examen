class Animal{
    especie;
    alimentacion;
    #desplazamiento;
    #reproduccion;

    constructor(especie,alimentacion,desplazamiento, reproduccion){
        this.especie =especie;
        this.alimentacion =alimentacion;
        this.#desplazamiento =desplazamiento;
        this.#reproduccion =reproduccion;

    }

    set setDesplazamiento (desplazamiento){
        this.#desplazamiento=desplazamiento;
    }

    get getDesplazamiento(){
        return `El animal se mueve a ${this.#desplazamiento}`
    }

    set setReproduccion (reproduccion){
        this.#reproduccion=reproduccion;
    }

    get getReproduccion(){
        return `El animal tiene el tipo de reproducción ${this.#reproduccion}`
    }

}

class Gato extends Animal{
    #pelaje;
    #sexo;

    constructor(especie,alimentacion,desplazamiento,reproduccion,pelaje,sexo){
        super(especie,alimentacion,desplazamiento,reproduccion);
        this.#pelaje=pelaje;
        this.#sexo=sexo;
    }

    set setPelaje(pelaje){
        this.#pelaje=pelaje;
    }

    get getPelaje(){
        return `El tipo de pelaje es ${this.#pelaje}`
    }

    set setSexo(sexo){
        this.#sexo=sexo;
    }

    get getSexo(){
        return `El sexo del gato es ${this.#sexo}`
    }
}

class Perro extends Animal{
    #tamaño;
    #raza;

    constructor(especie,alimentacion,desplazamiento,reproduccion,tamaño,raza){
        super(especie,alimentacion,desplazamiento,reproduccion);
        this.#tamaño=tamaño;
        this.#raza=raza;
    }

    set setTamaño(tamaño){
        this.#tamaño=tamaño;
    }

    get getTamaño(){
        return `El tipo de tamaño es ${this.#tamaño}`
    }

    set setRaza(raza){
        this.#raza=raza;
    }

    get getRaza(){
        return `El raza del gato es ${this.#raza}`
    }
}

const animalito= new Animal('vaca','herbívoro','cuadrúpedo','mamífero')
console.table(animalito);