import Vue      from 'vue'
import store    from './store'
import router   from './core/router'
import Vuetify  from 'vuetify'
import axios    from 'axios'
import VueAxios from 'vue-axios'

import App     from './components/App.vue'

Vue.use(Vuetify)
Vue.use(VueAxios, axios)


new Vue({store, router, render: h => h(App)}).$mount('#app')
