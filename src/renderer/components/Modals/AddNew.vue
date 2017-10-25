<style scoped>
  .active-listener {
    border-color: #f45531!important;
  }
  .content {
    display: flex!important;
    justify-content: center!important;
    align-items: center!important;
    flex-direction: column!important;
  }
  .hotkey-entry {
    border-style: dashed!important;
    font-size: 1em;
    height: 100px;
    width: 500px;
    /* text-align: center; */
    justify-content: center;
    display: flex;
    align-items: center;
    margin: 0 auto;
    color: #21ce99;
    font-style: oblique;
    font-size:  1.2em;
    font-weight: 100;
  }
  .modal-container {
    width: 100%;
    left: 0;
    z-index: 20;
    position: absolute;
    height: 100vh;
    background-color: rgba(0, 0, 0, .33);
  }
  #path-text {
    margin-top: 12px;
    font-size: 1em;
    font-style: oblique;
  }
  .select-button {
    margin-top: 20px;
  }
  .select-button:hover {
    color: #21ce99;
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
        <h1 @click="CaptureKey" :class="ListenerActive ? 'active-listener' : ''" class="ui hotkey-entry block header" v-model="HotKey">
          <!-- {{ HotKey }} -->
          {{ HotKeyArray.join(' + ') }}

        </h1>
        <button class="ui active select-button button" @click="ChooseFile()">
          <i class="file icon"></i>
          Path to Shortcut
        </button>
        <p id="path-text"> {{ Path }} </p>
      </div>
      <div class="actions">
        <div class="ui red basic cancel inverted button" @click="$parent.AddNew">
          <i class="remove icon"></i>
          Cancel
        </div>
        <div class="ui green ok inverted button" @click="Save()">
          <i class="checkmark icon"></i>
          Save
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import iconExtractor from 'icon-extractor'
import path from 'path'
import fs from 'fs'
export default {
  name: 'AddNew',
  components: {
  },
  computed: {
  },
  mounted () {
    // this.$electron.remote.globalShortcut.register('s+CommandOrControl', () => {
    //   console.log('CommandOrControl+X is pressed 23')
    // })
    // console.log('AddNew is Mounted!')
  },
  props: {
    modalactive: false
  },
  data () {
    return {
      Path: '',
      HotKey: 'Click to Edit / Clear',
      HotKeySet: new Set(),
      HotKeyArray: ['Click to Edit / Clear'],
      ListenerActive: false,
      KeyUpQty: 0,
      ElectronKey: []
    }
  },
  methods: {
    Save () {
      iconExtractor.emitter.on('icon', (iconData) => {
        this.$parent.localStorage.push({
          icon: iconData.Base64ImageData,
          path: this.Path,
          shortcut: this.ElectronKey.join(' + ')
        })
        fs.writeFileSync(path.join(this.$electron.remote.app.getPath('desktop'), '\\hotkey-manager\\', 'hotkeys.json'), JSON.stringify(this.$parent.localStorage))
      })
      iconExtractor.getIcon('booya?', this.Path)
      let savePath = this.$electron.remote.app.getPath('desktop')
      console.log(savePath)
      // console.log(this.$parent.localStorage, ' <------localStorage')
      //
      // no more local storage
      // window.localStorage.setItem('hotkey-manager', JSON.stringify(this.$parent.localStorage))
      // this.$electron.remote.globalShortcut.unregisterAll()
      // for (let x = 0; x < this.$parent.localStorage.length; x++) {
      //   this.$electron.remote.globalShortcut.register(this.$parent.localStorage[x].shortcut, () => {
      //     this.$electron.remote.shell.openExternal(this.$parent.localStorage[x].path)
      //   })
      // }
    },
    ChooseFile () {
      this.$electron.remote.dialog.showOpenDialog({properties: ['openFile']}, (cb) => {
        console.log(cb)
        this.Path = cb[0]
      })
    },
    OnKeyHandler (e) {
      console.log(e.key)
      this.HotKeySet.add(e.key)
      this.HotKeyArray = [...this.HotKeySet]
    },
    SortSwitch (val) {
      switch (val) {
        case 'Control':
          this.ElectronKey.push('CommandOrControl')
          break
        case 'Shift':
          this.ElectronKey.push('Shift')
          break
        case 'Alt':
          this.ElectronKey.push('Alt')
          break
        case 'Meta':
          this.ElectronKey.push('Super')
          break
        default:
          this.ElectronKey.push(val.toUpperCase())
      }
    },
    SortKeys () {
      for (let x = 0; x < this.HotKeyArray.length; x++) {
        this.SortSwitch(this.HotKeyArray[x])
      }
      console.log(this.ElectronKey.join(' + '))
    },
    OnKeyHandlerUp (e) {
      this.KeyUpQty++
      // console.log(this.HotKeySet.size + ' === ' + this.KeyUpQty)
      if (this.HotKeySet.size === this.KeyUpQty) {
        this.RemoveListener()
      }
    },
    AddListener () {
      this.ListenerActive = true
      this.KeyUpQty = 0
      this.ElectronKey = []
      this.HotKeySet.clear()
      this.HotKeyArray = []
      window.addEventListener('keydown', this.OnKeyHandler)
      window.addEventListener('keyup', this.OnKeyHandlerUp)
    },
    RemoveListener () {
      this.SortKeys()
      this.KeyUpQty = 0
      this.ListenerActive = false
      window.removeEventListener('keydown', this.OnKeyHandler)
      window.removeEventListener('keyup', this.OnKeyHandlerUp)
    },
    CaptureKey () {
      this.HotKey = ''
      this.AddListener()
    }
  }
}
</script>
