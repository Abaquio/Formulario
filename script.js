
var aficionesIngresadas = [];
var contraseñaConfirmada = [];

function validarFormulario(){
    var return_email = validarEmail();
    var return_contraseña = validarContraseña();
 // var return_confirmContraseña = validarConfirmContraseña();
    var return_direccion = validarDireccion();
    var return_comuna = validarComuna();
    var return_telefono = validarTelefono();
    var return_lista = agregarAficion();
    var return_web = validarPaginaWeb();

    return return_email 
    && return_contraseña 
   // && return_confirmContraseña
    && return_direccion
    && return_comuna
    && return_telefono
    && return_lista
    && return_web
    
    ;
}

function validarEmail() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("emailError");
    var arroba = email.indexOf("@");
    var punto = email.lastIndexOf(".");

    if (arroba < 1) {
        div.innerText = "El correo electrónico no tiene @ (arroba) o nombre de usuario";
        div.className = "text-danger";
        return false;
    } else {
        if (arroba < 2) {
            div.innerText = "El nombre de usuario del correo no es válido";
            div.className = "text-danger";
            return false;
        } else {
            if (arroba + 3 > punto || punto + 1 >= email.length - 1 ) {
                div.innerText = "El nombre de dominio no es válido";
                div.className = "text-danger";
                return false;
            } else {
                div.innerText = "";
                return true;
            }
        }
    }
}


function validarContraseña() {
    var contraseña = document.getElementById("contraseña").value;
    var confirmContraseña = document.getElementById("confirmContraseña").value;
    var contraseñaError = document.getElementById("contraseñaError");
    var confirmContraseñaError = document.getElementById("confirmContraseñaError");
  
    if (contraseña === "") {
      contraseñaError.innerText = "Debe ingresar una contraseña";
      contraseñaError.className = "text-danger";
      return false;
    } else {
      var tieneDigito = /\d/.test(contraseña); 
      var tieneLetra = /[a-zA-Z]/.test(contraseña); 
  
      if (!tieneDigito || !tieneLetra) {
        contraseñaError.innerText = "La contraseña debe contener al menos un dígito y una letra";
        contraseñaError.className = "text-danger";
        return false;
      } else {
        contraseñaError.innerText = "";
        if (confirmContraseña === "") {
          confirmContraseñaError.innerText = "Debe confirmar la contraseña";
          confirmContraseñaError.className = "text-danger";
          return false;
        } else if (confirmContraseña !== contraseña) {
          confirmContraseñaError.innerText = "La confirmación de contraseña no coincide";
          confirmContraseñaError.className = "text-danger";
          return false;
        } else {
          confirmContraseñaError.innerText = "";
          return true;
        }
      }
    }
  }
  

function validarDireccion(){
    var direccion = document.getElementById("direccion").value;
    var direccionError = document.getElementById("direccionError");

    if (direccion == ""){
        direccionError.innerText = "La direccion no puede estar vacia"
        direccionError.className = "text-danger"
    } else {
        if (direccion.length > 40 ){
            direccionError.innerText = "La direccion no puede ser tan larga"
            direccionError.className = "text-danger"
            return false; 
        } else {
            direccionError.innerText = ""
            return true;
        }
    }

}

function validarComuna(){
    var comuna = document.getElementById("comuna").value;
    var comunaError = document.getElementById("comunaError");

    if (comuna == ""){
        comunaError.innerText = "Por favor seleccione una comuna";
        comunaError.className = "text-danger"
        return false;
    } else {
        comunaError.innerText = ""
        return true;
    }
}


function validarTelefono() {
    var telefono = document.getElementById("telefono").value;
    var telefonoError = document.getElementById("telefonoError");

    if (telefono === "") {
        telefonoError.innerText = "Debe ingresar un número de teléfono";
        telefonoError.className = "text-danger";
        return false;
    } else {
        if (telefono.length !== 9 || isNaN(telefono)) {
            telefonoError.innerText = "El número de teléfono debe tener 9 dígitos";
            telefonoError.className = "text-danger";
            return false;
        } else {
            telefonoError.innerText = "";
            return true;
        }
    }
}

function agregarAficion() {
    var aficion = document.getElementById("aficion").value.trim();
    var listaAficiones = document.getElementById("listaAficiones");

    // Verificar si la afición ya ha sido ingresada
    var aficionesExistentes = listaAficiones.getElementsByTagName("li");
    for (var i = 0; i < aficionesExistentes.length; i++) {
        if (aficion.toLowerCase() === aficionesExistentes[i].innerText.toLowerCase()) {
            return false;
        }
    }

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(aficion));
    listaAficiones.appendChild(li);
    document.getElementById("aficion").value = "";

    return true;
}



function validarPaginaWeb() {
    var paginaWeb = document.getElementById("paginaWeb").value;
    var paginaWebError = document.getElementById("paginaWebError");

    if (paginaWeb === "") {
        paginaWebError.innerText = "Debe ingresar su página web personal";
        paginaWebError.className = "text-danger";
        return false;
    } else {
        var urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/\S*)?$/;
        if (!urlPattern.test(paginaWeb)) {
            paginaWebError.innerText = "Ingrese una URL válida";
            paginaWebError.className = "text-danger";
            return false;
        } else {
            paginaWebError.innerText = "";
            return true;
        }
    }
}




