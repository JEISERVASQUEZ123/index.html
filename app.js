// ==========================
// 📦 CARGAR PRODUCTOS
// ==========================
async function loadProducts() {
  const res = await fetch("products.json");
  const products = await res.json();
  const productList = document.getElementById("productList");

  productList.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>S/ ${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Agregar al carrito</button>
    `;
    productList.appendChild(div);
  });
}

// ==========================
// 🛒 CARRITO
// ==========================
let cart = [];

function addToCart(id) {
  fetch("products.json")
    .then(res => res.json())
    .then(products => {
      const product = products.find(p => p.id === id);
      const item = cart.find(p => p.id === id);
      if (item) {
        item.qty++;
      } else {
        cart.push({ ...product, qty: 1 });
      }
      updateCart();
    });
}

function updateCart() {
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  cartCount.textContent = cart.reduce((acc, p) => acc + p.qty, 0);

  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.qty} - S/ ${(item.price * item.qty).toFixed(2)}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
}

// ==========================
// 📲 ENVIAR PEDIDO A WHATSAPP
// ==========================
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  let message = "🛒 *Pedido desde MiTienda*%0A%0A";
  cart.forEach(item => {
    message += `• ${item.name} x${item.qty} - S/ ${(item.price * item.qty).toFixed(2)}%0A`;
  });
  message += `%0ATotal: S/ ${cart.reduce((acc, p) => acc + p.price * p.qty, 0).toFixed(2)}`;

  // ⚠️ Cambia el número por tu WhatsApp con código de país (ejemplo Perú: 51)
  const phone = "51979169272";
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank");
});

// ==========================
// 🏷️ FILTRAR POR CATEGORÍA
// ==========================
async function filterCategory(category) {
  const res = await fetch("products.json");
  const products = await res.json();

  const filtered = products.filter(p => p.category === category);

  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  filtered.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>S/ ${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Agregar al carrito</button>
    `;
    productList.appendChild(div);
  });
}

// ==========================
// 🎞️ CARRUSEL DE 6 IMÁGENES - VERSIÓN LIMPIA
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();

  // Variables del carrusel
  let slides = document.querySelectorAll(".slide");
  let dotsContainer = document.querySelector(".dots");
  let currentSlide = 0;
  let carouselInterval;

  // Limpiar dots existentes (por si acaso)
  dotsContainer.innerHTML = "";

  // Crear dots dinámicamente basado en el número de slides
  slides.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  // Función para mostrar slide específico
  function showSlide(slideIndex) {
    // Remover clase active de todos los slides y dots
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    
    // Agregar clase active al slide y dot actuales
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
    
    currentSlide = slideIndex;
  }

  // Función para ir al siguiente slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Función para ir a un slide específico (cuando se hace click en dot)
  function goToSlide(slideIndex) {
    showSlide(slideIndex);
    resetCarouselInterval(); // Reiniciar el timer automático
  }

  // Función para reiniciar el intervalo automático
  function resetCarouselInterval() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(nextSlide, 4000);
  }

  // Iniciar carrusel automático
  carouselInterval = setInterval(nextSlide, 4000);

  // ==========================
  // 🛒 MODAL CARRITO
  // ==========================
  const cartBtn = document.getElementById("cartBtn");
  const cartModal = document.getElementById("cartModal");
  const closeCart = document.getElementById("closeCart");

  cartBtn.addEventListener("click", () => {
    cartModal.style.display = "flex";
  });

  closeCart.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  // Cerrar modal al hacer click fuera de él
  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      cartModal.style.display = "none";
    }
  });

  // ==========================
  // 🔎 BUSCADOR DE PRODUCTOS
  // ==========================
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", async () => {
    const res = await fetch("products.json");
    const products = await res.json();
    const searchTerm = searchInput.value.toLowerCase();

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm)
    );

    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    if (filtered.length === 0) {
      productList.innerHTML = "<p style='text-align: center; color: #666; grid-column: 1/-1;'>No se encontraron productos</p>";
      return;
    }

    filtered.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product-card");
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>S/ ${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Agregar al carrito</button>
      `;
      productList.appendChild(div);
    });
  });

  // ==========================
  // 📧 FORMULARIO NEWSLETTER
  // ==========================
  const subscribeForm = document.getElementById("subscribeForm");
  subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = subscribeForm.querySelector('input[type="email"]').value;
    alert(`¡Gracias por suscribirte con el email: ${email}!`);
    subscribeForm.reset();
  });

  console.log(`✅ Carrusel iniciado con ${slides.length} slides`);
});

// ==========================
// 🔧 FUNCIONES DE UTILIDAD
// ==========================

// Función global para recargar todos los productos
window.loadProducts = loadProducts;

// Función global para filtrar categorías
window.filterCategory = filterCategory;

// Función global para agregar al carrito
window.addToCart = addToCart;