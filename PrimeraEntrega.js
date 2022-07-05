

class Producto{
    constructor(id, nombre,cantidad,precio){

        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = parseFloat(precio);
    }
}

const producto1 = new Producto(1,"coca 2.25", 2,300)
const producto2 = new Producto(2,"hamburguesa", 3,180)
const producto3 = new Producto(3,"arroz", 1, 90)

const producto = [producto1, producto2, producto3]

/*
producto.forEach(producto =>  {
    console.table(producto)
} 
    )
*/

const precioTotal = () => {
    const suma = producto.reduce((suma, p)=>suma + (p.precio * p.cantidad), 0);
    return `Total: ${suma}`
}
console.table(producto)
console.table(precioTotal());