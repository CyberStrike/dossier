<template>
  <v-toolbar fixed class="white--text indigo elevation-3" dark>
    <v-slide-x-transition>
      <v-btn v-show="show" @click="$router.back(-1)" icon>
         <v-icon class="white--text">arrow_back</v-icon>
      </v-btn>
    </v-slide-x-transition>
    <v-slide-x-transition>
      <input v-model="search"
             name="search" label="Search" placeholder="Search"
             style="width: 100%; font-size: 2rem; outline: none;"/>
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
        data: function () {
                return {
                  show: false
                }
               },
    computed: {
                search: {
                  get () {
                    return this.query
                  },
                  set (value) {
                    if (value.length === 0) return this.$router.replace({q: {} })
                    this.$router.replace({query: {q: value}})
                  }
                }
              },
     methods: {
                clearSearch () {
                  this.$router.replace({query: {} })
                }
              },
     mounted: function () {
                this.show = true
              }
  }
</script>

<style lang="scss">
</style>
