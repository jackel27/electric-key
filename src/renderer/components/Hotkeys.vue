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
    <card v-for="(item, key) in localStorage" :key="key" :path='item.path' :shortcut='item.shortcut'></card>
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
import path from 'path'
import fs from 'fs'
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
    let appDataPath = this.$electron.remote.app.getPath('desktop')
    console.log('output is: ', fs.existsSync(appDataPath, '\\hotkey-manager\\', 'hotkeys.json'))
    fs.open(path.join(appDataPath, '\\hotkey-manager\\', 'hotkeys.json'), 'wx', (err, fd) => {
      if (err) {
        if (err.code === 'EEXIST') {
          console.log('file already exists!')
          fs.readFile(path.join(appDataPath, '\\hotkey-manager\\', 'hotkeys.json'), (err, cb) => {
            if (err) console.log(err)
            console.log(appDataPath, ' <----?')
            // console.log('file is ', JSON.parse(cb.toString('utf-8')))
            this.localStorage = JSON.parse(cb.toString('utf-8'))
          })
          // return
        } else {
          // throw err
          console.log('W?HAT IN THE HECK!')
          fs.writeFile(path.join(appDataPath, '\\hotkey-manager\\', 'hotkeys.json'), '[]')
        }
      }
    })
    // local storage to disk...
    // this.localStorage = JSON.parse(window.localStorage.getItem('hotkey-manager'))
    // if (this.localStorage === null) {
    //   this.localStorage = []
    //   window.localStorage.setItem('hotkey-manager', JSON.stringify('[]'))
    // }
  },
  props: {
  },
  data () {
    return {
      localStorage: [''],
      modalAddNew: false,
      asdf: 'asdf'
    }
  },
  methods: {
    AddNew () {
      this.modalAddNew = !this.modalAddNew
    }
  }
}
</script>
