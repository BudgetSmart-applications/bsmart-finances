<template>
  <q-page>
    <div>
      <h1 class="text-h6">Welcome to your BudgetSmart App</h1>
      <p class="text-subtitle1">Use this starter page to build your first BSmart financial account!</p>
      <q-btn
        color="primary"
        label="Go to Bank Accounts"
        to="/banks"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
