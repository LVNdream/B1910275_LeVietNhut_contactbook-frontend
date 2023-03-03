import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.js";

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(fab, fas, far)
// Vue.component('font-awesome-icon', FontAwesomeIcon)


import './assets/main.css';

import './assets/form.css';

createApp(App).use(router).mount('#app')
