const juegoSeleccionado = JuegosH.find(juego => juego.ID === "100001");

if (juegoSeleccionado) {
    document.getElementById("titulo").textContent = juegoSeleccionado.TituloEspañol;
    document.getElementById("ImagenContent").src = juegoSeleccionado.ImagenContent;
    document.getElementById("ImagenContent").alt = juegoSeleccionado.TituloEspañol;
    document.getElementById("descripcion").textContent = juegoSeleccionado.Descripcion;
    document.getElementById("autor").textContent = juegoSeleccionado.Autor;
    document.getElementById("motor").textContent = juegoSeleccionado.Motor
    document.getElementById("importante").textContent = juegoSeleccionado.importante;
    document.getElementById("contraseña").textContent = juegoSeleccionado.Contraseña;
    document.getElementById("enlacePC").href = juegoSeleccionado.EnlacePC;
    document.getElementById("enlaceAndroid").href = juegoSeleccionado.EnlaceAndroid;
    document.getElementById("tags").textContent = juegoSeleccionado.Tags.join(", ");
}