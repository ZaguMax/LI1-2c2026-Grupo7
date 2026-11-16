const boton = document.getElementById("btn-modo");

if (localStorage.getItem("btn-modo") === "oscuro") {
    document.body.classList.add("oscuro");
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