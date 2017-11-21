<style scoped>
.ui.menu {
  text-shadow: none;
  font-size: 1.5em;
}
.header {
  padding: 14px;
}
#SideBar > div > div {
  background: #202425;
}
.item {
  color: white!important;
}
</style>

<template>
  <div id="SideBar">
   <div class="toc" style="min-height: 1813px;">
      <div class="ui vertical inverted sticky menu fixed top" style="left: 0px; top: 0px; width: 250px !important; height: 1813px !important; margin-top: 0px;">
          <div class="header">Folders</div>
          <div class="menu">
            <a class="item" @click="ChangeCat('all')" href="#">
              All
            </a>
            <a v-for="cat in $parent.categories" class="item" @click="ChangeCat(cat)" href="#">
              {{ cat }}
              <!-- <div class="ui label">51</div> -->
            </a>
<!--             <a class="item" href="">
              New Folder
              <i class="plus icon"></i>
            </a> -->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  components: {
  },
  computed: {
  },
  mounted () {
    console.log('SideBar is Mounted!')
  },
  props: {
  },
  data () {
    return {
      catItemQty: []
    }
  },
  methods: {
    ChangeCat (cat) {
      if (cat !== 'All') {
        this.$parent.activecat = cat
      } else {
        this.$parent.activecat = true
      }
    }
  }
}
</script>
