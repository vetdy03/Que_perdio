document.addEventListener("DOMContentLoaded", () => {
  fetch("features.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("featuresContainer");

      data.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "cardFeatures";
        card.innerHTML = `
          <span class="${item.icon}"></span>
          <h4>${item.titulo}</h4>
          <p>${item.descripcion}</p>
          <a href="#">Learn More</a>
        `;

        container.appendChild(card);

        // Agregar animación con pequeño delay para cada tarjeta
        setTimeout(() => {
          card.classList.add("show");
        }, index * 100); // 100ms entre cada tarjeta
      });
    })
    .catch((error) => console.error("Error cargando features.json:", error));
});