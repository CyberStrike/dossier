<template>
  <v-toolbar fixed class="white--text indigo elevation-3" dark>
    <v-slide-x-transition>
      <v-btn v-show="show" @click="$router.back(-1)" icon>
         <v-icon class="white--text">arrow_back</v-icon>
      </v-btn>
    </v-slide-x-transition>
    <v-slide-x-transition>
      <input class="search-box" autofocus v-model="search"
             name="search" label="Search" placeholder="Search"
             />
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-btn v-show="show" @click="clearSearch" icon>
        <v-icon class="white--text">close</v-icon>
      </v-btn>
    </v-slide-x-transition>
  </v-toolbar>
</template>

<script>
  export default {
        name: 'searchNav',
       props: {
                query: {
                         type: String,
                         default: ''
                       }
              },
        data: () => ({ show: false }),
    computed: {
                search: {
                  get () {
                    return this.query
                  },
                  set (value) {
                    let emptyInput = value.length === 0
                    if ( emptyInput ) return this.$router.replace({q: {} })
                    this.$router.replace({query: {q: value}})
                  }
                }
              },
     methods: {
                clearSearch () {
                  this.$router.replace({query: {} })
                }
              },
     mounted: function () { this.show = !this.show }
  }
</script>

<style lang="sass" media="screen">
  .search-box
    width: 100%
    font-size: 2rem
    outline: none
</style>
