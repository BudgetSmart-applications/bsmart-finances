<template>
  <q-table
    :title="title"
    :rows="rows"
    :columns="columns"
    row-key="name"
  >
    <template v-slot:body-cell-actions="props">
      <q-td key="actions" :props="props">
        <q-btn flat dense round icon="edit" @click="$emit('editItem', props.row)">
          <q-tooltip>Edit Account</q-tooltip>
        </q-btn>
        <q-btn flat dense round icon="file_open" @click="$emit('openItem', props.row)">
          <q-tooltip>Open transactions</q-tooltip>
        </q-btn>
      </q-td>
    </template>
  </q-table>
</template>

<script>
import { defineComponent } from "vue";
import { useFinanceStore } from "src/stores/finances";

export default defineComponent({
  name: "AccountsPage",
  props: {
    denseLayout: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "Unknown table",
    },
    rows: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  setup() {
    const financeStore = useFinanceStore();
    const finances = financeStore;

    return {
      finances,
    };
  },
});
</script>

<style></style>
