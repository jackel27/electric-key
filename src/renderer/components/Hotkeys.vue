<style scoped>
  .cards {
    padding: 2px;
  }
  #Hotkeys {
    display: flex;
    padding: 12px;
    flex-wrap: wrap;
    margin-left: 250px;
  }
  .card {
    height: 170px;
  }
</style>

<template>
  <div id="Hotkeys">
    <side-bar></side-bar>
    <context-menu v-on-clickaway="outsideClick" v-if="contextmenu" :left="left" :top="top"></context-menu>
    <card v-if="activecat === 'all' || item && item.category == activecat" :uniqueid="key" v-for="(item, key) in localStorage" :icon="item.icon" :key="key" :path='item.path' :shortcut='item.shortcut'></card>
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
import ContextMenu from '@/components/ContextMenus/ContextMenu'
import { directive as onClickaway } from 'vue-clickaway'
import fs from 'fs-extra'
import AddNew from '@/components/Modals/AddNew'
import Card from '@/components/HotKeys/Card'
import SideBar from '@/components/SideBar/SideBar'
export default {
  name: 'Hotkeys',
  components: {
    AddNew,
    Card,
    ContextMenu,
    SideBar
  },
  computed: {
  },
  mounted () {
    let appDataPath = this.$electron.remote.app.getPath('appData')
    let path = appDataPath + '\\electric-key\\' + 'hotkeys.json'
    let categories = appDataPath + '\\electric-key\\' + 'categories.json'
    // Ensure directory and file exist for both......
    fs.ensureFile(categories, err => {
      if (err) console.log(err)
    })
    fs.readJson(categories).then((cb) => {
      this.categories = cb
    }).catch((error) => {
      console.log(error)
    })
    fs.ensureFile(path, err => {
      // file has now been created, including the directory it is to be placed in
      if (err) console.log(err)
    })
    fs.readJson(path).then((cb) => {
      this.localStorage = cb
      cb.forEach((item) => {
        console.log(item.shortcut)
        this.$electron.remote.globalShortcut.register(item.shortcut, () => {
          this.$electron.shell.openExternal(item.path)
          console.log('opening... ', item.path.split('\\').pop())
        })
      })
      console.log(cb)
    }).catch((error) => {
      console.log(error)
    })
  },
  props: {
  },
  data () {
    return {
      activecat: '',
      categories: [],
      localStorage: [],
      modalAddNew: false,
      asdf: 'asdf',
      left: '',
      top: '',
      contextmenu: false
    }
  },
  directives: {
    onClickaway
  },
  methods: {
    outsideClick () {
      console.log('outside clicked! ')
      this.contextmenu = false
    },
    AddNew () {
      this.modalAddNew = !this.modalAddNew
    },
    clickHandler (e) {
      console.log('handling....')
      this.contextmenu = true
      console.log('handling right click... ', e)
      console.log(e.screenX, 'x  <--->  y', e.screenY)
      // left and top
      this.top = e.y
      this.left = e.x
    }
  }
}
</script>
