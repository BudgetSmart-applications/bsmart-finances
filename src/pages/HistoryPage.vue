<template>
  <div class="q-ma-md">
    <div class="text-h4">Alerts, Logs, History</div>
      <div class="q-col-gutter-md row items-start">

        <div class="col-12">
          <q-select
      dense
      emit-value
      option-value="value"
      option-label="label"
      class="q-py-sm"
      :options="['View Error Logs', 'View Transaction History']"
      outlined
      v-model="logs"
      label="View logs"
      @update:model-value="switchLogs()"
    />
          <data-table
          image="/src/pages/icons/history.png"
            :title="tableTitle"
          />
        </div>
    </div>
  </div>
</template>

<script>
import DataTable from 'src/components/DataTable.vue'
export default {
  components: { DataTable },
  name: 'HistoryPage',
  data(){
    return {
      logs: [],
      tableTitle: 'History',
    }
  },
  methods: {
    switchLogs(){
      if(this.logs === 'View Error Logs'){
        this.$router.push('/error-logs')
      } else if(this.logs === 'View Transaction History'){
        this.$router.push('/transaction-history')
      }
    }
  }
}
</script>

<style>

</style>
