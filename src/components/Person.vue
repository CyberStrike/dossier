<script>
import { mapGetters, mapActions } from 'vuex'
import { toTitleCase } from '../core/utilities'

export default {
      name: 'person',
     props: {
              id: String
            },
      data: function () {
              return {
                nationality: 'Unknown',
                show: false
              }
            },
   filters: { toTitleCase },
   methods: {
             getNationality: function () {
                               let that = this
                               let url = `https://restcountries.eu/rest/v2/alpha/${this.person.nat}`

                               this.$http.get(url)
                                   .then( res => res.data.name )
                                   .then( name => that.nationality = name)
                             }
            },
  computed: {
                person: function () {
                          return this.people.filter(person => person.login.md5.indexOf(this.id) >= 0)[0]
                        },
              fullName: function () {
                          return `${toTitleCase(this.person.name.title)}.  ${toTitleCase(this.person.name.first)} ${toTitleCase(this.person.name.last)}`
                        },
              ...mapGetters({people: 'people'})
            },
   mounted: function () {
              this.getNationality()
              this.show = true
            },
     watch: {
             '$route' (to, from) {
               this.getNationality()
             }
            }
}
</script>

<template>
  <v-slide-x-transition>
    <v-container v-show="show">
      <v-layout row>
        <v-flex xs12 text-xs-center>
          <v-avatar class="mb-3" size=100>
            <img :src="person.picture.large" :alt="fullName">
          </v-avatar>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <h2 class="text-xs-center">{{fullName}}</h2>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-list two-line>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="indigo--text">language</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{nationality}}</v-list-tile-title>
                  <v-list-tile-sub-title>Nationality</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="indigo--text">accessibility</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{person.gender | toTitleCase}}</v-list-tile-title>
                  <v-list-tile-sub-title>Gender</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-subheader inset>Contact</v-subheader>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="indigo--text">smartphone</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{person.cell}}</v-list-tile-title>
                  <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="indigo--text">home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{person.phone}}</v-list-tile-title>
                  <v-list-tile-sub-title>Home</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="indigo--text">mail</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{person.email}}</v-list-tile-title>
                  <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>


              <v-subheader inset>Addresses</v-subheader>

              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="indigo--text">location_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>1400 Main Street</v-list-tile-title>
                  <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-slide-x-transition>
</template>
