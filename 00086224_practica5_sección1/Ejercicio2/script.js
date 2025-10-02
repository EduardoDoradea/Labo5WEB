const carrito = {
    productos: [{
        nombre: "papel higienico",
        unidades: 4,
        precio: 5
    },
    {
        nombre: "chocolate",
        unidades: 2,
        precio: 1.5
    }],
    //metodo
    get precioTotal() {
        let precio = 0;
        for (let i = 0; i < this.productos.length; i++) { //recorrer el tamaño del objeto productos, es decir que como tiene 2 objetos los recorre
            //sacamos el precio final de los productos es decir 
            // que las unidades que lleva papel higienico por 4*5, 
            // mas chocolate 2 *1.5 y la suma de estos dos productos debe dar 23
            precio += this.productos[i].unidades * this.productos[i].precio;  
        }
        return precio;
    }
}

//Imprimiendo el resultado de el arreglo de los objetos de productos
console.log("La cantidad final que llevara en su carrito es de: " + carrito.precioTotal);