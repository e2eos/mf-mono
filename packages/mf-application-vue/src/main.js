import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'

import App from './App.vue'
import router from './router'

import { mfMode } from '@mf/shared-dependencies-vue'

Vue.config.productionTip = false

const vueOptions = {
  router,
  render: h => h(App)
}

// 判断当前页面使用singleSpa应用,不是就渲染
if (!mfMode()) {
  delete vueOptions.el
  new Vue(vueOptions).$mount('#app')
}

// singleSpaVue包装一个vue微前端服务对象
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: vueOptions
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
