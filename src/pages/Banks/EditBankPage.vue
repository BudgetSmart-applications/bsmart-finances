<template>
  <div>
    <div class="text-h4">Edit {{ account.name }}</div>
    <div class="text-h6">{{ account.description }}</div>
  </div>
</template>

<script>
export default {
  name: 'EditAccountPage',
  data(){
    return {
      account: {
        name: 'Wells Fargo',
        description: 'Savings Account',
      }
    }
  },
  created(){
    this.account = this.$store.state.accounts.find(account => account.id === this.$route.params.id)
  }
}
</script>

<style>

</style>
