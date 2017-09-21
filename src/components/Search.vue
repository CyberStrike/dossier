<template>
  <people :per_page="per_page" :page="page" :query="q"></people>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import people from './People.vue'

export default {
        name: 'search',
  components: { people },
       props: {
                per_page: Number,
                page: Number,
                q: {
                        type: String,
                     default: ''
                   }
              },
        data: function () {
                return {
                  show: false
                }
              },
     methods: mapActions(['setCurrentPage']),
     mounted: function () {
                this.show = true;
              },
     beforeRouteEnter (to, from, next) {
       next( (vm) => {
         vm.setCurrentPage(vm.$route.name)
         return true
       })
     }
}
</script>

<style lang="scss">
</style>
