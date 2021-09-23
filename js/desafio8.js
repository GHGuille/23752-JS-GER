const listadoCelulares = [

{id: "1901", modelo: "One Plus 9 PRO", memoria:"256GB" , ram:"12GB" , precio: 1069, stock: 20,},   			   
{id: "1902", modelo: "One Plus 9", memoria:"128GB" , ram:"8BG" , precio: 729, stock: 50,}, 				    
{id: "1803", modelo: "One Plus 8T", memoria:"128GB", ram:"8BG" , precio: 499, stock: 20,},
{id: "2004", modelo: "One Plus NORD 200G", memoria:"64GB" , ram:"6GB" , precio: 329, stock: 0,},

]

class Producto{
   	constructor(id, modelo, memoria, ram, precio, stock) {
   		this.id = id;
        this.modelo = modelo;
        this.memoria = memoria;
        this.ram = ram;
        this.precio = precio;
        this.stock = stock;
	}

	
}

const carrito = []

console.log(listadoCelulares)
const OPN10 = {id:"1001", modelo: "One Plus NORD 10G", memoria:"64GB", ram:"4GB", precio: 299, stock: 10,}
listadoCelulares.push(OPN10)

console.log(listadoCelulares)

alert("Te invitamos a acceder a nuestra tienda local de productos ONE PLUS.\n Tenemos una gran seleccion de productos.")
let producto = prompt(`Elegi entre estos productos para saber su precio: \n ${listadoCelulares[0].id} - ${listadoCelulares[0].modelo} \n ${listadoCelulares[1].id} - ${listadoCelulares[1].modelo} \n ${listadoCelulares[2].id} - ${listadoCelulares[2].modelo} \n ${listadoCelulares[3].id} - ${listadoCelulares[3].modelo} \n ${listadoCelulares[4].id} - ${listadoCelulares[4].modelo}`)

switch (producto.toUpperCase()) {
		        case "1901":
		        case "One Plus 9 PRO":
		          productoElegido("1901")  
		        break
		        case "1902":
		        case "One Plus 9":
		          productoElegido("1902")  
		        break
		        case "1803":
		        case "One Plus 8T":
		          productoElegido("1803")  
		        break
		        case "2004":
		        case "One Plus NORD 200G":
		          productoElegido("2004")  
		        break
		        case "1001":
		        case "One Plus NORD 10G":
		          productoElegido("1001")  
		        break
		        default:
          			alert("No tenemos ese producto")
           			producto = prompt(`Elegi entre estos productos para saber su precio: \n ${listadoCelulares[0].id} - ${listadoCelulares[0].modelo} \n ${listadoCelulares[1].id} - ${listadoCelulares[1].modelo} \n ${listadoCelulares[2].id} - ${listadoCelulares[2].modelo} \n ${listadoCelulares[3].id} - ${listadoCelulares[3].modelo} \n ${listadoCelulares[4].id} - ${listadoCelulares[4].modelo}`)
        		break
}



function productoElegido (modeloCelular){
    let productoElegido = listadoCelulares.find(celular => celular.id == modeloCelular)
    if(productoElegido){
        carrito.push(productoElegido)
    }else{
        alert("No contamos con ese producto")
    }
} 

console.log(carrito)

if(carrito != []){
	
	for (const producto of carrito){
		const compraRealizada = document.getElementById("compraRealizada")
		compraRealizada.innerHTML += `<p>Has realizada la siguiente compra</p>
		<p>  Producto: ${producto.modelo}</p>
		<p>  Memoria: ${producto.memoria}</p>
		<p>  Ram: ${producto.ram}</p>
		<b> $ ${producto.precio}</b>`;
	}
}
