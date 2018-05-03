'use strict';

//Archivo para funciones custom

const h = {}

//Se agrega la funcion al json helpers para que este disponible en cualquier archivo donde lo requieran
h.example = () => { return 'example' };

module.exports = h;