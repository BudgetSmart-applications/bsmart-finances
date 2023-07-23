<template>
  <div class="q-ma-md">
    <div class="text-h4">Transactions</div>
      <div class="q-col-gutter-md row items-start">
        <div class="col-12">
          <data-table
          image="src/pages/icons/transactions.png"
          title="Transactions"
          :columns="bank_columns"
          :rows="bank_rows"
          @editItem="editItem"
          @createItem="createItem"
           />
        </div>
    </div>
  </div>
</template>

<script>
import DataTable from 'src/components/DataTable.vue';
export default {
  components: { DataTable },
  name: "TransactionsIndexPage",
  data() {
    return {
    };
  },
};
</script>

<style></style>
