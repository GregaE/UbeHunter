import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './styles/main.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './App.vue';

const pinia = createPinia();

createApp(App).use(pinia).mount('#app')
