<template>
  <v-slide-x-transition>
    <v-container fluid>
      <paginate :list="people">
        <template scope="props">
          <peoplelist :people="props.paginated"></peoplelist>
        </template>
      </paginate>
    </v-container fluid>
  </v-slide-x-transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import peoplelist from './PeopleList.vue'
import paginate from './Paginate.vue'

export default {
    name: 'test',
    components : {peoplelist, paginate},
    computed: mapGetters({people: 'people', getCurrentPage: 'currentPage'})
}
</script>

<style lang="scss">
</style>
