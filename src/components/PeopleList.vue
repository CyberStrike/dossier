<template>
  <v-slide-x-transition>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list>
            <v-list-tile avatar v-for="(person, index) in people" :key="index"
              @click="$router.push({name: 'person', params: {id: person.login.md5}})">
              <v-list-tile-avatar>
                <img v-bind:src="person.picture.thumbnail"/>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-text="getName(person, true)"></v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon class="indigo--text">info</v-icon>
              </v-list-tile-action>

            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-slide-x-transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {toTitleCase} from '../core/utilities'

export default {
           name: 'PeopleList',
          props: {
                   people: Array,
                   test: String
                 },
           data: function () {
                   return {
                     show: false
                   }
                 },
       computed: {
                   ...mapGetters({getCurrentPage: 'currentPage'})
                 },
        methods: {
                   getName (person, showHonorific) {
                     let honorific = showHonorific ? `${toTitleCase(person.name.title)}. ` : ''
                     return `${honorific}${toTitleCase(person.name.first)} ${toTitleCase(person.name.last)}`
                   },
                   ...mapActions(['setCurrentPage'])
                 },
        mounted: function () {
                  this.show = true
                 }
}
</script>

<style lang="scss"></style>
