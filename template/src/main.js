{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import FastClick from 'fastclick'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import {
  DatetimePlugin,
  BusPlugin,
  DevicePlugin,
  ToastPlugin,
  AlertPlugin,
  ConfirmPlugin,
  LoadingPlugin,
  AjaxPlugin
} from 'vux'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(DevicePlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(ToastPlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(AlertPlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(ConfirmPlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(LoadingPlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(AjaxPlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(BusPlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(DatetimePlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

FastClick.attach(document.body){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
const vm = new Vue({
  router,
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}).$mount('#app-box'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const app = vm{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
