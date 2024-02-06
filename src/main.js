import { createApp } from 'vue';
import './assets/main.css';
import * as VueRouter from 'vue-router';
import App from './App.vue'
import OrderNow from './views/OrderNow.vue';
import ContactPage from './views/ContactPage.vue';
import AboutUs from './views/AboutUs.vue';
import HomePage from './views/HomePage.vue';
import OurProducts from './views/OurProducts.vue';

const routes =  [
     {path:'/', component: HomePage},   
     {path:'/ContactPage', component: ContactPage},   
     { path:'/AboutUs', component: AboutUs},
     { path:'/OurProducts', component: OurProducts},
     { path:'/OrderNow', component: OrderNow}]


const router = VueRouter.createRouter({
        history: VueRouter.createWebHistory(), routes
     })
const app = createApp(App);
app.use(router);
app.mount("#app")

