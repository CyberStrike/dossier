<script>
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
          mounted: function () {
                     this.show = true;
                   }
}
</script>

<template>
  <people :per_page="per_page" :page="page" :query="q"></people>
</template>
