<template>
<div class="q-ma-md">
    <div class="text-h4">Reports</div>
    <div class="text-subtitle1">View reports, charts, graphs</div>
    <div class="q-col-gutter-md row items-start">
      <div class="col-12">
          <data-table :columns="columns" :rows="rows"
          image="/src/pages/icons/reports.png"
          title="Reports"
           />
        </div>
    </div>
  </div>
</template>

<script>
import DataTable from 'src/components/DataTable.vue';
export default {
  components: { DataTable },
  name: "CategoryIndexPage",
  data() {
    return {
      rows: [
        {
          id: 1,
          name: "Category 1",
          description: "Category 1 description",
        },
        {
          id: 2,
          name: "Category 2",
          description: "Category 2 description",
        },
        {
          id: 3,
          name: "Category 3",
          description: "Category 3 description",
        },
      ],
      columns: [
        {
          name: "id",
          label: "ID",
          field: "id",
          align: "left",
          sortable: true,
        },
        {
          name: "name",
          label: "Name",
          field: "name",
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
          name: "actions",
          label: "Actions",
          field: "actions",
          align: "left",
          sortable: false,
        },
      ],
      rows: [
        {
          id: 1,
          name: "Category 1",
          description: "Category 1 description",
        },
        {
          id: 2,
          name: "Category 2",
          description: "Category 2 description",
        },
        {
          id: 3,
          name: "Category 3",
          description: "Category 3 description",
        },
      ],
    };
  },
};
</script>

<style></style>
