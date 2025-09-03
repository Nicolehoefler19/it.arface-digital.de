import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.scss'
import { createRouter, createWebHistory } from 'vue-router'
import Imprint from './Imprint.vue'
import Home from './Home.vue'
import PrivacyPolicy from './PrivacyPolicy.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home,},
        {path: '/imprint.html', component: Imprint},
        {path: '/privacy-policy.html', component: PrivacyPolicy},
    ]
})

const app = createApp(App);

app.use(router);

app.mount('#app');