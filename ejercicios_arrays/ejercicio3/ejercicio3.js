/*3. En base al resultado del ejercicio anterior
 agrupar en un array únicamente las
palabras que tengan mas de 3 letras. */
'use strict'

let phrase = 'La programación web es fundamental para el progreso';
let palabra = phrase.split(" ");
let threeletters = palabra.filter(palabra => palabra.length > 3);
alert(threeletters);