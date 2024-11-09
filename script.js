document.addEventListener("DOMContentLoaded", function() {
    console.log("Página completamente cargada. Iniciando script...");

    // Inicializa EmailJS con tu Public Key (User ID)
    emailjs.init("Rd49ckEW23EpcRPNC"); // Public Key de EmailJS

    // Reproducir el audio de fondo automáticamente al cargar la página
    const audio = document.getElementById('background-audio');
    audio.play().catch(error => {
        console.log("Error al intentar reproducir el audio:", error);
    });

    // Función que muestra el campo de texto para escribir el deseo
    document.getElementById("wish-button").addEventListener("click", function() {
        document.getElementById("wish-input-container").style.display = "block";
        this.style.display = "none";  // Ocultar el botón de "Pide un deseo"
    });

    // Función para enviar el deseo
    window.submitWish = function() {
        const wishText = document.getElementById("wish-input").value;
        if (wishText.trim() !== "") {
            // Enviar el deseo a través de EmailJS
            emailjs.send("service_pr95j7p", "template_789shhs", {
                to_name: "Luciana",
                from_name: "Amigos",
                message: `Un deseo de cumpleaños: ${wishText}`
            }).then(function(response) {
                console.log("Correo enviado con éxito", response.status, response.text);
            }).catch(function(error) {
                console.log("Error al enviar el correo", error);
            });

            // Mostrar el mensaje de confirmación
            document.getElementById("wish-message").style.display = "block";
            document.getElementById("wish-input-container").style.display = "none";
        } else {
            alert("Por favor, escribe un deseo antes de enviarlo.");
        }
    };
});
