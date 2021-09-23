const listadoCelulares = [{id: 1901, modelo: "One Plus 9 PRO", memoria:"256GB" , ram:"12GB" , precio: 1069, stock: 20,},
						  {id: 1902, modelo: "One Plus 9", memoria:"128GB" , ram:"8BG" , precio: 729, stock: 50,},
						  {id: 1803, modelo: "One Plus 8T", memoria:"128GB", ram:"8BG" , precio: 499, stock: 20,},
						  {id: 2004, modelo: "One Plus NORD 200G", memoria:"64GB" , ram:"6GB" , precio: 329, stock: 0,},
]
class Producto{
   	constructor(celular) {
   		this.id = celular.id;
        this.modelo = celular.modelo;
        this.memoria = celular.memoria;
        this.ram = celular.ram;
        this.precio = celular.precio;
        this.stock = celular.stock;
	}

	precioFinal(){
		let preciof = `El precio final de ${this.modelo} es de ${this.precio*1.21}`
		return preciof
	}
}

const OPN10 = new Producto({modelo: "OPNORD10", memoria:"64GB" , ram:"4GB" , precio: 299, id:1001 , stock: 10,})
listadoCelulares.push(OPN10)

console.log(listadoCelulares)

alert("Te invitamos a acceder a nuestro eccomerce.\n Tenemos una gran seleccion de productos.")
let producto = prompt(`Elegi entre estos productos para saber su precio: \n 1901 - One Plus 9 PRO. \n 1902 - One Plus 9. \n 1803 - One Plus 8T. \n 2004 - One Plus NORD 200. \n 1001 - One Plus NORD 10G`)

const carrito = []

const productoElegido = (modeloCelular) =>{
     
        let productoElegido = listadoCelulares.find(celular => celular.id == modeloCelular )
        if(productoElegido){
        	alert(`Has elegido el ${celular.modelo}`)
            carrito.push(productoElegido)
            console.log(carrito)
        }else{
            alert("No contamos con ese producto")
        }
} 

while(producto != ""){
   switch (producto.toUpperCase()) {
        case "1901":
        case "OP9PRO":
        case "OP 9 PRO":
          productoElegido("1901")
          alert("1901".precioFinal())
          producto = ""  
        break
        case "2":
        case "A52":
        case "SAMSUNG A52":
          alert(samsungA52.precioFinal())  
          producto = ""
        break
        case "3":
        case "A72":
        case "SAMSUNG A72":
          alert(samsungA32.precioFinal())
          producto = ""  
        break
        default:
           alert("No tenemos ese producto")
           Producto = prompt(`Elegi entre estos productos para saber su precio: \n 1 - Samsung A32. \n 2 - Samsung A52. \n 3 - Samsung A72.`)
        break
   }
}


/*const buscarTipo = (tipoProducto)=>{

    const busqueda = tienda.filter(producto => producto.tipo === tipoProducto)
    console.log(busqueda)
}
buscarTipo("lácteos")*/