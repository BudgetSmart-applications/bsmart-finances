<template>
  <div class="q-ma-md">
    <div class="text-h4">Messages</div>
    <div class="text-subtitle1">Alerts, messages, notifications</div>
    <div class="q-col-gutter-md row items-start">
      <div class="col-12">
        <q-select
          dense
          emit-value
          option-value="value"
          option-label="label"
          class="q-py-sm"
          :options="bankNames"
          outlined
          v-model="bank"
          label="Switch Bank Accounts"
          @update:model-value="switchBank()"
        />
        <data-table
          :columns="columns"
          :rows="rows"
          image="/src/pages/icons/reports.png"
          :title="title"
          :action="action"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from "src/components/DataTable.vue";
export default {
  components: { DataTable },
  name: "MessageListPage",
  data() {
    return {
      bankObject: {
        type: Object,
        default: () => {},
      },
      action: "",
      title: "",
      bank: "",
      bankData: {},
      rows: [
        {
          id: 1,
          month: "January",
          year: "2023",
        },
        {
          id: 2,
          month: "February",
          year: "2023",
        },
        {
          id: 3,
          month: "March",
          year: "2023",
        },
        {
          id: 4,
          month: "April",
          year: "2023",
        },
        {
          id: 5,
          month: "May",
          year: "2023",
        },
        {
          id: 6,
          month: "June",
          year: "2023",
        },
        {
          id: 7,
          month: "July",
          year: "2023",
        },
        {
          id: 8,
          month: "August",
          year: "2023",
        },
        {
          id: 9,
          month: "September",
          year: "2023",
        },
        {
          id: 10,
          month: "October",
          year: "2023",
        },
        {
          id: 11,
          month: "November",
          year: "2023",
        },
        {
          id: 12,
          month: "December",
          year: "2023",
        },
        {
          id: 13,
          month: "January",
          year: "2024",
        },
        {
          id: 14,
          month: "February",
          year: "2024",
        },
        {
          id: 15,
          month: "March",
          year: "2024",
        }
      ],
      columns: [
        {
          name: "id",
          label: "Report ID",
          field: "id",
          align: "left",
          sortable: true,
        },
        {
          name: "month",
          label: "Month",
          field: "month",
          align: "left",
          sortable: true,
        },
        {
          name: "year",
          label: "Year",
          field: "year",
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
      bank_rows: [
        {
          bank_id: "0ce07395-88b0-4c42-b2dc-f0f86cbe6a3d",
          bank_name: "Wells fargo Bank",
          bank_acronym: "WFB",
          bank_routing: "5687",
          bank_memo: "",
          account_id: "de6e165c-88b0-4c42-b2dc-f0f86cbe6a3d",
          starting_balance: "158214.31",
          ytd_balance: "158214.31",
          account_name: "Regular Savings",
          account_type: "Savings",
          account_number: "9087-45-0098",
          account_year: 2023,
          contact_id: "88e165c-88b0-4c42-b2dc-f0f86cbe6a3d",
          contact_name: "John Doe",
          contact_email: "john.doe@nomail.com",
          contact_phone: "253-456-7890",
          contact_memo: "",
          transactions: [
            {
              transaction_id: "c153a5a0-5c1e-4b9e-8b0a-0b0b0b0b0b0b",
              date: "2023/01/01",
              amount: "158214.31",
              balance: "158214.31",
              income: "158214.31",
              name: "Opening balance",
              category: "Starting Balance",
              memo: "Starting Balance",
              type: "income",
              locked: true,
              icon: "lock",
              icon_label: "This transaction is locked and cannot be deleted.",
            },
            {
              transaction_id: "c153a5a0-5c1e-4b9e-8b0a-0b065687125b",
              date: "2023/01/10",
              amount: "4132.50",
              income: "4132.50",
              name: "Washington State Payroll",
              category: "Wages & Salary",
              memo: "",
              type: "income",
              locked: false,
              icon: "unlock",
              icon_label: "",
            },
          ],
        },
        {
          bank_id: "dbe910d2-5cd1-4465-b9aa-bf90924ce62b",
          bank_name: "Washington State Employees Credit Union",
          bank_acronym: "WSECU",
          bank_routing: "63215",
          bank_memo: "",
          account_id: "dbe910de-4cef-4465-b9aa-bf90924ce62b",
          starting_balance: "5231.25",
          ytd_balance: "5231.25",
          account_name: "Checking",
          account_type: "Checking",
          account_number: "98754",
          account_year: 2023,
          contact_id: "88e165c-88b0-4c42-b2dc-f0f86cbe6a3d",
          contact_name: "John Doe",
          contact_email: "john.doe@nomail.com",
          contact_phone: "253-456-7890",
          contact_memo: "",
          transactions: [
            {
              transaction_id: "c153a5a0-5c1e-4b9e-8b0a-0b0b0b0b0b0b",
              date: "2023/01/01",
              amount: "5231.25",
              balance: "5231.25",
              income: "5231.25",
              name: "Opening balance",
              category: "Starting Balance",
              memo: "Starting Balance",
              type: "income",
              locked: true,
              icon: "lock",
              icon_label: "This transaction is locked and cannot be deleted.",
            },
          ],
        },
        {
          bank_id: "dbe910d1-5cd1-4465-b9aa-bf90924ce62b",
          bank_name: "Washington State Employees Credit Union",
          bank_acronym: "WSECU",
          bank_routing: "63215",
          bank_memo: "",
          account_id: "72f49851-56fd-4e7c-aef0-fbbbdb9beefb",
          starting_balance: "897.32",
          ytd_balance: "897.32",
          account_name: "Savings",
          account_type: "Savings",
          account_number: "1234",
          account_year: 2023,
          contact_id: "88e165c-88b0-4c42-b2dc-f0f86cbe6a3d",
          contact_name: "John Doe",
          contact_email: "john.doe@nomail.com",
          contact_phone: "253-456-7890",
          contact_memo: "",
          transactions: [
            {
              transaction_id: "c153a5a0-4b9e-5c1e-8b0a-0b0b0b0b0b0b",
              date: "2023/01/01",
              amount: "897.32",
              balance: "897.32",
              income: "897.32",
              name: "Opening balance",
              category: "Starting Balance",
              memo: "Starting Balance",
              type: "income",
              locked: true,
              icon: "lock",
              icon_label: "This transaction is locked and cannot be deleted.",
            },
          ],
        },
        {
          bank_id: "7b68e56c-716e-4d40-8d29-2a8084c63084",
          bank_name: "Bank of America",
          bank_acronym: "BOF",
          bank_routing: "98752",
          bank_memo: "",
          account_id: "7b68e56c-716e-4d40-8d29-40b26f0e6b1b",
          starting_balance: "878.12",
          ytd_balance: "878.12",
          account_name: "Adv Tier Checking",
          account_type: "Checking",
          account_number: "65236515",
          account_year: 2023,
          contact_id: "88e165c-88b0-4c42-b2dc-f0f86cbe6a3d",
          contact_name: "John Doe",
          contact_email: "john.doe@nomail.com",
          contact_phone: "253-456-7890",
          contact_memo: "",
          transactions: [
            {
              transaction_id: "b78a88f-5c1e-4b9e-8b0a-0b0b0b0b0b0b",
              date: "2023/01/01",
              amount: "878.12",
              balance: "878.12",
              income: "878.12",
              name: "Opening balance",
              category: "Starting Balance",
              memo: "Starting Balance",
              type: "income",
              locked: true,
              icon: "lock",
              icon_label: "This transaction is locked and cannot be deleted.",
            },
          ],
        },
        {
          bank_id: "7b68e56c-7162-4d40-8d29-2a8084c63084",
          bank_name: "Bank of America",
          bank_acronym: "BOF",
          bank_routing: "98752",
          bank_memo: "",
          account_id: "6ca7e6ca-df06-475a-98ba-40b26f0e6b1b",
          starting_balance: "5231.25",
          ytd_balance: "5231.25",
          account_name: "Basic Savings",
          account_type: "Savings",
          account_number: "98754",
          account_year: 2023,
          contact_id: "88e165c-88b0-4c42-b2dc-f0f86cbe6a3d",
          contact_name: "John Doe",
          contact_email: "john.doe@nomail.com",
          contact_phone: "253-456-7890",
          contact_memo: "",
          transactions: [
            {
              transaction_id: "c153a5a0-78a8-4b9e-8b0a-0b0b0b0b0b0b",
              date: "2023/01/01",
              amount: "5231.25",
              balance: "5231.25",
              income: "5231.25",
              name: "Opening balance",
              category: "Starting Balance",
              memo: "Starting Balance",
              type: "income",
              locked: true,
              icon: "lock",
              icon_label: "This transaction is locked and cannot be deleted.",
            },
          ],
        },
        {
          bank_id: "de6e165c-e6c6-4a63-a806-36d5e2ce5dbf",
          bank_name: "KeyBank",
          bank_acronym: "Key",
          bank_routing: "123547859632",
          bank_memo: "",
          account_id: "de6e165c-df06-4a63-a806-36d5e2ce5dbf",
          starting_balance: "893.21",
          ytd_balance: "893.21",
          account_name: "Savings ",
          account_type: "Savings",
          account_number: "985674",
          account_year: 2023,
          contact_id: "88e165c-88b0-4c42-b2dc-f0f86cbe6a3d",
          contact_name: "John Doe",
          contact_email: "john.doe@nomail.com",
          contact_phone: "253-456-7890",
          contact_memo: "",
          transactions: [
            {
              transaction_id: "c153a5a0-5c1e-4b9e-8b0a-1b1b1bab3bbb",
              date: "2023/01/01",
              amount: "893.21",
              balance: "893.21",
              income: "893.21",
              name: "Opening balance",
              category: "Starting Balance",
              memo: "Starting Balance",
              type: "income",
              locked: true,
              icon: "lock",
              icon_label: "This transaction is locked and cannot be deleted.",
            },
          ],
        },
      ],
    };
  },
  methods: {
    switchBank() {
      this.title = this.bank.label;
      this.action = 'reports'
    },
  },
  computed: {
    bankNames() {
      let bankNamesList = [];
      this.bank_rows.forEach((b) => {
        let bank = {
          label: b.bank_name + " - " + b.account_name,
          id: b.bank_id,
        };
        bankNamesList.push(bank);
      });
      return bankNamesList.sort();
    },
  },
};
</script>

<style></style>
