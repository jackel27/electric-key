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

            <a class="item" href="/introduction/integrations.html">
              View All
              <div class="ui label">51</div>
            </a>

            <a class="item" href="/introduction/build-tools.html">
              Games
              <div class="ui label">5</div>
            </a>

            <a class="item" href="/introduction/advanced-usage.html">
              Applications
              <div class="ui label">24</div>
            </a>

            <a class="item" href="/introduction/glossary.html">
              Graphic Design
              <div class="ui label">22</div>
            </a>

            <a class="item" href="">
              New Folder
              <i class="plus icon"></i>
            </a>

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
    }
  },
  methods: {
  }
}
</script>
