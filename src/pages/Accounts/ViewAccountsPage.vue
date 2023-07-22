<template>
  <div>
    <account-table
      :title="finances.accounts_table_title"
      :columns="finances.accounts_columns"
      :rows="finances.accounts_rows"
      :denseLayout="finances.denseLayoutAccounts"
      :pagination="finances.pagination"
    />
  </div>
</template>

<script>
import AccountTable from "src/components/AccountTable.vue";
import { useFinanceStore } from "src/stores/finances";

export default {
  components: { AccountTable },
  name: "ViewAccountsPage",
  data() {
    return {};
  },
  setup() {
    const financeStore = useFinanceStore();
    const finances = financeStore;
    finances.loadAccounts();

    return {
      finances,
    };
  },
};
</script>

<style></style>
