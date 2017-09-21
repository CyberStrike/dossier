<template>
  <v-slide-x-transition>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-list>
              <v-list-tile avatar v-for="(person, index) in paginatedSearch"
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
          <div class="text-xs-center mt-4">
            <v-slide-x-transition>
              <v-pagination v-show="hidePagination" :length="pageCount" :value="page" @input="current_page"></v-pagination>
            </v-slide-x-transition>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-slide-x-transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {toTitleCase} from '../core/utilities'

export default {
           name: 'People',
          props: {
                   page: Number,
                   per_page: Number,
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
                   searchPeople () {
                     return this.people
                         .filter(
                            person =>  this.getName(person, false)
                                       .toUpperCase().indexOf(this.query.toUpperCase()) >= 0
                        )
                    },
                   paginatedSearch () {
                     return this.paginate(this.page, this.per_page, this.searchPeople)
                   },
                   pageCount () {
                     return Math.ceil(this.searchPeople.length / this.per_page)
                   },
                   hidePagination () {
                     return !(this.searchPeople.length <= this.per_page)
                   },
                   ...mapGetters({people: 'people', getCurrentPage: 'currentPage'})
                 },
        methods: {
                   current_page (v) {
                     this.$router.replace({query: { page: Number(v), per_page: this.per_page, q: this.query }})
                   },
                   paginate (per, total, arr) {
                     if (arr.length === total.length) return arr
                     return arr.slice((per * total) - total , total * per )
                   },
                   getName (person, showHonorific) {
                     let honorific = showHonorific ? `${toTitleCase(person.name.title)}. ` : ''
                     return `${honorific}${toTitleCase(person.name.first)} ${toTitleCase(person.name.last)}`
                   },
                   ...mapActions(['setCurrentPage'])
                 },
        mounted: function () {
                  this.show = true
                 },
   beforeUpdate: function () {
                   // Check if any records in paginated results
                   const invalidPageNumber = this.paginatedSearch.length <= 0
                   // If the page is out of range of the page size set to 1
                   if (invalidPageNumber) this.current_page(1);
                 }
}
</script>

<style lang="scss"></style>
