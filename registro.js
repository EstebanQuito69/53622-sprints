/***************
 * @fileoverview Archivo JS para manipular datos en un arreglo *
 * @version     1.0 *
 * @author      guzmanE
 *
 * ----
 * Cambios:
 * Version 1.0 Initial version
 * ----
 * 
 ***************/

// Declarar un arreglo global en donde se almacenen cada uno de los registros
let campos = [];
let registros = [];
//let passwFilter = [];
let btnAgregar;
let filtro;

window.onload = inicio;

function inicio() { 
    btnAgregar = document.getElementById('btn_agregar');
    btnAgregar.addEventListener("click", agregarRegistro); 
}

/**
 * agregaRegistro() Agrega un usuario al arreglo
 * Retorna NA
 * @param  {NA}
 * @return  {NA}
 */
function agregarRegistro() {
	campos.push(document.getElementById('in_usuario'));
    campos.push(document.getElementById('in_contrasena'));
	
    let registro = {
        usuario: campos[0].value, 
        contrasena: campos[1].value 
    };

    registros.push(registro);		
}

/**
 * filtrarPorContrasena() Filtra el arreglo de acuerdo al parametro --filtro
 * Retorna Array. Nuevo arreglo filtrado por el parametro --filtro
 * @param  {Array}
 * @return  {Array}
 */
function filtrarPorContrasena(arreglo, filtro) {
	const passwFilter = arreglo.filter(x => x.contrasena.length <= filtro);
	// Imprimir nuevo arreglo filtrado
    console.log(passwFilter);
    // Retornar arreglo filtrado
    return passwFilter;    
}

// Only for Codegrade
module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;

