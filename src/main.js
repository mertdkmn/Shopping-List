import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store';
import Toaster from "@meforma/vue-toaster";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Toaster);
app.mount('#app');
