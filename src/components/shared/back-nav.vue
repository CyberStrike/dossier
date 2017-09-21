<template>
  <v-toolbar fixed class="white--text indigo elevation-3" dark>
    <v-slide-x-transition>
      <v-btn v-show="show" @click="$router.back(-1)" icon>
         <v-icon class="white--text">arrow_back</v-icon>
      </v-btn>
    </v-slide-x-transition>
    <v-slide-x-transition>
      <v-toolbar-title>Dossiers</v-toolbar-title>
    </v-slide-x-transition>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'backNav',
    data: function () {
            return {
              show: false
            }
          },
    mounted: function () {
      this.show = true
    }

  }
</script>

<style lang="scss">
</style>
