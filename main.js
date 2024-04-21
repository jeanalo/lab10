import { cargarInformacion } from './utils.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const productos = await cargarInformacion();
        const productosContainer = document.getElementById('product-container');
        const cartCounter = document.getElementById('cart-counter');
        let contadorProductos = 0;

        productos.forEach(producto => {
            const productoCard = document.createElement('div');
            productoCard.classList.add('caja1');

            const imagen = new Image();
            imagen.src = producto.image;
            imagen.alt = producto.name;

            const botonAgregar = document.createElement('button');
            botonAgregar.textContent = 'Agregar al Carrito';
            botonAgregar.classList.add('agregar-carrito'); // Agregar clase para identificar los botones

            botonAgregar.addEventListener('click', () => {
                contadorProductos++;
                cartCounter.textContent = `Productos en el carrito: ${contadorProductos}`;
            });

            const cajaImg = document.createElement('div');
            cajaImg.classList.add('caja-img');
            cajaImg.appendChild(imagen);

            productoCard.appendChild(cajaImg);
            productoCard.appendChild(botonAgregar);

            productosContainer.appendChild(productoCard);
        });
    } catch (error) {
        console.error('Error al cargar la información:', error);
    }
});

export const cargarInformacion = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
};
