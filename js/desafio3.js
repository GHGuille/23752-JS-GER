//DESAFIO 3 - Ciclos

let nombre = prompt("Hola! me puedes decir tu nombre?")
let nacimiento = parseInt(prompt(nombre + " podrias darme el año en que naciste?"))
let lasDecadas = 10
let año = nacimiento + 10

for(let i=0; i<=10; i++){
	console.log(nombre + " tus " + lasDecadas + " años los cumpliste en " + año);
	lasDecadas += 10;
	año += 10;
	if(año >= 2021){
		break;
	}
	
}
alert("Ahora te invitamos a acceder a nuestro eccomerce.\n Tenemos una gran seleccion de productos.")
let  producto = prompt("Elegi entre estos productos: \n - Portatiles. \n - Celulares. \n - Auriculares. \n - Relojes.")
const  ticket = "Gracias por tu compra. \n Vuelve pronto." 

while(producto != ""){
   switch (producto.toUpperCase()) {
        case "PORTATILES":
            const tamanio = parseInt(prompt("Que tamaño de pantalla deseas? \n - 14 \n - 15 \n - 17"))
            if(tamanio == 15){
              alert(ticket)
              producto = ""
            }
            else{
            const otroTamanio = prompt("Lo siento, solo nos quedan de 15 pulgadas. \n Te sirve?")
            	if(otroTamanio.toUpperCase() != "SI"){
                alert("Lo sentimos, esperamos que nos ingresen y te avisamos. Saludos")
                producto = ""
              	}
              	else{
                alert(ticket)
                producto = ""
              	}
            }
            break
        case "CELULARES":
            const memoria = parseInt(prompt("Cuanta memoria buscas? \n - 64 \n - 128 \n - 256"))
            if(memoria == 64){
              alert(ticket)
              producto = ""
            }
            else{
            const otraMemoria = prompt("Lo siento, solo nos quedan de 64GB pulgadas. \n Te sirve?")
            	if(otraMemoria.toUpperCase() != "SI"){
                alert("Lo sentimos, esperamos que nos ingresen y te avisamos. Saludos")
                producto = ""
              }else{
                alert(ticket)
                producto = ""
              }
            }
            break
            case "AURICULARES":
            const tipo = prompt("Cuanta memoria buscas? \n - In-Ear \n - Over-Ear \n - On-Ear")
            if(tipo == "In-Ear"){
              alert(ticket)
              producto = ""
            }
            else{
            const otroTipo = prompt("Lo siento, solo nos quedan Over-Ear pulgadas. \n Te sirve?")
            	if(otroTipo.toUpperCase() != "SI"){
                alert("Lo sentimos, esperamos que nos ingresen y te avisamos. Saludos")
                producto = ""
              }else{
                alert(ticket)
                producto = ""
              }
            }
            break
            case "RELOJES":
            const formato = prompt("Que formato estas buscando? \n - Analogico \n - Smartwatch")
            if(formato == "Smartwatch"){
              alert(ticket)
              producto = ""
            }
            else{
            const otroFormato = prompt("Lo siento, solo nos quedan Analogicos pulgadas. \n Te sirve?")
            	if(otroFormato.toUpperCase() != "SI"){
                alert("Lo sentimos, esperamos que nos ingresen y te avisamos. Saludos")
                producto = ""
              }else{
                alert(ticket)
                producto = ""
              }
            }
            break
        default:
           alert("No tenemos ese producto")
           Producto = prompt("Elegi entre estos productos: \n - Portatiles. \n - Celulares. \n - Auriculares. \n - Relojes.")
          break
   }
}