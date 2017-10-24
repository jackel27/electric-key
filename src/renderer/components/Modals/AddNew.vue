<style scoped>
.modal-container {
    width: 100%;
    left: 0;
    z-index: 20;
    position: absolute;
    height: 100vh;
    background-color: rgba(0, 0, 0, .33);
}
</style>

<template>
  <div>
    <div :class="[modalactive ? 'modal-container' : '']" @click="$parent.AddNew">
    </div>
    <div class="ui modal" :class="[modalactive ? 'active' : '']">
      <div class="ui icon header">
        <i class="terminal icon"></i>
        Create New Shortcut
      </div>
      <div class="content">
        <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
      </div>
      <div class="actions">
        <div class="ui red basic cancel inverted button" @click="$parent.AddNew">
          <i class="remove icon"></i>
          Cancel
        </div>
        <div class="ui green ok inverted button">
          <i class="checkmark icon"></i>
          Save
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AddNew',
  components: {
  },
  computed: {
  },
  mounted () {
    console.log('AddNew is Mounted!')
  },
  props: {
    modalactive: false
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
