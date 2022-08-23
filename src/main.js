import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

// PrimeFaces Styles
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css';

// Theme
import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import '../src/scss/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true, inputStyle: 'filled' });

app.mount('#app');
