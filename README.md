# MyPortfolio

This project is my personal portfolio, where I showcase who I am, the most relevant projects I’ve developed, and three direct ways to get in touch.
I created it with the goal of increasing my visibility in the tech world and presenting my professional journey in a clear and visual way.


---

## Instalación

To run this project, you’ll need to have the following installed:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.dev/tools/cli)
- [TypeScript](https://www.typescriptlang.org/)

Once installed, you can start the development server with:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Navegación:
### Home Page:
Contains three buttons that redirect to different sections of the site. It also features a 3D model I created, integrated via an external script, as well as a background that is also loaded externally.
### About Me Page:
Here I share my story and how I entered the world of computer science. It includes my resume in both Spanish and English, as well as a letter of recommendation.
### Projects Page:
A section dedicated to the projects I consider most important and representative of my experience.
### Contact Page: 
A space where I include my social media profiles and direct contact options.

# Technologies Used:
- Angular
- TypeScript
- HTML & CSS
- Node.js
- Three.js (for the 3D model)

## Project Structure:

```
MyPortfolio
   ├─ .angular
   │  └─ cache
   │     └─ 19.2.17
   │        ├─ angular-webpack
   │        │  └─ 0f4da6b3bacd76fbdc8bfbce7526f21ba38ea164
   │        │     ├─ 0.pack
   │        │     ├─ 1.pack
   │        │     ├─ 10.pack
   │        │     ├─ 11.pack
   │        │     ├─ 12.pack
   │        │     ├─ 13.pack
   │        │     ├─ 14.pack
   │        │     ├─ 2.pack
   │        │     ├─ 3.pack
   │        │     ├─ 4.pack
   │        │     ├─ 5.pack
   │        │     ├─ 6.pack
   │        │     ├─ 7.pack
   │        │     ├─ 8.pack
   │        │     ├─ 9.pack
   │        │     ├─ index.pack
   │        │     └─ index.pack.old
   │        ├─ babel-webpack
   │        │  ├─ 003eaa6b49266d88c81c9f5c87551e4b8d9e1b1c22a2323f7311a95a3da9df88.json
   │        │  ├─ 011f9f17da64486936fe0a091ba8d6ad79ac3caa343da952b7b88c9229e56ae1.json
   │        │  ├─ 01e57af616c3a3c0784c19d54e977b4dce3c5963864d497d24e4a3f733360705.json
   │        │  ├─ 01f8bc6558f771f23118af50c3179d9eba4e8b73c8330b1ad21b17a0f6d5fe97.json
   │        │  ├─ 0315b0d986b3d022eed240c6cf0eeaef586bfba85e4acb7e30878a6765851c66.json
   │        │  ├─ etc...
   │        └─ MyPortfolio
   │           ├─ .tsbuildinfo
   │           └─ vite
   │              ├─ deps
   │              │  ├─ @angular_common.js
   │              │  ├─ @angular_common.js.map
   │              │  ├─ @angular_core.js
   │              │  ├─ @angular_core.js.map
   │              │  ├─ @angular_platform-browser.js
   │              │  ├─ @angular_platform-browser.js.map
   │              │  ├─ @angular_router.js
   │              │  ├─ @angular_router.js.map
   │              │  ├─ chunk-F37B36SK.js
   │              │  ├─ chunk-F37B36SK.js.map
   │              │  ├─ chunk-NH2DY5NS.js
   │              │  ├─ chunk-NH2DY5NS.js.map
   │              │  ├─ chunk-V6DCTCG2.js
   │              │  ├─ chunk-V6DCTCG2.js.map
   │              │  ├─ chunk-WDMUDEB6.js
   │              │  ├─ chunk-WDMUDEB6.js.map
   │              │  ├─ chunk-YVGWBIWY.js
   │              │  ├─ chunk-YVGWBIWY.js.map
   │              │  ├─ package.json
   │              │  ├─ three.js
   │              │  ├─ three.js.map
   │              │  ├─ three_examples_jsm_controls_OrbitControls__js.js
   │              │  ├─ three_examples_jsm_controls_OrbitControls__js.js.map
   │              │  ├─ three_examples_jsm_loaders_GLTFLoader__js.js
   │              │  ├─ three_examples_jsm_loaders_GLTFLoader__js.js.map
   │              │  └─ _metadata.json
   │              └─ deps_ssr
   │                 ├─ package.json
   │                 └─ _metadata.json
   ├─ .editorconfig
   ├─ angular.json
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ aunt.png
   │  ├─ barber.png
   │  ├─ carplaytrade.png
   │  ├─ CARTA_RECOMANACIO_MILENA.pdf
   │  ├─ catGB.glb
   │  ├─ catGF.gltf
   │  ├─ cv_en.pdf
   │  ├─ cv_es.pdf
   │  ├─ email.png
   │  ├─ favicon.ico
   │  ├─ fondo.gif
   │  ├─ games.png
   │  ├─ linkedin.png
   │  ├─ map.png
   │  ├─ nuska.png
   │  ├─ phone.png
   │  ├─ portfolio.png
   │  ├─ readmeimg
   │  ├─ return.png
   │  └─ return_down.png
   ├─ README.md
   ├─ src
   │  ├─ app
   │  │  ├─ app.component.css
   │  │  ├─ app.component.html
   │  │  ├─ app.component.spec.ts
   │  │  ├─ app.component.ts
   │  │  ├─ app.config.ts
   │  │  ├─ app.css
   │  │  ├─ app.html
   │  │  ├─ app.routes.ts
   │  │  ├─ app.spec.ts
   │  │  ├─ app.ts
   │  │  └─ components
   │  │     ├─ About-me
   │  │     │  ├─ about-me.css
   │  │     │  ├─ about-me.html
   │  │     │  ├─ about-me.spec.ts
   │  │     │  └─ about-me.ts
   │  │     ├─ Contact
   │  │     │  ├─ contact.css
   │  │     │  ├─ contact.html
   │  │     │  ├─ contact.spec.ts
   │  │     │  └─ contact.ts
   │  │     ├─ Home
   │  │     │  ├─ home.css
   │  │     │  ├─ home.html
   │  │     │  ├─ home.spec.ts
   │  │     │  └─ home.ts
   │  │     ├─ Loader
   │  │     │  ├─ loader.component.css
   │  │     │  ├─ loader.component.html
   │  │     │  ├─ loader.component.spec.ts
   │  │     │  └─ loader.component.ts
   │  │     ├─ Projects
   │  │     │  ├─ projects.css
   │  │     │  ├─ projects.html
   │  │     │  ├─ projects.spec.ts
   │  │     │  └─ projects.ts
   │  │     └─ Voxel-cat
   │  │        ├─ voxel-cat.component.css
   │  │        ├─ voxel-cat.component.html
   │  │        ├─ voxel-cat.component.spec.ts
   │  │        └─ voxel-cat.component.ts
   │  ├─ index.html
   │  ├─ main.ts
   │  └─ styles.css
   ├─ tsconfig.app.json
   ├─ tsconfig.json
   └─ tsconfig.spec.json

```
# Author: Milena
Passionate about technology, web design, and both frontend and backend development.
You can reach me through the social networks listed in the contact section of the site.
