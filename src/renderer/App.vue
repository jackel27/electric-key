<template>
  <div id="app">
    <!-- <my-header></my-header> -->
    <!-- <my-menu></my-menu> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from '@/components/MyHeader'
  import MyMenu from '@/components/MyMenu'
  export default {
    name: 'hotkey-manager',
    components: {
      MyHeader,
      MyMenu
    }
  }
</script>

<style>
  @import '/static/semantic.slate.css'
</style>
