
# Proyecto 7 - Fundación de Adopción de Gatos

Este proyecto es una página web desarrollada con React y Vite para una fundación dedicada a promover la adopción responsable de gatos. La aplicación cuenta con diversas funcionalidades que permiten explorar la información de la fundación, ver gatos disponibles para adopción, realizar donaciones y gestionar cuentas de usuarios.

## Características principales

### Páginas disponibles

1. **HomePage:**
- Una introducción a la fundación con información relevante sobre los servicios que brinda la página.

2. **About Page:**
- Información detallada sobre la historia, misión y visión de la fundación.

3. **Adopciones:**
- Una galería de gatos disponibles para adopción, con detalles como nombres, edades y descripciones.

4. **Donaciones:**
- Una página dedicada a recibir donaciones para apoyar a la fundación. Integra un sistema de carrito de compras para gestionar donaciones y utiliza Mercado Pago para procesar los pagos.

5. **Login y Registro:**
- Páginas para que los usuarios puedan iniciar sesión o registrar una nueva cuenta.

6. **Carrito de compras:**
- Permite a los usuarios gestionar sus donaciones antes de proceder al pago.

### Tecnologías utilizadas

- **Frontend:** React con Vite.

- **Estilos:** CSS y Bootstrap.

- **Backend:** La aplicación se comunica con un backend a través del siguiente enlace: [Backend API](https://proyecto-6-tvf2.onrender.com/api-docs).

- **Pasarela de pagos:** Mercado Pago.

## Instalación y configuración

### Requisitos previos

- Node.js

- npm

### Instrucciones

1. Clonar el repositorio:

        git clone https://github.com/Javilani/Proyecto-7.git
        cd Proyecto-7

2. Instalar las dependencias:

        npm install

3. Configurar variables de entorno si es necesario (por ejemplo, la clave de Mercado Pago).

4. Ejecutar el proyecto en modo desarrollo:

        npm run dev

5. Acceder a la aplicación en tu navegador:

        http://localhost:5173

## Deployment

El sitio desplegado se puede visitar en el siguiente enlace:

🌐 **[Visitar el Sitio](https://proyecto-7-ao20.onrender.com)**



## Estructura del proyecto

        /
        ├── public/        
        ├── src/
        │   ├── assets/
        │   │   ├── img/
        │   │   │   └── ...jpg
        │   │   └── styles/
        │   │       ├── bases/
        │   │       │   └── ...css
        │   │       ├── components/
        │   │       │   └── ...css
        │   │       ├── layouts/
        │   │       │   └── ...css
        │   │       └── pages/
        │   │           └── ...css
        │   ├── components/ 
        │   │   ├── auth/
        │   │   │   └── ...jsx
        │   │   ├── cart/
        │   │   │   └── ...jsx
        │   │   ├── cats/
        │   │   │   └── ...jsx
        │   │   ├── donations/
        │   │   │   └── ...jsx
        │   │   ├── pagos/
        │   │   │   └── ...jsx
        │   │   ├── Footer.jsx
        │   │   ├── index.js
        │   │   └── Navbar.jsx 
        │   ├── config/
        │   │   └── mercadoPagoConfig.js
        │   ├── context/
        │   │   ├── Cart/
        │   │   │   ├── cartContext.js
        │   │   │   ├── CartGlobalState.jsx
        │   │   │   └── cartReducer.js
        │   │   └── User/
        │   │       ├── userContext.js
        │   │       ├── UserGlobalState.jsx
        │   │       └── userReducer.js
        │   ├── pages/
        │   │   ├── ...jsx
        │   │   └── index.js
        │   ├── routes/
        │   │   └── ...jsx
        │   ├── services/
        │   │   └── apiProyecto.js
        │   ├── App.jsx
        │   └── main.jsx
        ├── package.json
        ├── index.html
        ├── vite.config.js
        └── README.md
## Screenshots

- Página de inicio:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1734705905/inicio_yfv6s2.png)


- Página con información de la fundación:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1734705914/about_zlctzv.png)


- Página de gatos en adopción:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1734705924/adopiones_b7ceqe.png)

- Página de donaciones:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1734705938/donaciones_nzydkf.png)

- Carrito de compras:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1734705950/carrito_l2dlf3.png)

- Inicio de Sesión para usuarios ya registrados:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1734705961/login_aaq700.png)

- Registro de nuevos usuarios:
![App Screenshot](https://res.cloudinary.com/de2p3kdgv/image/upload/v1734705970/crear-cuenta_lltnlx.png)
## Authors

- Javier Lagos

