<style scoped>
.hotkeymodaltext {
  color: black;
}
.entry-modal-body {
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div id="card">

    <div class="modal" :class="keyinput ? 'is-active' : ''">
      <div class="modal-background"></div>
      <div class="modal-card">
        <div class="entry-modal-body modal-card-body">
          <ul>
            <span class="hotkeymodaltext" v-for="item in testkey">
              {{ item }}
            </span>
          </ul>
        </div>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="saveShortcut()">Save changes</button>
          <button class="button is-danger" @click="shortcutEntry()">Cancel</button>
          <button class="button is-warning" @click="clearEntry()">Clear</button>
        </footer>
        <button class="modal-close is-large"  @click="shortcutEntry()" aria-label="close"></button>
      </div>
    </div>

    <div class="card">
      <header class="card-header">
        <p class="card-header-title" @click="toggle">
          {{ savedItem.name }}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fa" v-bind:class="active ? 'fa-angle-up' : 'fa-angle-down'" @click="toggle" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content" v-show="active">
        <div class="content">
          <input class="input" @click="shortcutEntry()" type="text" :value="savedItem.shortcut">

          <br>
          <div class="file has-name">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fa fa-upload"></i>
                </span>
                <span class="file-label">
                  Choose a file…
                </span>
              </span>
              <span class="file-name">
                {{ savedItem.path }}
              </span>
            </label>
          </div>

        </div>
      </div>
      <footer class="card-footer" v-show="active">
        <!-- <a href="#" class="card-footer-item">Save</a> -->
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  components: {
  },
  computed: {
  },
  mounted () {
    console.log('card is Mounted!')
    window.addEventListener('keydown', (e) => {
      console.log(e.key)
      if (!this.tempkey.has(e.key)) {
        this.testkey.push(e.key)
      }
      this.tempkey.add(e.key)
      console.log(this.tempkey)
    })
    window.addEventListener('keypress', (e) => {
      console.log('key pressed')
    })
  },
  props: {
    savedItem: null
  },
  data () {
    return {
      keycount: 0,
      testkey: [],
      tempkey: new Set(),
      edit: false,
      active: false,
      keyinput: false
    }
  },
  methods: {
    saveShortcut () {
      console.log('SAVED!')
      console.log(this.savedItem.shortcut)
      this.$ls.set('macros', this.testkey)
    },
    clearEntry () {
      this.tempkey.clear()
      this.testkey = []
    },
    shortcutEntry () {
      this.keyinput = !this.keyinput
      if (!this.keyinput) {
        this.clearEntry()
      }
    },
    toggle () {
      this.active = !this.active
    }
  }
}
</script>
