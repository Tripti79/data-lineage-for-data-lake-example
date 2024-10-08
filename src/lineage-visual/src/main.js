import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";


Vue.config.productionTip = false
//axios.defaults.baseURL = "https://xxx.execute-api.aws_region.amazonaws.com/dev";
axios.defaults.baseURL = "https://f1xe47nbdb.execute-api.ap-south-1.amazonaws.com/dev"; //-- FE

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
