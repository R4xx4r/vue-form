import Vue from 'vue'
import VueForm from './VueForm.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(VueForm),
}).$mount('#app')
