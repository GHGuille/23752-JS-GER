//DESAFIO 2 - Control de flujos

let nombre = prompt("Hola! me puedes decir tu nombre?")
let nacimiento = parseInt(prompt(nombre + " podrias darme el año en que naciste?"))

if(nacimiento>= 1930 && nacimiento <= 1948){
	alert(nombre + " eres parte de la generacion silenciosa" + " mira el console log para mas informacion")
	console.log("Viviste entre conflictos belicos. Te caracterizas por la austeridad")
}
else if(nacimiento>= 1949 && nacimiento <= 1968){
	alert(nombre + " eres parte de la generacion Baby Boom" + " mira el console log para mas informacion")
  	console.log("Viviste en una etapa de paz y explosion demografica. Te caracterizas por la ambicion")
}
else if(nacimiento>= 1969 && nacimiento <= 1980){
	alert(nombre + " eres parte de la generacion X" + " mira el console log para mas informacion")
  	console.log("Viviste la crisis del 73 y transicion española. Te caracterizas por una obsesion con el exito")
}
else if(nacimiento>= 1981 && nacimiento <= 1993){
	alert(nombre + " eres parte de la generacion Y, tambien conocida como Millenials" + " mira el console log para mas informacion")
  	console.log("Viviste el inicio de la era digital. Te caracterizas por la frustracion")
}
else if(nacimiento>= 1993 && nacimiento <= 2010){
	alert(nombre + " eres parte de la generacion Z" + " mira el console log para mas informacion")
  	console.log("Viviste la expansion de la internet. Te caracterizas por la irreverencia")
}
else{alert("Debes ser muy joven y tu generacion no esta detallada aun!")}