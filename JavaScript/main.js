//Modo oscuro

const boton = document.getElementById("btn-modo");

if (localStorage.getItem("btn-modo") === "oscuro") {
    document.body.classList.add("oscuro");
    boton.checked = true;
}

boton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");

    // Guardar la preferencia
    if (document.body.classList.contains("oscuro")) {
        localStorage.setItem("btn-modo", "oscuro");
    } else {
        localStorage.setItem("btn-modo", "root");
    }
});

//Validación de formulario

const formulario = document.getElementById("formulario");
const respuestaFormulario = document.getElementById("respuesta-formulario");
const resultadoHTML = document.getElementById("resultado-html");

if (formulario) {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            respuestaFormulario.textContent = "Error: completá todos los campos.";
            respuestaFormulario.className = "alert alert-danger mt-3";
            resultadoHTML.textContent = "Todavía no hay datos para mostrar.";
            return;
        }

        if (!email.includes("@")) {
            respuestaFormulario.textContent = "Error: ingresá un correo válido.";
            respuestaFormulario.className = "alert alert-danger mt-3";
            return;
        }

        respuestaFormulario.textContent = "Consulta enviada correctamente.";
        respuestaFormulario.className = "alert alert-success mt-3";

        resultadoHTML.innerHTML = `
            <p><strong>Nombre ingresado:</strong> ${nombre}</p>
            <p><strong>Correo ingresado:</strong> ${email}</p>
            <p><strong>Mensaje ingresado:</strong> ${mensaje}</p>
        `;
        formulario.reset();
    });
}