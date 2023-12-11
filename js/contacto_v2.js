function validar(){
    let nombreInput = document.getElementById('nombre').value;
    let celuInput = document.getElementById('celular').value;
    let mailInput = document.getElementById('email').value;
    let comentarioInput = document.getElementById('comentarios').value;
    let nombreValido=validarNombre(nombreInput);
    let celuValido=validarCelu(celuInput);
    let mailValido=validarMail(mailInput);
    let comentarioValido=validarComentarios(comentarioInput);
    if (nombreValido && celuValido && mailValido && comentarioValido){
        alert("Gracias por consulta / comentario. Los datos fueron enviados")
    }
}
function validarNombre(nombre){
    if (nombre.length <2 && !esNombreValido(nombre)) { 
        alert("El campo 'Nombre' no es valido");
        return false;
    }
    return true;
}
const esNombreValido = (nombre) => {
    const re = /^[a-zA-Z]$/;
    return re.test(nombre.trim())
}
function validarCelu(celu){
    if (celu.length < 4) {
        alert("Completa el campo Nro.Celular");
        return false;
    }
    if (!esCelularValido(celu)) {
        alert("El celular no es válido!");
        return false;
    }
    return true;
}
const esCelularValido = (celu) => {
    const re = /[0-9]/;
    return re.test(celu.trim())
}
function validarMail(mail){
    if (mail == 0 || !esMailValido(mail)) {
        alert("El Email no es válido!");
        return false;
    }
    return true;
}
const esMailValido = (mail) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return re.test(mail.trim())
}
function validarComentarios(comentario){
    if (comentario.length >= 0 && comentario.length < 15) { 
        alert("El campo 'Comentarios' no debe estar vacio y debe tener mas de 15 caracteres");
        return false;
    }
    return true;
}