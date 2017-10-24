<style scoped>
</style>

<template>
  <div id="MyMenu">
    <div class="ui segment">
      <div class="ui menu fluid three item">
        <router-link class="item" :class="{'active': $route.fullPath ==='/'}"         to="hotkeys">HotKeys</router-link>
        <router-link class="item" :class="{'active': $route.fullPath ==='/Settings'}" to="Settings">Settings</router-link>
        <router-link class="item" :class="{'active': $route.fullPath ==='/About'}"    to="About">About</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-menu',
  components: {
  },
  computed: {
  },
  mounted () {
    console.log('My-Menu is Mounted!')
  },
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
