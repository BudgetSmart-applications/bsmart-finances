<template>
  <div>
    <q-table
      :title="title"
      :rows="rows"
      :filter="filter"
      :columns="columns"
      :pagination="pagination"
      row-key="name"
      bordered
      flat
      :dense="$q.screen.lt.sm"
    >
      <template v-slot:top-left>
        <q-btn color="primary" flat dense round @click="$emit('createItem')">
          <q-img :src="image" />
          Add new
          <q-tooltip>Create new {{ title }}</q-tooltip>
        </q-btn>
        <div class="text-h5">{{ title }}</div>
      </template>
      <template v-slot:top-right>
        <q-input dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td key="actions" :props="props">
          <q-btn v-if="props.row.category !='Starting Balance'" flat dense round @click="showConfirmationDialog(props.row)">
            <q-img src="/src/pages/icons/delete-trash.png" />
            <q-tooltip>Delete Account</q-tooltip>
          </q-btn>
          <q-btn v-else flat dense round>
            <q-img src="/src/pages/icons/unable-to-delete.png" />
            <q-tooltip>This transaction is locked and cannot be deleted</q-tooltip>
          </q-btn>
          <q-btn flat dense round @click="$emit('editItem', props.row)">
            <q-img src="/src/pages/icons/checking.png" />
            <q-tooltip>Edit Account</q-tooltip>
          </q-btn>
          <q-btn v-if="singularTitle !== 'Transaction'" flat dense round @click="$emit('openItem', props.row)">
            <q-img src="/src/pages/icons/transactions.png" />
            <q-tooltip>Open transactions</q-tooltip>
          </q-btn>
        </q-td>
      </template>
    </q-table>
    <q-dialog v-model="confirmDelete" persistent>
      <q-card :style="{ width: deleteDialogWidth }">
        <q-card-section>
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img src="/src/pages/icons/delete.png"></q-img>
            </div>
            <div class="col-8 q-mt-lg">
              <div class="text-h6">Confirm Delete {{ singularTitle }}</div>
              <p>Are you sure you want to delete this {{ singularTitle }}?</p>
            </div>
            <div class="col-12">
              <p class="text-h5">This action cannot be undone.</p>
              <p>
                Delete:
                <strong>
                  {{ itemToDelete.account_name }}{{ itemToDelete.name }} {{ singularTitle }} <span v-if="itemToDelete.bank_name">from
                  {{ itemToDelete.bank_name }}</span><span v-else>on {{ itemToDelete.date }}</span>
                </strong>
              </p>
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Cancel" color="secondary" v-close-popup />
          <q-btn
            label="Accept"
            color="negative"
            v-close-popup
            @click="$emit('deleteItem', itemToDelete)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useFinanceStore } from "/src/stores/finances";

export default defineComponent({
  name: "DataTableComponent",
  props: {
    image: {
      type: String,
      default: "src/pages/icons/add-account.png",
    },
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
    deleteDialogWidth: {
      type: String,
      default: "400px",
    },
  },
  methods: {
    showConfirmationDialog(row) {
      this.itemToDelete = row;
      this.confirmDelete = true;
      // this.emit("deleteItem", row);
    },
  },
  computed: {
    singularTitle() {
      return this.title.slice(0, -1);
    },
  },
  data() {
    return {
      itemToDelete: {},
      confirmDelete: false,
      filter: "",
      pagination: {
        sortBy: "account_year",
        descending: false,
        page: 1,
        rowsPerPage: 10,
      },
    };
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
