<template>
  <div id="app">
    <!-- <my-header></my-header> -->
    <!-- <my-menu></my-menu> -->
    <router-view></router-view>
    <side-bar></side-bar>
  </div>
</template>

<script>
  import MyHeader from '@/components/MyHeader'
  import MyMenu from '@/components/MyMenu'
  import SideBar from '@/components/SideBar/SideBar'
  export default {
    name: 'hotkey-manager',
    components: {
      MyHeader,
      MyMenu,
      SideBar
    }
  }
</script>

<style>
  @import '/static/semantic.slate.css'
</style>
