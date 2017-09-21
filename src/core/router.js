import Vue       from 'vue'
import VueRouter from 'vue-router'

import People from '../components/People.vue'
import Person from '../components/Person.vue'
import Search from '../components/Search.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
            {
                   name: 'home',
              component: People,
                  props: (route) => ({
                          page: Number(route.query.page) || 1,
                          per_page: Number(route.query.per_page) || 10,
                        }),
                   path: '/'
            },
            {
                   name: 'search',
              component: Search,
                  props: (route) => ({
                          q: route.query.q || '',
                          page: Number(route.query.page) || 1,
                          per_page: Number(route.query.per_page) || 10,
                        }),
                   path: '/s'
            },
            {
                   name: 'person',
              component: Person,
                   path: '/person/:id',
                   props: (route) => ({
                           id: Number(route.params.id) || 0
                         }),
            }
          ]
})
