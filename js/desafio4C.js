alert("Tambien los puedes llevar en 6 cuotas sin interes.");
const  producto = prompt("Elegi entre estos productos: \n - Samsung A32 $ 2335. \n - Samsung A52 $ 3559. \n - Samsung A72 $ 4199. \n Los precios no incluyen IVA. \n El envio esta incluido en el precio.");
const iva   = x => x * 0.21;
const precioFinal = (celularPrecio, celularIva) => celularPrecio + celularIva;
const cuotas = a => a / 6;
  
while(producto != ""){
   switch (producto.toUpperCase()) {
        case "A32":
        case "SAMSUNG A32":
          let samsungA32 = 2335 
          let ivaA32 = iva(samsungA32)
          let cuotaA32 = precioFinal(samsungA32, ivaA32)
          alert("el precio final de tu equipo es "+"$ "+ precioFinal(samsungA32, ivaA32))
          const cuotasA32 = prompt("Lo puedes pagar en 6 cuotas sin interes \n ¿Quieres pagarlo en cuotas o efectivo/debito")
          if(cuotasA32.toUpperCase() == "EN CUOTAS" || cuotasA32 == "En 6 cuotas"|| cuotasA32 == "lo quiero en cuotas") {
            alert("Bien, la cuota de tu equipo es de " +"$ "+ Math.ceil(cuotas(cuotaA32)))
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
          let cuotaA52 = precioFinal(samsungA52, ivaA52)
          alert("el precio final de tu equipo es "+"$ "+ precioFinal(samsungA52, ivaA52))
          const cuotasA52 = prompt("Lo puedes pagar en 6 cuotas sin interes \n ¿Quieres pagarlo en cuotas o efectivo/debito")
          if(cuotasA52.toUpperCase() == "EN CUOTAS" || cuotasA52 == "En 6 cuotas"|| cuotasA52 == "lo quiero en cuotas") {
            alert("Bien, la cuota de tu equipo es de " +"$ "+ Math.ceil(cuotas(cuotaA52)))
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
          let cuotaA72 = precioFinal(samsungA72, ivaA72)
          alert("el precio final de tu equipo es "+"$ "+ precioFinal(samsungA72, ivaA72))
          const cuotasA72 = prompt("Lo puedes pagar en 6 cuotas sin interes \n ¿Quieres pagarlo en cuotas o efectivo/debito")
          if(cuotasA72.toUpperCase() == "EN CUOTAS" || cuotasA72 == "En 6 cuotas"|| cuotasA72 == "lo quiero en cuotas") {
            alert("Bien, la cuota de tu equipo es de " +"$ "+ Math.ceil(cuotas(cuotaA72)))
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