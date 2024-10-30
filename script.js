document.addEventListener('DOMContentLoaded', () => {
    const carrito = {};
    const contadorCarrito = document.getElementById('contador-carrito');
    const productosCarrito = document.getElementById('productos-carrito');
    const carritoCheckoutSection = document.getElementById('carrito-checkout');
    const checkoutForm = document.getElementById('checkout-form');
    const linkCarrito = document.getElementById('link-carrito');
    const seguirComprandoBtn = document.getElementById('seguir-comprando');
    const totalCompra = document.getElementById('total-compra');
    const buscador = document.getElementById('buscador');
    const filtroCategoria = document.getElementById('filtro-categoria');
    const filtroPrecio = document.getElementById('filtro-precio');
    const productosFiltrados = document.getElementById('productos-filtrados');

    // Productos disponibles
    const productos = {
        gorras: [
            { nombre: "Nike Sportswear", precio: 29990, descripcion: "Beanie Unisex. Calidez, comodidad y estilo.", imagen: "image/Nike Sportswear, Beanie Unisex.png" },
            { nombre: "Jordan Essentials", precio: 26990, descripcion: "Beanie Unisex. El tejido Knit se siente suave y cálido.", imagen: "image/Jordan Essentials, Beanie Unisex (2).png" },
            { nombre: "Nike Sport Essentials", precio: 26990, descripcion: "Gorro Unisex Dri-Fit ADV. Tela avanzada que absorbe el sudor para ayudarte a mantener la frescura.", imagen: "image/Nike Sport Essentials, Gorro Unisex Dri-Fit ADV.png" },
            { nombre: "Nike Dri-FIT Club", precio: 26990, descripcion: "Gorro Tn Air Max desestructurado.", imagen: "image/Nike Dri-FIT Club, Gorro Tn Air Max desestructurado.png" },
            { nombre: "Jordan Flight MVP Pro", precio: 29990, descripcion: "Gorra estructurada. Comodidad y una visera plana para verse bien.", imagen: "image/Jordan Flight MVP Pro.png" },
            { nombre: "Jordan Rise", precio: 26990, descripcion: "Gorra estructurada. Profundidad alta para darte un ajuste espacioso y moderno.", imagen: "image/Jordan Rise.png" },
            { nombre: "Nike Apex", precio: 32990, descripcion: "Gorro reversible. Te permite cambiar tu estilo en cualquier momento.", imagen: "image/Nike Apex.png" },
            { nombre: "Jordan Fly", precio: 26990, descripcion: "Gorra estructurada.", imagen: "image/Jordan Fly.png" },
            { nombre: "Nike Club", precio: 23990, descripcion: "Gorro Swoosh desestructurada. Lleva el estilo informal a cualquier atuendo con nuestra gorra Nike Club.", imagen: "image/Nike Club Gorro Swoosh desestructurada.png" },
            { nombre: "Nike Sportswear Club", precio: 24990, descripcion: "Gorro Unisex Dri-Fit. Mejora tu estilo Swoosh con este mid-Cap de club desestructurado y profundo.", imagen: "image/Nike Sportswear Club, Gorro Unisex Dri-Fit.png" },
            { nombre: "Nike Sport Essentials", precio: 26990, descripcion: "Gorro Unisex Dri-Fit ADV. Ponte en marcha con la gorra Nike Fly hagas lo que hagas.", imagen: "image/Nike Sport Essentials, Gorro Unisex Dri-Fit ADV 1.png" },
            { nombre: "Nike Dri-FIT Rise", precio: 24990, descripcion: "Gorro estructurado con cierre a presión. Diseñada para el gimnasio, el trabajo y cualquier otro lugar.", imagen: "image/Nike Dri-FIT Rise, Gorro estructurado con cierre a presión.png" }
        ],
        zapatillas: [
            { nombre: "Air Jordan 1 High Method of Make", precio: 156990, descripcion: "Zapatillas para Mujer. Tu estilo es icónico y tu gusto es de primer nivel.", imagen: "image/Air Jordan 1 High Method of Make.png" },
            { nombre: "Air Jordan 1 Retro High OG", precio: 151990, descripcion: "Zapatillas para Hombre. Renueva el calzado clásico, y te ofrece un nuevo look con una sensación familiar.", imagen: "image/Air Jordan 1 Retro High OG.png" },
            { nombre: "Air Jordan 1 Mid", precio: 112990, descripcion: "Zapatillas para Niños. Ofrecen un soporte máximo y celebran al calzado que lo inició todo.", imagen: "image/Air Jordan 1 Mid .png" },
            { nombre: "Jordan Stadium 90", precio: 146990, descripcion: "Zapatillas para Hombre. La comodidad es lo más importante, pero eso no significa que debas sacrificar el estilo.", imagen: "image/Jordan Stadium 90.png" },
            { nombre: "Nike City Classic Boot PMR", precio: 156990, descripcion: "Botas para Mujer. Las condiciones del tiempo ya no son una excusa: estas botas pueden hacerlo todo, igual que tú.", imagen: "image/Nike City Classic Boot PRM.png" },
            { nombre: "Nike AL8", precio: 96990, descripcion: "Zapatillas para Mujer. La mezcla perfecta de nostalgia (echa un vistazo al Swoosh bordado) y la comodidad moderna que amas.", imagen: "image/Nike AL8.png" },
            { nombre: "Nike Air Max Plus Drift Tn", precio: 192990, descripcion: "Zapatillas para Mujer. Una experiencia Nike Air mejorada que ofrece una estabilidad premium y una amortiguación increíble.", imagen: "image/Nike Air Max Plus Drift Tn.png" },
            { nombre: "Nike Journey Run", precio: 96990, descripcion: "Zapatillas para correr.", imagen: "image/Nike Journey Run.png" },
            { nombre: "W AIR MAX 90 SE", precio: 146990, descripcion: "Zapatillas para mujer. No hay nada más ligero, más cómodo ni más probado.", imagen: "image/W AIR MAX 90 SE.png" },
            { nombre: "Nike ReactX Pegasus Trail 5", precio: 149990, descripcion: "Zapatillas de Trail Running para hombre. Es suave en la carretera, estable en el sendero y mejor para el medio ambiente.", imagen: "image/Nike ReactX Pegasus Trail 5.png" },
            { nombre: "Nike Pegasus Trail 4", precio: 149990, descripcion: "Zapatillas de trail Running para Hombre. ENERGÍA DE LA CARRETERA AL SENDERO.", imagen: "image/Nike Pegasus Trail 4.png" },
            { nombre: "Nike Infinity RN 4", precio: 179990, descripcion: "Zapatillas de Running para hombre. Tiene una amortiguación con soporte hecha para una carrera cómoda, te ayuda a vivir el running.", imagen: "image/Nike Infinity RN 4.png" }
        ],
        poleras: [
            { nombre: "Jordan Jumpman", precio: 29990, descripcion: "Polera Jordan Jumpman.", imagen: "image/Jordan Jumpman.png" },
            { nombre: "Jordan", precio: 36990, descripcion: "Polera Jordan clásica.", imagen: "image/Jordan.png" },
            { nombre: "Jordan Air", precio: 32990, descripcion: "Polera Jordan Air.", imagen: "image/Jordan Air.png" },
            { nombre: "Jordan Sport", precio: 32990, descripcion: "Polera Jordan Sport.", imagen: "image/Jordan Sport.png" },
            { nombre: "Nike Hyverse", precio: 39990, descripcion: "Polera Nike Hyverse.", imagen: "image/Nike Hyverse.png" },
            { nombre: "2024 All-Star Weekend", precio: 112990, descripcion: "Polera conmemorativa 2024 All-Star Weekend.", imagen: "image/2024 All-Star Weekend.png" },
            { nombre: "M NSW TEE OS NCPS", precio: 49990, descripcion: "Polera M NSW TEE OS NCPS.", imagen: "image/M NSW TEE OS NCPS.png" },
            { nombre: "Nike Short Sleeve Hydroguard",precio: 29990, descripcion: "Polera Nike Short Sleeve Hydroguard.", imagen: "image/Nike Short Sleeve Hydroguard.png" },
            { nombre: "Nike Rise 365 Run Division", precio: 56990, descripcion: "Polera de running de manga corta Dri-FIT.", imagen: "image/Nike Rise 365 Run Division.png" },
            { nombre: "Nike Sportswear Club Fleece", precio: 46990, descripcion: "Polerón de cuello redondo. Comodidad suave del tejido Fleece para brindar un look mejorado para el día a día.", imagen: "image/Nike Sportswear Club Fleece.png" },
            { nombre: "Nike Rise 365 Run Energy", precio: 26990, descripcion: "Polera de Running. Esta playera ligera, transpirable y absorbente del sudor mantiene vivo el espíritu rebelde.", imagen: "image/Nike Rise 365 Run Energy.png" },
            { nombre: "Nike Rise 365 Running Division", precio: 49990, descripcion: "Polera Dri-Fit para hombre. Con un corte de ajuste holgado, esta playera mantiene la frescura con la tela elástica y absorbente de sudor.", imagen: "image/Nike Rise 365 Running Division1.png" }
        ]
    };

    // Mostrar productos en la página
    function mostrarProductos(productosAMostrar) {
        productosFiltrados.innerHTML = '';
        productosAMostrar.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto">
                <h3>${producto.nombre}</h3>
                <p class="descripcion">${producto.descripcion}</p>
                <p class="precio">$${producto.precio.toLocaleString('es-CL')}</p>
                <div class="stars" data-producto="${producto.nombre}">
                    <span class="star" data-value="1">&#9733;</span>
                    <span class="star" data-value="2">&#9733;</span>
                    <span class="star" data-value="3">&#9733;</span>
                    <span class="star" data-value="4">&#9733;</span>
                    <span class="star" data-value="5">&#9733;</span>
                </div>
                <button class="cta agregar-carrito" data-nombre="${producto.nombre}" data-precio="${producto.precio}" data-descripcion="${producto.descripcion}" data-imagen="${producto.imagen}">Agregar al Carrito</button>
                <button class="cta ver-detalles" data-nombre="${producto.nombre}" data-descripcion="${producto.descripcion}" data-precio="${producto.precio}" data-imagen="${producto.imagen}">Ver Detalles</button>
            `;
            productosFiltrados.appendChild(productoDiv);
        });
    }

    // Función para filtrar productos
    function filtrarProductos() {
        const busqueda = buscador.value.toLowerCase();
        const categoria = filtroCategoria.value;
        const precioRango = filtroPrecio.value;

        let productosFiltrados = [];

        if (categoria === 'todos') {
            productosFiltrados = Object.values(productos).flat();
        } else {
            productosFiltrados = productos[categoria];
        }

        productosFiltrados = productosFiltrados.filter(producto => 
            producto.nombre.toLowerCase().includes(busqueda) || 
            producto.descripcion.toLowerCase().includes(busqueda)
        );

        if (precioRango !== 'todos') {
            const [min, max] = precioRango.split('-').map(Number);
            productosFiltrados = productosFiltrados.filter(producto => 
                producto.precio >= min && (max ? producto.precio <= max : true)
            );
        }

        mostrarProductos(productosFiltrados);
    }

    // Event listeners para filtros
    buscador.addEventListener('input', filtrarProductos);
    filtroCategoria.addEventListener('change', filtrarProductos);
    filtroPrecio.addEventListener('change', filtrarProductos);

    // Inicializar productos
    filtrarProductos();

    // Agregar productos al carrito
    document.addEventListener('click', function(e) {
        if(e.target && e.target.classList.contains('agregar-carrito')) {
            const nombre = e.target.dataset.nombre;
            const precio = parseFloat(e.target.dataset.precio);

            if (carrito[nombre]) {
                carrito[nombre].cantidad += 1;
            } else {
                carrito[nombre] = {
                    precio: precio,
                    cantidad: 1,
                };
            }
            actualizarCarrito();
        }
    });

    // Ver detalles del producto
    document.addEventListener('click', function(e) {
        if(e.target && e.target.classList.contains('ver-detalles')) {
            const nombre = e.target.dataset.nombre;
            const descripcion = e.target.dataset.descripcion;
            const precio = e.target.dataset.precio;
            const imagen = e.target.dataset.imagen;

            document.getElementById('modal-nombre').innerText = nombre;
            document.getElementById('modal-descripcion').innerText = descripcion;
            document.getElementById('modal-precio').innerText = parseFloat(precio).toLocaleString('es-CL');
            document.getElementById('modal-imagen').src = imagen;

            const modal = document.getElementById('modal');
            modal.style.display = "block";

            // Agregar al carrito desde el modal
            document.getElementById('agregar-carrito-modal').onclick = () => {
                if (carrito[nombre]) {
                    carrito[nombre].cantidad += 1;
                } else {
                    carrito[nombre] = {
                        precio: parseFloat(precio),
                        cantidad: 1,
                    };
                }
                actualizarCarrito();
                modal.style.display = "none";
            };
        }
    });

    // Actualizar carrito
    function actualizarCarrito() {
        contadorCarrito.innerText = Object.values(carrito).reduce((total, item) => total + item.cantidad, 0);

        productosCarrito.innerHTML = '';
        let total = 0;
        for (const [nombre, info] of Object.entries(carrito)) {
            const subtotal = info.precio * info.cantidad;
            total += subtotal;
            const productoDiv = document.createElement('div');
            productoDiv.innerHTML = `
                <p>${nombre} - $${info.precio.toLocaleString('es-CL')} x ${info.cantidad} = $${subtotal.toLocaleString('es-CL')}
                <button class="eliminar" data-nombre="${nombre}">Eliminar</button></p>
            `;
            productosCarrito.appendChild(productoDiv);
        }

        totalCompra.innerText = total.toLocaleString('es-CL');

        // Agregar funcionalidad para eliminar productos
        const botonesEliminar = document.querySelectorAll('.eliminar');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', () => {
                const nombre = boton.dataset.nombre;
                delete carrito[nombre];
                actualizarCarrito();
            });
        });
    }

    // Cerrar el modal
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        const modal = document.getElementById('modal');
        modal.style.display = "none";
    };

    // Cerrar el modal al hacer clic fuera de él
    window.onclick = function(event) {
        const modal = document.getElementById('modal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Mostrar sección de carrito y checkout al hacer clic en el enlace del carrito
    linkCarrito.addEventListener('click', (e) => {
        e.preventDefault();
        carritoCheckoutSection.style.display = "block";
        document.getElementById('productos').style.display = "none";
    });

    // Seguir comprando
    seguirComprandoBtn.addEventListener('click', () => {
        carritoCheckoutSection.style.display = "none";
        document.getElementById('productos').style.display = "block";
    });

    // Enviar formulario de checkout
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("¡Compra confirmada! Gracias por tu pedido.");
        // Reiniciar el carrito y la sección de checkout
        for (const nombre in carrito) {
            delete carrito[nombre];
        }
        actualizarCarrito();
        carritoCheckoutSection.style.display = "none";
        document.getElementById('productos').style.display = "block";
        checkoutForm.reset();
    });

    // Rating system for products
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('star')) {
            const productName = e.target.parentElement.dataset.producto;
            const rating = e.target.dataset.value;
            localStorage.setItem(productName + '-rating', rating);
            updateStars(e.target.parentElement, rating);
            alert(`Has calificado ${productName} con ${rating} estrellas.`);
        }
    });

    function updateStars(starsContainer, rating) {
        const stars = starsContainer.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    // Inicializar las calificaciones guardadas
    document.querySelectorAll('.stars').forEach(starsContainer => {
        const productName = starsContainer.dataset.producto;
        const savedRating = localStorage.getItem(productName + '-rating');
        if (savedRating) {
            updateStars(starsContainer, savedRating);
        }
    });
});