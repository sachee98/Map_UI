import './assets/main.css'
import 'primeicons/primeicons.css';
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';


const app = createApp(App);
app.use(PrimeVue);

app.component('InputText', InputText)

app.mount('#app')
