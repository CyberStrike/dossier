<script>

import defaultNav from './shared/default-nav.vue'
import searchNav from './shared/search-nav.vue'
import backNav from './shared/back-nav.vue'

export default {
        name: 'app',
  components: { defaultNav, searchNav, backNav },
    computed: {
                currentNav: function () {
                  if (this.$route.name == "search") return 'searchNav'
                  if (this.$route.name == "home") return 'defaultNav'
                  return 'backNav'
                }
              }
}
</script>

<template>
  <v-app>
    <component :is="currentNav" :query="$route.query.q"></component>
     <main>
       <router-view></router-view>
     </main>
     <v-footer></v-footer>
   </v-app>
</template>

<style media="screen">
  main {
    margin-top: 45px;
  }
</style>
