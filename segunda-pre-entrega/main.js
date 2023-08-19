class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }

  vender() {
    this.vendido = true;
  }
}

const productos = [];

productos.push(new Producto("utencilios", 230));
productos.push(new Producto("vajilla", 240));
productos.push(new Producto("ingrediente", 180));
productos.push(new Producto("condimentos", 220));
productos.push(new Producto("repisas", 190));

let nombre = prompt("Ingresa el nombre del  producto deseado");

while (nombre != "ESC") {
  let producto;

  for (const item of productos) {
    if (item.nombre === nombre) {
      producto = item;
    }
  }

  if (producto) {
    let mensaje = `
    nombre: ${producto.nombre}
    precio: ${producto.precio}
    `;

    alert(mensaje);
  } else {
    alert("El producto no se encuentra disponible");
  }

  nombre = prompt("Ingrese el nombre del producto deseado");
}
