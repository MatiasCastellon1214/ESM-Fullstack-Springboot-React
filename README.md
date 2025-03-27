# Employee Management System

Este es un sistema de gestión de empleados desarrollado con Spring Boot, React, Bootstrap y MySQL. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre empleados.

## 📌 **Tecnologías Utilizadas**

- Backend: ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat&logo=spring-boot&logoColor=white), ![APIs RESTful](https://img.shields.io/badge/APIs_RESTful-FF6F00?style=flat&logo=api&logoColor=white),  ![alt text](https://img.shields.io/badge/Java-ED8B00?style=flat&logo=oracle&logoColor=white)
- Frontend: ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black), ![alt text](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black), ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)
- Base de Datos: ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)

## ⚙️ **Instalación y Configuración**

### 🔧 Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

- ✅ Java 17 o superior
- ✅ Node.js y npm
- ✅ MySQL
- ✅ Maven

## 🛠️  **Configuración de la Base de Datos**

### Crea una base de datos en MySQL:

```sql
CREATE DATABASE employee_management;
```

### Configura las credenciales en application.properties o application.yml (según corresponda):

```sql
spring.application.name=ems-backend
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=TU_USUARIO
spring.datasource.password=TU_CONTRASEÑA
```

### ▶️ Ejecución del Backend

Ve al directorio del backend:

```sql
  cd backend
```

### Compila y ejecuta el proyecto con Maven:

```sql
mvn spring-boot:run
```

### ▶️ Ejecución del Frontend

Ve al directorio del frontend:

```bash
cd frontend
```

### Instala las dependencias:

```bash
npm install
```

### Inicia la aplicación:

```bash
npm run dev
```

## 🌐 API Endpoints

- **GET** /api/employees: Obtener todos los empleados
- **POST** /api/employees: Agregar un nuevo empleado
- **PUT** /api/employees/{id}: Actualizar un empleado
- **DELETE** /api/employees/{id}: Eliminar un empleado

"" 🚀 Mejoras Futuras

- 🔐 Implementación de autenticación y autorización (JWT, OAuth, etc.)
- 📦 Implementación de Docker para despliegue fácil
- 🧪 Implementación de pruebas unitarias y de integración

🤝 Contribuciones

Si deseas contribuir, crea un fork del repositorio, realiza tus cambios en una nueva rama y envía un pull request.

🔔 **Nota:** Este proyecto está actualmente configurado solo para desarrollo local. No se recomienda su despliegue en entornos productivos sin las debidas medidas de seguridad.
