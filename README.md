# Employee Management System

Este es un sistema de gestión de empleados desarrollado con Spring Boot, React, Bootstrap y MySQL. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre empleados.

## 📌 **Tecnologías Utilizadas**

- Backend: Spring Boot, Java, Spring Data JPA
- Frontend: React, Bootstrap
- Base de Datos: MySQL

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
