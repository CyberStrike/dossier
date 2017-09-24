<template>
  <v-toolbar fixed  transition="slide-x-transition" class="white--text indigo elevation-3" dark>
    <v-btn icon>
      <v-icon class="white--text">face</v-icon>
    </v-btn>
    <v-toolbar-title>Dossiers</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn :to="{name: 'search'}" icon>
       <v-icon>search</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default { name: 'defaultNav' }
</script>
