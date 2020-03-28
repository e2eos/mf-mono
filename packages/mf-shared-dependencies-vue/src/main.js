import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'

// import App from "./App.vue";
// import router from "./router";

Vue.config.productionTip = false

// const vueOptions = {
//   router,
//   render: h => h(App)
// };

// 判断当前页面使用singleSpa应用,不是就渲染
// if (!window.singleSpaNavigate) {
//   new Vue(vueOptions).$mount("#app");
// }

export const components = { HelloWorld }
