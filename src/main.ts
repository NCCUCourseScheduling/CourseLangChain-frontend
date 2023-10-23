import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();

createApp(App).mount('#app')