<template>
  <div class="q-ma-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-12">
        <data-table
          image="/src/pages/icons/groups-of-people.png"
          title="Contacts"
          :columns="columns"
          :rows="rows"
          action="contacts"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from "src/components/DataTable.vue";
export default {
  name: "ContactIndexPage",
  components: { DataTable },
  data() {
    return {
      rows: [
        {
          id: 1,
          name: "John Doe",
          email: " ",
        },
      ],
      columns: [
        {
          name: "name",
          label: "Name",
          field: "name",
          align: "left",
          sortable: true,
        },
        {
          name: "email",
          label: "Email",
          field: "email",
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
    };
  },
};
</script>

<style></style>
