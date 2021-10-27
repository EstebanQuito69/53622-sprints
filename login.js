let registros = []
function agregarRegistro(){
    let registro = {
        usuario: campos[0].value,
        contrasena: campos[1].value

    };
    registros.push(registro);
    console.log(registros);
    borrarCampos();
    filtrarPorContrasena(registros, pFiltro);
    
}
function validar_captcha(rcaptcha){
    if (rcaptcha == 5){
        return true;
    }
    else {
        return false;
    }
}
function iniciar_sesion(usuario, contrasena, rcaptcha){
    for (i = 0; i< registros.length; i++){
        if (registros[i].usuario === usuario && registros[i].contrasena === contrasena && validar_captcha(rcaptcha)=== true){
            return true;
        }else{
            return false;
        }
    }
}
module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;
