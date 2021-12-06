const formaingresar = document.getElementById("formaingresar");

formaingresar.addEventListener('submit', (e) => {
    e.preventDefault();
    let correo = formaingresar['correo'].value;
    let contrasena = formaingresar['contrasena'].value;

    auth.signInWithEmailAndPassword(correo, contrasena).then(() => {
        formaingresar.reset();
        formaingresar.querySelector('.error').innerHTML = '';
        //  window.location="home.html";
    }).catch(err => {
        formaingresar.querySelector('.error').innerHTML = messageError(err.code);
    });
});

function messageError(codigo) {
    let message = '';
    switch (codigo) {
        case 'auth/wrong-password':
            message = "Contraseña Incorrecta";
            break;
        case 'auth/user-not-found':
            message = "Usuario no encontrado";
            break;
        case 'auth/weak-password':
            message = "Contraseña débil";
            break;
        default:
            message = "Hubo un error";
    }
    return message;
}