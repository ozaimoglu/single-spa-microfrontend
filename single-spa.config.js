import { registerApplication, start } from 'single-spa'


registerApplication(
  'login-react',
  () => import('./src/Login-React/main.app.js'),
  () => location.pathname === "/"  ? true : false
);

registerApplication(
  'home-react', 
  () => import('./src/Home-React/main.app.js'),
  () => location.pathname === "/home" ? true : false
);

registerApplication(
  'navbar-react', 
  () => import('./src/Navbar-React/main.app.js'),
  () => location.pathname !== "/" ? true : false
);

registerApplication(
  'movies-react', 
  () => import('./src/Movies-React/main.app.js'),
  () => location.pathname === "/movies" ? true : false
);

registerApplication(
  'todo-react', 
  () => import('./src/Todo-React/main.app.js'),
  () => location.pathname === "/todo" ? true : false
);

registerApplication({
  name: "trivia-app",
  app: () => import('./src/trivia-app/src/react-mf-trivia.js'),
  activeWhen: "/gameMenu",
});

start();