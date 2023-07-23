<template>
  <div class="q-ma-md">
    <div class="text-h4">History & Logs</div>
      <div class="q-col-gutter-md row items-start">
        <div class="col-3">
          <q-img class="cursor-pointer" src="src/pages/icons/history.png">
          </q-img>
        </div>
        <div class="col-9">
          <data-table />
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
    return {}
  }

}
</script>

<style>

</style>
