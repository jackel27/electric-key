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
</style>

<template>
  <div id="Hotkeys">
    <context-menu v-on-clickaway="outsideClick" v-if="contextmenu" :left="left" :top="top"></context-menu>
    <card v-if="item" :uniqueid="key" v-for="(item, key) in localStorage" :icon="item.icon" :key="key" :path='item.path' :shortcut='item.shortcut'></card>
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
export default {
  name: 'Hotkeys',
  components: {
    AddNew,
    Card,
    ContextMenu
  },
  computed: {
  },
  mounted () {
    let appDataPath = this.$electron.remote.app.getPath('appData')
    let path = appDataPath + '\\hotkey-manager\\' + 'hotkeys.json'
    // Ensure directory and file exist......
    fs.ensureFile(path, err => {
      // file has now been created, including the directory it is to be placed in
      if (err) console.log(err)
    })
    fs.readJson(path).then((cb) => {
      this.localStorage = cb
    }).catch((error) => {
      console.log(error)
    })
  },
  props: {
  },
  data () {
    return {
      localStorage: [''],
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
