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
  <div id="Card">
    <div class="ui link cards">
      <div class="card">
        <div class="content">
          <!-- Prop 1 -->
          <img class="left floated mini ui image" src="/static/notepad.png">
          <!-- Prop 2 -->
          <div class="header">Notepad.exe</div>
          <div class="meta">
            <!-- Prop 3 -->
            <a>C:\System32\Notepad.exe</a>
          </div>
          <div class="description right floated">
            <!-- Prop 4 -->
            CTRL + SHIFT + N
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
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
