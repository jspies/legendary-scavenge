<template>
  <div>
    <h2>Predator Stage 1 Scavenger Hunt</h2>
    <h4><a target="_new" href="https://wiki.guildwars2.com/wiki/The_Predator_I:_The_Experimental_Rifle">Predator I: The Experimental Rifle</a></h4>
    <md-table>
      <md-table-row v-for="item in predatorItems" v-bind:key="item.stage">
        <md-checkbox v-model="item.checked" @change="onCheckClick(item)"></md-checkbox>
        <md-table-cell>
          <a v-bind:href="item.itemLink" target="_new">{{item.item}}</a>
        </md-table-cell>
        <md-table-cell>
          {{item.location}}
        </md-table-cell>
        <md-table-cell>
          {{item.sublocation}}
        </md-table-cell>
        <md-table-cell>
          {{item.action}}
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Predator',
  computed: {
    ...mapGetters([
      'predatorItems'
    ])
  },
  methods: {
    ...mapActions(['addItem']),
    onCheckClick (row) {
      if (!row.checked) {
        this.$store.dispatch('addItem', row.item)
      } else {
        this.$store.dispatch('removeItem', row.item)
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('loadItems')
  }
}
</script>