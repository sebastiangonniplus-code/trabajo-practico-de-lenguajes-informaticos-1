
const boton = document.getElementById("boton-modo-claro");

// Al abrir la página
if (localStorage.getItem("modo") === "claro") {
    document.body.classList.add("white-mode");
    boton.textContent = "🌙 Modo oscuro";
} else {
    boton.textContent = "🌞 Modo claro";
}

// Al hacer click
boton.addEventListener("click", () => {

    document.body.classList.toggle("white-mode");

    if (document.body.classList.contains("white-mode")) {
        localStorage.setItem("modo", "claro");
        boton.textContent = "🌙 Modo oscuro";
    } else {
        localStorage.setItem("modo", "oscuro");
        boton.textContent = "🌞 Modo claro";
    }

});

// ===== VALIDACIÓN DEL FORMULARIO DE CONTACTO =====
const form = document.getElementById("formContacto");

if (form) {
  const campos = {
    nombre: document.getElementById("nombre"),
    apellido: document.getElementById("apellido"),
    email: document.getElementById("email"),
    telefono: document.getElementById("telefono"),
    consulta: document.getElementById("consulta"),
  };

  const errores = {
    nombre: document.getElementById("errorNombre"),
    apellido: document.getElementById("errorApellido"),
    email: document.getElementById("errorEmail"),
    telefono: document.getElementById("errorTelefono"),
    consulta: document.getElementById("errorConsulta"),
  };

  const exito = document.getElementById("exito");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    for (const clave in errores) {
      errores[clave].textContent = "";
    }
    exito.textContent = "";

    let esValido = true;

    if (campos.nombre.value.trim() === "") {
      errores.nombre.textContent = "Ingresá tu nombre.";
      esValido = false;
    }
    
    if (campos.apellido.value.trim() === "") {
      errores.apellido.textContent = "Ingresá tu apellido.";
      esValido = false;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(campos.email.value.trim())) {
      errores.email.textContent = "Ingresá un email válido.";
      esValido = false;
    }

    const formatoTel = /^[0-9]{8,13}$/;
    if (!formatoTel.test(campos.telefono.value.trim())) {
      errores.telefono.textContent = "Ingresá solo números (entre 8 y 13 dígitos).";
      esValido = false;
    }

    if (campos.consulta.value.trim().length < 10) {
      errores.consulta.textContent = "La consulta debe tener al menos 10 caracteres.";
      esValido = false;
    }

    if (esValido) {
      exito.textContent = "¡Consulta enviada con éxito!";
      form.reset();
    }
  });
}