/*1. Ingresar un nombre con promp y verificar si el nombre ingresado se encuentra en el
vector
let students = ["Juan","Jose","Pedro","Maria","Alejandra"];
//Mostrar en un alert: "Si se encuentra" o "No se encuentra"
 */
'use strict'
let students = ["Juan","Jose","Pedro","Maria","Alejandra"];
let nombre = prompt("Ingrese un nombre:");

if (students.includes(nombre)) {
  alert("El nombre se encuentra en el vector.");
} else {
  alert("El nombre no se encuentra en el vector.");
}