import { registerApplication, start } from 'single-spa'

registerApplication(
  'home-react', 
  () => import('./src/Home-React/main.app.js'),
  () => location.pathname === "/login" ? true : false
);

registerApplication(
  'login-react',
  () => import('./src/Login-React/main.app.js'),
  () => location.pathname === "/login"  ? true : false
);

start();