# Journal App
## Web App using React, Redux, Firebase

Ejemplo de aplicacion web creada usando el patron Redux, usando el framework ReactJS para front-end, y Firebase y Cloudinary como base de datos en la nube.Lenguaje usado es Javascript.

Temas vistos aplicados en esta webapp:
- Manejo de rutas (privadas y publicas) usando React Router
v6
- SaSS como editor de estilos.
- Uso de multiples directorios para ordenamiento de archivos
- Uso de tipos para el manejo de los reducers del patron Redux
- Login con cuentas de Google

## Features

- Creacion de notas, donde se especifica la fecha, el tema, el cuerpo o descripcion del evento y la carga de imagenes en la nube usando la API de Cloudinary.
- Creacion de usuarios nuevos, que se almacenaran en la base de datos de firestore
- Login con cualquier cuenta de google.
- Las notas pueden ser facilmente editadas o borradas.

Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As [John Gruber] writes on the [Markdown site][df1]

## Tech

Dillinger uses a number of open source projects to work properly:

- [ReactJS] - !
- [Firebase] - awesome web-based text editor
- [Cloudinary] - Markdown parser done right. Fast and easy to extend.
- [SaSS] - great UI boilerplate for modern web apps
- [Redux] - evented I/O for the backend
- [React Router v6] Para manejo de routers, rutas publicas y privadas.

Aplicacion creada en base a ejemplo de un curso en [Udemy - React: De cero a experto ( Hooks y MERN )](https://www.udemy.com/course/react-cero-experto/) - Creado por 
[Fernando Herrera](https://www.udemy.com/user/550c38655ec11/). 

Aplicacion creada


## Instalacion

Para correr la web app se requiere [Node.js](https://nodejs.org/) v10+.

Se descarga los archivos, ya sea mediante descarga como zip o clonando el repositorio, usando el siguiente comando:

```sh
git clone https://github.com/AlxMancia/JournalApp.git
```
Luego se navega a la carpeta: 
```sh
cd JournalApp
```
Se instalan las dependencias de los paquetes usandos en la aplicacion con el comando:
```sh
npm i
```
Luego se corre la aplicacion en modo de produccion usando el comando:
```sh
npm start
```

**WebApp free!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [ReactJS]: <https://github.com/joemccann/dillinger>
   [React Router v6]: <https://reactrouter.com>
   [Firebase]: <https://firebase.google.com>
   [Cloudinary]: <https://cloudinary.com/>
   [SaSS]: <https://sass-lang.com/>
   [Redux]: <https://es.redux.js.org/>
   [node.js]: <http://nodejs.org>



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
