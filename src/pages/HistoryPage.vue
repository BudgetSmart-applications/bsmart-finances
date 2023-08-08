<template>
  <div class="q-ma-md">
    <div class="text-h4">Alerts, Logs, History</div>
    <div class="q-col-gutter-md row items-start">
      <div class="col-12">
        <q-select
          dense
          emit-labelledby="label"
          option-value="value"
          option-label="label"
          class="q-py-sm"
          :options="options"
          outlined
          v-model="logs"
          label="View logs"
          @update:model-value="switchLogs()"
        />
        <data-table image="/src/pages/icons/history.png" :columns="columns" :title="tableTitle" />
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from "src/components/DataTable.vue";
export default {
  components: { DataTable },
  name: "HistoryPage",
  data() {
    return {
      logs: [],
      columns: [],
      options: [
        {
          label: "View all messages",
          value: "all-messages",
        },
        {
          label: "View Error Messages",
          value: "error-messages",
        },
        {
          label: "View Transaction Messages",
          value: "transactions-messages",
        },
      ],
      tableTitle: "History",
    };
  },
  methods: {
    switchLogs() {
      console.log("calling switchLogs()");
      this.tableTitle = this.logs.label;
      // fetch the column headers
      // load the column headers
      // display the column headers
      this.columns = [
        {
          name: "date",
          label: "Date",
          field: "date",
          align: "left",
          sortable: true,
        },
        {
          name: "message",
          label: "Message",
          field: "message",
          align: "left",
          sortable: true,
        },
      ];
      // fetch the logs
      // filter the logs
      // display the filtered logs

    },
  },
};
</script>

<style></style>
