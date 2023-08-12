<template>
  <about-dialog />
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import AboutDialog from './components/AboutDialog.vue'

export default defineComponent({
  components: { AboutDialog },
  name: 'App'
})
</script>
<style>
.paragraph {
  margin-bottom: 1rem;
}
.section {
  margin-bottom: 2rem;
}
.text-h6 {
  color: maroon;
  margin-bottom: 0.5rem;
}
.createbtn {
  bg-color: green
}
</style>
