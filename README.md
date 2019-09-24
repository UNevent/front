# UNEventFront
## Instalación
  - Descargar NodeJS del siquiente enlace:
    - [Enlace](https://nodejs.org/es/download/)
  - Abrir una consola de comandos y ejecutar el comando:
    - `npm install -g react-native-cli`
  
## Despliegue
  - Tener una consola de comandos ubicada dentro de la carpeta del proyecto y ejecutar el comando (puede tomar bastante tiempo la instalación):
    - `npm install`
  - Instalar la app movil "Expo" disponible para Android y iOS
  - Ir al apartado de perfil y registrarse
  - Iniciar sesión si no se ha iniciado automáticamente
  - En la consola, usar el comando `expo login` para iniciar sesión con las credenciales usadas en la app movil
  - Usar el comando:
    - `expo start`
    
    para iniciar la aplicación
  - Se abrirá una pestaña en el navegador predeterminado y se mostrará un código QR en la pestaña y en la consola
  - Para iniciar la aplicación en el dispositivo se abre la aplicación Expo y se va al apartado de "Projects"
  - Se escanea el código QR o se puede visualizar la aplicación desplegada tocando la sección de "En desarrollo"

## Estructura del proyecto
  - El proyecto usa un módulo llamado "Storybook" que permite tener componentes en desarrollo de forma individual
  - El módulo mencionado permite tener el ambiente de componentes separado del ambiente de la aplicación integrada
  - Para visualizar el modo de aplicación, dirigirse al archivo `package.json` y cambiar la línea:
    - `"main": "./storybook/index.js"` por `"main": "./app/index.js"`
    - Reiniciar la aplicación
  - Para visualizar el modo de desarrollo de componentes dirigirse al mismo archivo y cambiar la línea:
    - `"main": "./app/index.js"` por `"main": "./storybook/index.js"`
    - Reiniciar la aplicación
   
