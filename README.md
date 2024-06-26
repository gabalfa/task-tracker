# PRUEBA TÉCNICA

### Descripción
Con la ayuda de la documentacion oficial de cada herramienta, framework, librerias, tutoriales, repositorios de ejemplo y videos de Youtube, desarrollé dos proyectos, una Webapi con Dotnet 8 y un Front-End web con NextJS, usando Dapr, que permite la ejecución de los 2 proyectos de forma distribuida.

Esta solución permite hacer el CRUD de una entidad de negocio llamada **tarea**

# Pasos para la instalación del proyecto.

1. **Prerequisitos:**
   - Dotnet 8.0 - [Instalación .Net Core](https://dotnet.microsoft.com/download)
   - NodeJS - [Instalación](https://nodejs.org/en/download)
   - Docker Desktop - [Instalado e inicializado](https://www.docker.com/products/docker-desktop/)
   - Visual Studio Code - [Instalación](https://code.visualstudio.com/download)
   - Dapr CLI - [Instalado e inicializado](https://github.com/dapr/cli)
   - Git CLI - [Instalación](https://git-scm.com/downloads)
   - **Verificar** que no estén ocupados los puertos que usara el proyecto.
     [back-end](http://localhost:5010)
     [front-end](http://localhost:3000)
   - **Abrir** una terminal de linea de comandos.
     
2. **Clonar el repositorio.**

[repositorio en Github](https://github.com/gabalfa/task-tracker)

```bash
git clone https://github.com/gabalfa/task-tracker.git
cd task-tracker
```
3. **Compilar el Back-End.**
- Desde la linea de comandos y estando en la raiz del proyecto correr:

```bash
cd BackendApi
dotnet restore
dotnet build
```
4. **Compilar el Front-End.**
```bash
cd ../frontendnext
npm install
npm run build
cd ..
```
5. **Crear el archivo de variables de entorno.**
- renombrar el archivo que esta en la carpeta ./frontend de: ```.env.example``` a: ```.env```
```bash
cd frontendnext
mv .env.example .env
cd ..
```
6. **Iniciar la solución**
- Desde la raiz del proyecto, este comando inicia Dapr y los proyectos:

```bash
dapr run -f .
```
**Nota:** Sí tiene problemas para inicializar el proyecto, intente correr los siguientes comandos y vuelva a intentarlo
  
```bash
dapr uninstall
dapr init
```

**Abrir en el explorador web**
la URL http://localhost:3000

**Tablero Darp**
- Desde **otra** linea de comandos, correr
```bash
dapr dashboard -p 9999
```
Desde el explorador de internet abrir la URL http://localhost:9999

# Pasos que seguí para resolver la prueba

#### 1. Leer y entender los requirimientos de la prueba técnica.

#### 2. Priorizar tareas.

- Documentarme sobre ACA y Dapr.
- Seguir Workshop.
- Desarrollar el Front-End
- Decidí dar menor priorida al CI/CD y Testing.

#### 3. Leer el workshop y tratar de seguirlo.

- Configuré mi entorno local de desarrollo según las [indicaciones](https://azure.github.io/aca-dotnet-workshop/aca/00-workshop-intro/4-prerequisites/)
- En el workshop encontré varios pasos para desplegar en ACA, los cuales no los pude seguir.

#### 4. Hacer pruebas de concepto con Dapr.

- Cloné el repositorio del proyecto del workshop. [Repositorio](https://github.com/Azure/aca-dotnet-workshop.git)
- Revise la documentación de Dapr. [Documentación](https://docs.dapr.io/getting-started/)
- Me guié con los proyectos de ejemplo de Dapr. [Repositorio](https://github.com/dapr/quickstarts.git)

#### 5. Seguir los pasos del workshop.

- Seguí la guía, adaptando los pasos que aplicaban al entorno local. [Workshop](https://azure.github.io/aca-dotnet-workshop/)

#### 6. Resolver inconvenientes técnicos.

- Abordé y solucioné los problemas técnicos que surgieron durante el desarrollo.

#### 7. Desarrollar el Front-End.

- Elegí Next.js porque es un framework de ReactJS muy completo, sus APIs aceleraron el desarrollo de ésta prueba.

#### 8. Correr todos los pasos de la solución y verificar el funcionamiento.

- Después de tener la solución en el repositorio de GitHub, verifiqué que todos los pasos funcionaran correctamente.
- Tambien me servió para escribir una mejor documentación.

# Stack Tecnológico Utilizado

## Dapr - Dotnet - Csharp

![Dapr](https://dapr.io/images/dapr.svg)
![DotNet](https://img.icons8.com/color/100/net-framework.png)
![C#](https://img.icons8.com/ios-filled/100/c-sharp-logo.png)

## ReactJS - NextJS - Tailwind

![javascript](https://img.icons8.com/color/100/javascript--v1.png)
![typescript](https://img.icons8.com/fluency/100/typescript--v1.png)
![NextJs](https://img.icons8.com/color/100/nextjs.png)
![ReactJs](https://img.icons8.com/officel/100/react.png)
![tailwind](https://img.icons8.com/color/100/tailwind_css.png)
