<template>
  <div>
    <account-table
      :title="finances.bank_table_title"
      :columns="finances.bank_columns"
      :rows="finances.bank_rows"
      :denseLayout="finances.denseLayoutBank"
      :pagination="finances.pagination"
    />
  </div>
</template>

<script>
import AccountTable from "src/components/AccountTable.vue";
import { useFinanceStore } from "src/stores/finances";
export default {
  components: { AccountTable },
  name: "ViewCategorysPage",
  data() {
    return {};
  },
  setup() {
    const financeStore = useFinanceStore();
    const finances = financeStore;
    finances.loadBanks();

    return {
      finances,
    };
  },
};
</script>

<style></style>
