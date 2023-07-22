<template>
  <div>
    <account-table
      :title="finances.transactions_table_title"
      :columns="finances.transactions_columns"
      :rows="finances.transactions_rows"
      :denseLayout="finances.denseLayoutTransactions"
      :pagination="finances.pagination"
    />
  </div>
</template>

<script>
import FinanceTable from "src/components/AccountTable.vue";
import { useFinanceStore } from "src/stores/finances";

export default {
  components: { FinanceTable },
  name: "ViewTransactionsPage",
  data() {
    return {};
  },
  setup() {
    const financeStore = useFinanceStore();
    const finances = financeStore;
    finances.loadTransactions();

    return {
      finances,
    };
  },
};
</script>

<style></style>
