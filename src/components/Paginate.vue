<template>
  <div>
    <slot :paginated="paginated"></slot>
    <div class="text-xs-center mt-4">
      <v-slide-x-transition>
        <v-pagination :length="10" :value="1"></v-pagination>
      </v-slide-x-transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'paginate',
  props: {
    list: Array,
  },
  computed: {
    paginated: function () {
      return this.list.slice(0, 10)
    }
  }
}
</script>

<style lang="scss">
</style>
