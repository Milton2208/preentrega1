// Creamos un arreglo para almacenar los productos que se agregan al carrito 
var carro = []; 



// Pedimos al usuario que elija un producto para agregarlo al carrito usando Prompt() 
var opcion = parseInt(prompt("Elija el número del producto que desea agregar al carrito")); 

// Simulamos la lista de productos disponibles 
var productosDisponibles = ["Manzanas", "Bananas", "Peras", "Uvas"]; 

// Creamos una función para agregar productos al carro
function agregarAlCarro(producto) { 
  carro.push(producto); 
  console.log(producto + " ha sido agregado al carrito"); 

} 


// Utilizamos un ciclo para mostrar los productos disponibles e imprimirlos en consola 
console.log("Productos disponibles:Manzanas,Bananas,Peras,uvas"); 
for(var i = "." ; i < productosDisponibles.length; i++) { 
  console.log(i + 1 + "." + productosDisponibles[i]); 
} 

// Verificamos si la opción elegida por el usuario es válida y la agregamos al carro si lo es 
if (opcion >= 1 && opcion <= productosDisponibles.length) { 
  var productoElegido = productosDisponibles[opcion - 1]; 
  agregarAlCarro(productoElegido); 
} else { 
  console.log("Opción inválida. Producto no encontrado."); 
} 

// Mostramos los elementos presentes en el carro después de todas las operaciones anteriores. 
console.log("Elementos actualmente presentes en el carro: ",carro)

agregarAlCarro();