/*Separar por palabras y mostrar cuantas palabras tiene la 
siguiente frase:
let phrase = 'La programación web es fundamental para el progreso */
'use strict'
let phrase = 'La programación web es fundamental para el progreso';
let palabra = phrase.split(' ');
let palabraCount = palabra.length;

alert('La frase tiene ' + palabraCount + ' palabras.');