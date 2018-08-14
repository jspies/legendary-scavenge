<template>
  <div>
    <md-dialog md-open-from="#custom" md-close-to="#custom" ref="helpDialog">
      <md-dialog-title>API Key</md-dialog-title>

      <md-dialog-content>
        <p>
          You can get your API Key here
        </p>
        <p>
          <a target="_new" href="https://account.arena.net/applications">https://account.arena.net/applications</a>
        </p>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog('helpDialog')">Ok</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-input-container>
      <md-button class="md-icon-button" @click="showDialog('helpDialog')"><md-icon >help</md-icon></md-button>
      <md-input v-model="apiKey" placeholder="Api Key"></md-input>
      <md-button @click="loadAPIKey"><md-icon>search</md-icon></md-button>
    </md-input-container>

    <md-toolbar class="md-transparent">
      <h2 style="flex: 1" class="md-title">Predator Stage 1 Scavenger Hunt</h2>
      <md-button class="md-right"><a target="_new" href="https://wiki.guildwars2.com/wiki/The_Predator_I:_The_Experimental_Rifle">Predator I: The Experimental Rifle</a></md-button>
    </md-toolbar>
    
    <md-table>
      <md-table-body>
        <md-table-row v-for="item in predatorItems" v-bind:key="item.stage">
          <md-table-cell>
            <md-icon>empty</md-icon>
            <md-icon v-if="item.checked">checked</md-icon>
          </md-table-cell>
          <md-table-cell>
            <a v-bind:href="wikiLink(item.name)" target="_new">{{item.name}}</a>
          </md-table-cell>
          <md-table-cell>
            <a v-bind:href="wikiLink(item.extra.location)" target="new" >{{item.extra.location}}</a>
          </md-table-cell>
          <md-table-cell>
            {{item.extra.sublocation}}
          </md-table-cell>
          <md-table-cell>
            {{item.extra.action}}
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Predator',
  data () {
    return {
      apiKey: null
    }
  },
  computed: {
    ...mapGetters([
      'predatorItems'
    ])
  },
  methods: {
    ...mapActions(['addItem']),

    loadAPIKey () {
      localStorage.setItem('apiKey', this.apiKey)
      this.$store.dispatch('getPersonalAchievement', this.apiKey)
    },

    wikiLink (name) {
      return `https://wiki.guildwars2.com/wiki/${encodeURIComponent(name.replace(/\s/g, '_'))}`
    },

    closeDialog (d) {
      this.$refs[d].close()
    },

    showDialog (d) {
      this.$refs[d].open()
    },

    openSide () {
      this.$refs.rightSidenav.open()
    }
  },
  beforeMount () {
    this.$store.dispatch('loadAchievement')
    this.apiKey = localStorage.getItem('apiKey')
    if (this.apiKey) {
      this.$store.dispatch('getPersonalAchievement', this.apiKey)
    }
  }
}
</script>
<style>

</style>