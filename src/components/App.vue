<template>
  <v-app>
    <template v-if="isPage('search')">
      <searchNav :query="$route.query.q"></searchNav>
    </template>
    <template v-else-if="isPage('home')">
      <defaultNav> </defaultNav>
    </template>
    <template v-else>
      <backNav></backNav>
    </template>
     <main>
       <router-view></router-view>
     </main>
     <v-footer></v-footer>
   </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import defaultNav from './shared/default-nav.vue'
import searchNav from './shared/search-nav.vue'
import backNav from './shared/back-nav.vue'

export default {
              name: 'app',
        components: { defaultNav, searchNav, backNav },
          computed: mapGetters({currentPage: 'currentPage'}),
           methods: {
                      isPage: function (name) {
                        return this.currentPage === name
                      },
                      ...mapActions(['setCurrentPage'])
                    },
          updated: function () {
                      this.setCurrentPage(this.$route.name)
                    }
}
</script>

<style lang="scss">
</style>
