<template>
  <div class="q-ma-md">
    <div class="text-h4">Recent Logs</div>
    <div class="text-subtitle1">View events that have recently been logged</div>
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
          label="Switch View"
          @update:model-value="switchLogs()"
        />
        <data-table image="/src/pages/icons/history.png" :rows="logMessages" :columns="columns" action="logs" title="Recent logs" />
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
      tableTitle: "Recent logs",
      logs: [],
      columns: [
        {
          name: "updated",
          label: "Updated",
          field: "updated",
          align: "left",
          sortable: true,
        },
        {
          name: "type",
          label: "Type",
          field: "type",
          align: "left",
          sortable: true,
        },
        {
          name: "description",
          label: "Description",
          field: "description",
          align: "left",
          sortable: true,
        },
        {
          name: "operation",
          label: "Operation",
          field: "operation",
          align: "left",
          sortable: true,
        },
        {
          name: "severity",
          label: "Severity",
          field: "severity",
          align: "left",
          sortable: true,
        }
      ],
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
      severity: [
        {
          label: "emergency",
          value: "emergency",
        },{
          label: "alert",
          value: "emergency",
        },{
          label: "critical",
          value: "emergency",
        },{
          label: "error",
          value: "emergency",
        },{
          label: "warning",
          value: "emergency",
        },{
          label: "notice",
          value: "emergency",
        },{
          label: "info",
          value: "emergency",
        },{
          label: "debug",
          value: "emergency",
        },
      ],
      types: [
        {
          label: "access denied",
          value: "all-messages",
        },
        {
          label: "actions",
          value: "error-messages",
        },
        {
          label: "contact",
          value: "transactions-messages",
        },{
          label: "file",
          value: "transactions-messages",
        },{
          label: "mail",
          value: "transactions-messages",
        },{
          label: "comment",
          value: "transactions-messages",
        },
      ],
      logMessages: [
        {
          updated: "2023-08-01 12:00:00",
          type: "Error",
          description: "Error message 1",
          operation: "save",
          severity: "4"
        },
        {
          updated: "2023-08-01 10:30:00",
          type: "Delete",
          description: "Delete transaction 1",
          operation: "delete",
          severity: "1"
        },
        {
          updated: "2023-08-01  13:40:00",
          type: "Edit",
          description: "Update transaction 2",
          operation: "edit",
          severity: "1"
        },
        {
          updated: "2023-08-01  13:40:00",
          type: "Login",
          description: "Failed login attempt",
          operation: "authentication",
          severity: "3"
        },
        {
          updated: "2023-08-01  13:40:00",
          type: "Create",
          description: "Create account Bank of America",
          operation: "create",
          severity: "1"
        },
        {
          updated: "2023-08-01  13:40:00",
          type: "Duplicate",
          description: "Duplicate Transaction",
          operation: "batch",
          severity: "1"
        },
        {
          updated: "2023-08-01  13:40:00",
          type: "Update",
          description: "Version change",
          operation: "update",
          severity: "1"
        },
        {
          updated: "2023-08-01  13:40:00",
          type: "Email",
          description: "Sending email to user",
          operation: "email",
          severity: "1"
        }
      ]
    };
  },
  methods: {
    switchLogs() {
      console.log("calling switchLogs()");
      // this.tableTitle = this.logs.label;
      // fetch the column headers
      // load the column headers
      // display the column headers

      // fetch the logs
      // filter the logs
      // display the filtered logs

    },
  },
};
</script>

<style></style>
