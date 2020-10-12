import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入css样式
import "./assets/style/reset.stylus";

//移动端适配
import "amfe-flexible";

//引入Vant框架
import { Tabbar, TabbarItem, Tab, Tabs, NavBar } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')