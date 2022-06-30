/*
var cantidad, precio, desc, compra,pagar;

precio = parseFloat(prompt("Ingresar Precio"));
cantidad = parseFloat(prompt("Ingresar cantidad"));

compra = precio * cantidad;
desc = compra*0.15;
pagar = compra-desc;

alert("El descuento es: "+desc);
alert("El total a pagar es: "+pagar);
*/

class Producto{
    constructor(nombre,cantidad,precio){

        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = parseFloat(precio);
        this.disponible = true;
        
    }

    suma(){
        this.precio = this.precio * this.cantidad;
    }
    vender(){
        this.disponible = false;
    }


}

const arrayProductos = [];
    
do{
    const  aceptacion = prompt('Ingrese el nombre del producto o Listo para terminar de agregar');
    if(aceptacion ==="listo" || aceptacion === Listo){
      break; 
    }else{
        nombreP = aceptacion;
        const precioP = prompt('Ingrese precio del producto');
        const cantidadP = prompt('Ingrese cantidad del producto a comprar');
        arrayProductos.push(new Producto(nombreP, cantidadP, precioP));

    }
}

while (aceptacion != listo || aceptacion != Listo)

console.log(arrayProductos);

for ( const producto of arrayProductos){
    document.write("el producto ingresado es: "+ producto.nombre);
    document.write("la cantidad en stock del producto ingresado es: " + producto.cantidad);
    document.write("el precio del producto es: " + producto.suma());

    console.log(producto.nombre);
    console.log(producto.cantidad);
    console.log(producto.suma());

} 