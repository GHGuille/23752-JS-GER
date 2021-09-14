class Celular{
   	constructor(modelo, memoria, ram, precio, stock) {
        this.modelo = modelo;
        this.memoria = memoria;
        this.ram = ram;
        this.precio = precio;
        this.stock = stock;
	}
	precioFinal(){
		let preciof = `El precio final de ${this.modelo} es de ${this.precio*1.21}`
		return preciof
	}

}
const samsungA32 = new Celular ("Samsung A32","128GB","4GB", 2339, 5)
const samsungA52 = new Celular ("Samsung A52","256GB","6GB", 3559, 10)
const samsungA72 = new Celular ("Samsung A72","256GB","8GB", 4119, 20)

alert("Te invitamos a acceder a nuestro eccomerce.\n Tenemos una gran seleccion de productos.")
let producto = prompt(`Elegi entre estos productos para saber su precio: \n 1 - Samsung A32. \n 2 - Samsung A52. \n 3 - Samsung A72.`)
while(producto != ""){
   switch (producto.toUpperCase()) {
        case "1":
        case "A32":
        case "SAMSUNG A32":
          alert(samsungA32.precioFinal())
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