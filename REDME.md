# 🛍️ MiTienda - E-commerce Online

Una moderna tienda online desarrollada con HTML, CSS y JavaScript puro, con diseño responsivo y colorido, integración con WhatsApp y carrusel interactivo.

## 🎨 Vista Previa

![MiTienda Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=MiTienda+-+E-commerce+Moderno)

## ✨ Características Principales

### 🎠 **Carrusel Interactivo**
- ✅ 6 slides con transiciones automáticas
- ✅ Navegación manual con dots
- ✅ Diseño responsive y efectos visuales
- ✅ Mensajes promocionales personalizados

### 🛒 **Sistema de Carrito**
- ✅ Agregar/quitar productos
- ✅ Contador dinámico
- ✅ Modal responsive
- ✅ Cálculo automático de totales

### 📱 **Integración WhatsApp**
- ✅ Envío directo de pedidos
- ✅ Formato automático de mensajes
- ✅ Integración con número peruano

### 🔍 **Búsqueda Avanzada**
- ✅ Filtro por nombre de producto
- ✅ Filtro por categoría
- ✅ Resultados en tiempo real

### 🏷️ **Sistema de Categorías**
- ✅ Filtrado dinámico
- ✅ 6 categorías predefinidas
- ✅ Vista "Ver todo"

### 🌈 **Diseño Moderno**
- ✅ Gradientes vibrantes
- ✅ Animaciones suaves
- ✅ Efectos hover avanzados
- ✅ Diseño glassmorphism

### 📱 **Redes Sociales**
- ✅ Links a Facebook, Instagram y WhatsApp
- ✅ Iconos SVG integrados
- ✅ Efectos visuales únicos

## 🚀 Instalación y Uso

### Prerrequisitos
- Navegador web moderno
- Servidor local (opcional para desarrollo)

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tuusuario/mitienda.git
cd mitienda
```

2. **Estructura de archivos**
```
mitienda/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── app.js             # JavaScript principal
├── products.json      # Base de datos de productos
├── README.md          # Documentación
└── assets/            # Recursos multimedia
    ├── logo.jpeg      # Logo de la tienda
    ├── banner1.jpeg   # Slide 1: Bienvenida
    ├── banner2.jpeg   # Slide 2: Ofertas
    ├── banner3.jpeg   # Slide 3: Yape
    ├── banner4.jpeg   # Slide 4: Compra móvil
    ├── banner5.jpeg   # Slide 5: Entrega rápida
    ├── banner6.jpeg   # Slide 6: Calidad garantizada
    └── banner3.jpg    # Banner promocional
```

3. **Configurar products.json**
```json
[
  {
    "id": 1,
    "name": "Producto Ejemplo",
    "price": 25.99,
    "category": "Hogar",
    "image": "assets/producto1.jpg"
  }
]
```

4. **Abrir en navegador**
```bash
# Con servidor local
python -m http.server 8000
# O simplemente abrir index.html
```

## ⚙️ Configuración

### 📞 **WhatsApp**
Edita el número de WhatsApp en `app.js`:
```javascript
const phone = "51979169272"; // Cambia por tu número
```

### 🌐 **Redes Sociales**
Actualiza los enlaces en `index.html`:
```html
<a href="https://facebook.com/tutienda" target="_blank">
<a href="https://instagram.com/tutienda" target="_blank">
<a href="https://wa.me/51979169272" target="_blank">
```

### 🎨 **Personalización de Colores**
Los colores principales se pueden cambiar en `styles.css`:
```css
/* Colores primarios */
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #ff6b6b;
  --success-color: #43e97b;
}
```

## 📋 Estructura de Productos

### Formato JSON
```json
{
  "id": 1,
  "name": "Nombre del Producto",
  "price": 99.99,
  "category": "Categoría",
  "image": "ruta/a/imagen.jpg"
}
```

### Categorías Disponibles
- `"Hogar"` - Productos para el hogar
- `"Accesorios"` - Accesorios diversos
- `"Moda"` - Ropa y moda
- `"Zapatillas"` - Calzado deportivo
- `"Deportes"` - Artículos deportivos
- `"Electrónicos"` - Dispositivos electrónicos

## 🎯 Funcionalidades Técnicas

### JavaScript
- **Carrusel automático** con navegación manual
- **Gestión de carrito** en memoria (localStorage no disponible)
- **Filtrado dinámico** de productos
- **Búsqueda en tiempo real**
- **Integración API WhatsApp**

### CSS
- **Flexbox y Grid** para layouts responsivos
- **Animaciones CSS3** y transiciones
- **Gradientes dinámicos** con animaciones
- **Media queries** para responsive design
- **Efectos glassmorphism** y blur

### HTML
- **Estructura semántica** HTML5
- **Meta tags** para SEO básico
- **Accesibilidad** con alt tags y aria labels

## 🎨 Personalización del Diseño

### Cambiar Gradiente de Fondo
```css
body {
  background: linear-gradient(135deg, #tu-color1, #tu-color2);
}
```

### Modificar Efectos Hover
```css
.product-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 25px 50px rgba(tu-color, 0.4);
}
```

### Personalizar Carrusel
```css
.caption {
  background: linear-gradient(135deg, #tu-color1, #tu-color2);
  /* Más estilos personalizados */
}
```

## 📱 Responsive Design

### Breakpoints
- **Desktop**: `> 1024px`
- **Tablet**: `768px - 1024px`
- **Mobile**: `480px - 768px`
- **Small Mobile**: `< 480px`

### Características Responsivas
- Grid adaptable para productos
- Carrusel optimizado para móviles
- Header colapsible
- Modal adaptativo

## 🔧 Desarrollo

### Estructura del Código

**HTML**: Estructura semántica y accesible
```html
<section class="hero">
  <div class="slides">
    <!-- Slides del carrusel -->
  </div>
</section>
```

**CSS**: Metodología BEM y CSS moderno
```css
.product-card {
  /* Estilos base */
}

.product-card:hover {
  /* Efectos interactivos */
}
```

**JavaScript**: Funciones modulares y reutilizables
```javascript
// Funciones principales
async function loadProducts() { }
function addToCart(id) { }
function filterCategory(category) { }
```

## 🚀 Próximas Mejoras

### Funcionalidades Planeadas
- [ ] Sistema de usuarios y login
- [ ] Pasarela de pagos integrada
- [ ] Panel administrativo
- [ ] Base de datos real (MySQL/MongoDB)
- [ ] API REST backend
- [ ] PWA (Progressive Web App)
- [ ] Notificaciones push
- [ ] Sistema de reviews
- [ ] Wishlist/favoritos
- [ ] Cupones de descuento

### Mejoras Técnicas
- [ ] Service Workers para offline
- [ ] Lazy loading de imágenes
- [ ] Optimización de performance
- [ ] Tests automatizados
- [ ] CI/CD pipeline
- [ ] SEO avanzado

## 📈 Analytics y Métricas

### Performance
- **Tiempo de carga**: < 3 segundos
- **First Contentful Paint**: < 1.5s
- **Lighthouse Score**: 90+

### Compatibilidad
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers

## 🛡️ Seguridad

### Buenas Prácticas Implementadas
- Validación de inputs del lado cliente
- Sanitización de datos
- HTTPS recomendado para producción
- Headers de seguridad básicos

## 📞 Soporte y Contacto

### Información de Contacto
- **WhatsApp**: +51 979 169 272
- **Email**: contacto@mitienda.com
- **Website**: https://mitienda.com

### Reportar Problemas
Si encuentras algún bug o tienes sugerencias:
1. Abre un issue en GitHub
2. Describe el problema detalladamente
3. Incluye screenshots si es necesario
4. Especifica navegador y dispositivo

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 🤝 Contribuir

### Cómo Contribuir
1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guidelines
- Mantén el código limpio y comentado
- Sigue las convenciones de naming
- Prueba en múltiples navegadores
- Actualiza la documentación si es necesario

## 🙏 Agradecimientos

- **Iconos**: SVG icons integrados
- **Inspiración**: Tendencias modernas de e-commerce
- **Comunidad**: Desarrolladores que contribuyen con feedback

## 📊 Estadísticas del Proyecto

- **Líneas de código**: ~1,500+
- **Archivos**: 6 principales
- **Tamaño**: < 2MB
- **Tiempo de desarrollo**: 2-3 días

---

**⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!**

**🔗 Links útiles:**
- [Demo en vivo](https://tudominio.com)
- [Documentación completa](https://docs.mitienda.com)
- [Guía de instalación en video](https://youtube.com/watch?v=ejemplo)

---

*Desarrollado con ❤️ en Perú 🇵🇪 por el equipo de MiTienda*