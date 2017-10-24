<style scoped>
  .cards {
    padding: 2px;
  }
  #Hotkeys {
    display: flex;
    padding: 12px;
  }
</style>

<template>
  <div id="Hotkeys">
    <card></card>
    <add-new :modalactive="modalAddNew"></add-new>
    <div class="ui link cards">
      <div class="card" @click="AddNew()">
        <div class="center aligned grid content">
          <i class="add circle center aligned grid icon massive"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddNew from '@/components/Modals/AddNew'
import Card from '@/components/HotKeys/Card'
export default {
  name: 'Hotkeys',
  components: {
    AddNew,
    Card
  },
  computed: {
  },
  mounted () {
    console.log('Hotkeys is Mounted!')
  },
  props: {
  },
  data () {
    return {
      modalAddNew: false
    }
  },
  methods: {
    AddNew () {
      this.modalAddNew = !this.modalAddNew
    }
  }
}
</script>
