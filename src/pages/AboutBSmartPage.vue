<template>
  <q-page>
    <div>
      <h1 class="text-h6">About your BudgetSmart App</h1>
      <p class="text-subtitle1">It doesn't matter if you are on a fixed budget or not, BSmart will help you manage your finances.</p>
      <p class="text-subtitle1">Use this guide to assist you in building your BSmart financial system!</p>
      <p class="text-subtitle1">This app is designed to help you manage your finances.
        It is not a replacement for your bank's online banking system.
        It is a tool to help you manage your finances, increase your spending power and to make wise decisions.</p>
      <p>Use the menu to the right to navigate this document.</p>
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
  name: 'AboutBSmartPage'
})
</script>
