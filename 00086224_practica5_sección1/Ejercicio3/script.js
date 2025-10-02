const estanteria = {
    libros: [{
        nombre: "El caballero oscuro",
        autor: "Frank Miller",
        leido: false
    },
    {
        nombre: "El mundo amarillo",
        autor: "Albert Espinosa",
        leido: false,
    },
    {
        nombre: "Harry Potter y el caliz de fuego",
        autor: "Albert J.K. Rowling",
        leido: true,
    },
    {
        nombre: "El ingenioso hidalgo Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        leido: false,
    },
    {
        nombre: "Berserk",
        autor: "Kentaro Miura",
        leido: true,
    },
    {
        nombre: "Iliada",
        autor: "Homero",
        leido: false
    }],
    log() {
        const { libros } = this;
        let resultado = '';
        for (const libro of libros) {
            const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
            resultado = `${resultado}
            ${prefijo} leído ${libro.nombre} de ${libro.autor}`
        }
        console.log(resultado);
    },
    sugerencia() {
        const librosNoLeidos = this.libros.filter(libro => !libro.leido);
        const indiceRandom = Math.floor(librosNoLeidos.length * Math.random());
        const elementoRandom = librosNoLeidos[indiceRandom];
        console.log(`Te sugieron ${elementoRandom.nombre} de ${elementoRandom.autor}`);
    }
}

/* Lo que nos debe devolver sera los libros que se han leido con el mensaje que se definio en la funcion
ya que el ternario lo que hace es verifica el booleano si es verdadero ya lo leiste si no no lo has leido,
y ahi empieza a realizar los mensajes al usuario*/
estanteria.log();


/*Se realizo un metodo random, donde los libros que no han sido leido es decir los que tienen false en su apartado
entonces tomara un elemento del arreglo de objetos y te mostrara un mensaje que debes leerlo*/
estanteria.sugerencia();
estanteria.sugerencia();