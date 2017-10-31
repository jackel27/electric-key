<style scoped>
#ContextMenu {
  position: absolute;
  z-index: 99;
  box-shadow: 10px 10px 34px 3px rgba(0,0,0,0.46)
}
</style>

<template>
  <div class="ui vertical menu" contextmenu="cardmenu" id="ContextMenu" :style="{left: left + 'px', top: top + 'px'}">
    <a class="item">
      Edit
      <div class="ui label"><i class="pencil outline icon"></i></div>
    </a>
    <a class="item">
      Delete
      <div class="ui label"><i class="trash outline icon"></i></div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ContextMenu',
  components: {
  },
  computed: {
  },
  mounted () {
    console.log('ContextMenu is Mounted!')
  },
  props: {
    left: '',
    top: ''
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
