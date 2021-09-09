alert("Te invitamos a acceder a nuestro eccomerce.\n Tenemos una gran seleccion de productos.")
const  producto = prompt("Elegi entre estos productos: \n - Samsung A32 $ 2335. \n - Samsung A52 $ 3559. \n - Samsung A72 $ 4199. \n Los precios no incluyen IVA. \n El envio esta incluido en el precio.")
const iva   = x => x * 0.21;
const precioFinal = (celularPrecio, celularIva) => celularPrecio + celularIva
  
while(producto != ""){
   switch (producto.toUpperCase()) {
        case "A32":
        case "SAMSUNG A32":
          let samsungA32 = 2335 
          let ivaA32 = iva(samsungA32)
          alert("el precio final de tu equipo es "+"$"+ precioFinal(samsungA32, ivaA32))
          const envioA32 = prompt("Te lo podemos enviar sin cargo, \n ¿Quieres que te lo enviemos o lo retiras del local?")
          if(envioA32.toUpperCase() == "SI" || envioA32 == "quiero que me lo envien") {
            alert("Muchas gracias por tu compra en 48hs estaremos despachando tu pedido. Saludos")
            producto = ""
          } 
          else{
            alert("Gracias por tu compra, desde el proximo dia habil lo podras pasar a retirar en nuestra sucursal. \n Direccion: Calle Central 2598, BsAs. \n Telefono: 011-45678899")
            producto = ""
          }
          break
          case "A52":
          case "SAMSUNG A52":
          let samsungA52 = 3559 
          let ivaA52 = iva(samsungA52)
          alert("el precio final de tu equipo es "+"$"+ precioFinal(samsungA52, ivaA52))
          const envioA52 = prompt("Te lo podemos enviar sin cargo, \n ¿Quieres que te lo enviemos o lo retiras del local?")
          if(envioA52.toUpperCase() == "SI" || envioA52 == "quiero que me lo envien") {
            alert("Muchas gracias por tu compra en 48hs estaremos despachando tu pedido. Saludos")
            producto = ""
          } 
          else{
            alert("Gracias por tu compra, desde el proximo dia habil lo podras pasar a retirar en nuestra sucursal. \n Direccion: Calle Central 2598, BsAs. \n Telefono: 011-45678899")
            producto = ""
          }
          break
          case "A72":
          case "SAMSUNG A72":
          let samsungA72 = 4199 
          let ivaA72 = iva(samsungA72)
          alert("el precio final de tu equipo es "+"$"+ precioFinal(samsungA72, ivaA72))
          const envioA72 = prompt("Te lo podemos enviar sin cargo, \n ¿Quieres que te lo enviemos o lo retiras del local?")
          if(envioA72.toUpperCase() == "SI" || envioA72 == "quiero que me lo envien") {
            alert("Muchas gracias por tu compra en 48hs estaremos despachando tu pedido. Saludos")
            producto = ""
          } 
          else{
            alert("Gracias por tu compra, desde el proximo dia habil lo podras pasar a retirar en nuestra sucursal. \n Direccion: Calle Central 2598, BsAs. \n Telefono: 011-45678899")
            producto = ""
          }
          break
        default:
           alert("No tenemos ese producto")
           Producto = prompt("Elegi entre estos productos: \n - Samsung A32 $ 2335. \n - Samsung A52 $ 3559. \n - Samsung A72 $ 4199. \n Los precios no incluyen IVA. \n El envio esta incluido en el precio.")
          break
   }
}