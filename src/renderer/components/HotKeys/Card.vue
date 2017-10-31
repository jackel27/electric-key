<style scoped>
  .image {
    width: 50px;
    height: 50px;
  }
  .cards {
    padding: 2px;
  }
</style>

<template>
  <div :id="uniqueid" @contextmenu="$parent.clickHandler">
    <div class="ui link cards">
      <div class="card">
        <div class="content">
          <!-- Prop 1 -->
          <!-- <img src="data:image/png;base64, -->
          <!-- <img class="left floated mini ui image" src="/static/notepad.png"> -->
          <img :src="dataicon" class="left floated mini ui image" alt="">
          <!-- Prop 2 -->
          <div class="header">{{ path.split('\\').pop() }}</div>
          <div class="meta">
            <!-- Prop 3 -->
            <!-- <a>{{ path }}</a> -->
          </div>
          <div class="description right floated">
            <!-- Prop 4 -->
            {{ shortcut }}
          </div>
        </div>
        <!-- Instead of text, border color green = enabled, red = disabled. -->
<!--         <div class="extra centered content">
          <span class="ui center aligned grid">
            Prop 5
            Enabled
            <i class="check icon"></i>
          </span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {
  },
  computed: {
  },
  mounted () {
    console.log('Card is Mounted!')
  },
  props: {
    uniqueid: '',
    path: '',
    shortcut: '',
    icon: ''
  },
  data () {
    return {
      dataicon: 'data:image/png;base64, ' + this.icon
    }
  },
  methods: {
  }
}
</script>
