import products from './data.js';

document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById("product-container");
    const cartCounter = document.getElementById("cart-counter");
    let products = [];

    fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => {
            products = data;
            renderProducts();
        });

    function renderProducts() {
        productContainer.innerHTML = ""; // Limpiar el contenedor antes de renderizar los productos

        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("caja1");

            const productImage = document.createElement("div");
            productImage.classList.add("caja-img");
            const img = document.createElement("img");
            img.src = product.image;
            img.alt = product.name;
            productImage.appendChild(img);

            const productButton = document.createElement("a");
            productButton.href = "#"; // Enlace temporal
            productButton.classList.add("botonimagen1");
            productButton.textContent = "OBTENLO";
            productButton.addEventListener("click", addToCart);

            productCard.appendChild(productImage);
            productCard.appendChild(productButton);
            productContainer.appendChild(productCard);
        });
    }

    let cartCount = 0;

    function addToCart() {
        cartCount++;
        cartCounter.textContent = cartCount;
    }
});
