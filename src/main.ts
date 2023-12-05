import './assets/main.css'

import { createApp, type Component } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);

const layouts = import.meta.glob('./layouts/*.vue');

Object.entries(layouts).forEach(async ([path, component]) => {
    const componentName = path!
      .split('/')!
      .pop()!
      .replace(/.\w+$/, '');
  
    // Utilisez une assertion de type ici
    const componentModule = (await componentPromise()) as { default: any };
    app.component(componentName, componentModule.default);
  });

app.use(router).mount('#app');

function componentPromise(): { default: any; } | PromiseLike<{ default: any; }> {
    throw new Error('Function not implemented.');
}

