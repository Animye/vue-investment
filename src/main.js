import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Cell,
  Switch,
  MessageBox,
  Actionsheet,
  Checklist,
  Field
} from 'mint-ui'
import { Button, Upload, Select, Option, Checkbox } from 'element-ui'
import 'lib-flexible'
Vue.component(Checklist.name, Checklist)
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(Switch.name, Switch)
Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Upload.name, Upload)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Field.name, Field)
Vue.prototype.$messagebox = MessageBox
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
