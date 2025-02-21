window.onload = function () {
    const container = document.getElementById("mainBase_content");

    // Recorrer todos los juegos en JuegosH
    JuegosH.forEach(juego => {
        const divJuego = document.createElement("div");
        divJuego.classList.add("main_content");

        const TituloEspañol = document.createElement("h3");
        TituloEspañol.textContent = juego.TituloEspañol;
        divJuego.appendChild(TituloEspañol);

        const imagen = document.createElement("img");
        imagen.src = juego.Imagen;
        imagen.alt = juego.TituloEspañol;
        divJuego.appendChild(imagen);

        // Enlace a la dirección del juego
        divJuego.addEventListener("click", () => {
            window.open(juego.DireccionImagen, "_blank");
        });

        container.appendChild(divJuego);
    });
};
