# CORTINAS "KITASOL" — Pucallpa

> *"Hagamos de su casa un palacio"*

Sitio web y plataforma interactiva oficial de **CORTINAS "KITASOL"**, la mejor tienda y taller especializado de cortinas, persianas y rollers en Pucallpa, Ucayali, Perú.

---

## 🌟 Características Principales

* **🎭 Teatro de Luz y Sombra en Vivo:** Simulador interactivo que demuestra el "Efecto Quita-Sol" (cierre de persianas, despliegue de cortinas y filtrado de la radiación solar tropical de Ucayali) mediante control deslizante y cadena roller interactiva.
* **📦 Catálogo Bento Grid:** Exposición de las 4 líneas oficiales del sello de la marca: *Cortinas Clásicas y Modernas*, *Persianas Verticales y Horizontales*, *Cortinas Roller Enrollables* y *Rieles y Accesorios de Soporte*.
* **🪟 Escaparate por Ambientes (Antes y Después):** Comparador split interactivo para evaluar la protección solar y confort térmico en *Sala*, *Habitación*, *Cocina* y *Oficina*.
* **📐 Simulador y Cotizador de Medidas:** Calculadora de vanos, área en m² y holgura de riel sugerida, con generación de ficha técnica y **envío directo a WhatsApp (+51 981 641 263)** o llamada telefónica.
* **📍 Mapa Oficial de Google Maps:** Integración interactiva con la ubicación exacta en *Jr. Teniente Clavero N.º 134, 2do piso de Decoraciones "Buen Hogar" (C.C. El Huequito, Callería, Pucallpa)*.
* **📱 Experiencia Responsiva Completa:** Menú de navegación adaptable para móvil y tablet, barra inferior de acceso rápido (WhatsApp, Cotizar, Llamar) y soporte para modo de movimiento reducido.

---

## 🛠️ Stack Tecnológico

* **Frontend:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Bundler & Tooling:** [Vite 8](https://vite.dev/)
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Animaciones:** [Motion (Framer Motion v12)](https://motion.dev/)
* **Iconos:** [Lucide React](https://lucide.dev/)
* **Tests:** Node Test Runner (`node:test`) + `tsx`

---

## 🚀 Inicio Rápido Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/GersonMera/kitasol.git
cd kitasol
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador: `http://localhost:3000`

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados se generarán en la carpeta `dist/`.

### 5. Ejecutar pruebas unitarias
```bash
npm test
```

---

## 🌐 Despliegue en GitHub Pages

Este repositorio incluye un flujo de trabajo automatizado de GitHub Actions en `.github/workflows/deploy.yml`.

Para activarlo en tu repositorio de GitHub:
1. Ve a **Settings** > **Pages** en tu repositorio `GersonMera/kitasol`.
2. En **Build and deployment** > **Source**, selecciona **GitHub Actions**.
3. Cada vez que hagas un `push` a la rama `main`, la web se compilará y publicará automáticamente en:
   `https://gersonmera.github.io/kitasol/`

---

## 👨‍💻 Autoría

Desarrollado por [GersonMera](https://github.com/GersonMera).
