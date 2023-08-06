let hora = parseInt(prompt("Dime que hora es"));

if (hora >= 0 && hora <= 5) {
  alert("Dejame dormir");
} else if (hora >= 6 && hora <= 11) {
  alert("Buenos  días!!");
} else if (hora >= 12 && hora <= 18) {
  alert("Buenas tardes!!");
} else {
  alert("Buenas noches!!");
}

function miFuncion(numero) {
  if (numero < 10) {
    console.log("El número es menor que 10");
  } else {
    console.log("El número es mayor o igual a 10");
  }
}
miFuncion();
