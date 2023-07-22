<template>
  <div>
    Welcome to the accounts page. On this page you can add, edit, and delete
    bank accounts. You can also add, edit, and delete transactions. You can
    also import transactions from a CSV file. You can also export transactions
    to a CSV file.
    <q-separator />

    <div>
      <q-btn
        v-if="!showCreateAccount"
        class="q-ma-sm"
        label="Add new"
        color="secondary"
        @click="
          showCreateAccount = true;
          showUpdate = false;
        "
      />
      <q-btn
        v-if="showUpdate"
        class="q-ma-sm"
        label="Update"
        color="secondary"
        @click="
          showCreateAccount = false;
          showUpdate = false;
        "
      />
      <q-btn
        v-if="showCreateAccount"
        class="q-ma-sm"
        label="Cancel"
        color="negative"
        @click="
          showCreateAccount = false;
          showUpdate = false;
        "
      />
    </div>
    <div v-if="showCreateAccount" class="q-ma-md">
      <q-separator />
      <div>Show/hide:
      <q-toggle
        class="q-mx-md"
        v-model="showHideBankDetails"
        label="Bank"
        color="primary"
        dense
      />
      <q-toggle
        v-model="showHideAccountDetails"
        label="Account"
        color="primary"
        dense
      />
      <q-toggle
        class="q-mx-md"
        v-model="showHideContactDetails"
        label="Contact"
        color="primary"
        dense
      /></div>
      <q-separator />
    </div>
    <div v-if="showCreateAccount" class="q-pa-md shadow-24">
      <div class="q-col-gutter-md row items-start">
        <div class="col-8 q-gutter-md">
          <q-form>
            <div v-if="showHideBankDetails" class="q-mt-md">
              Bank Details

              <q-select
                dense
                class="q-py-sm"
                :options="accounting_year"
                outlined
                v-model="account_year"
                label="Accounting Year"
              />
              <q-input
                dense
                class="q-py-sm"
                outlined
                v-model="bank_name"
                label="Bank name"
              />
              <q-input
                dense
                class="q-py-sm"
                outlined
                v-model="bank_acronym"
                label="Bank acronym"
              />
              <q-input
                dense
                class="q-py-sm"
                outlined
                v-model="bank_routing"
                label="Routing number"
              />
              <q-input
                dense
                class="q-py-sm"
                type="number"
                mode="numeric"
                outlined
                v-model="starting_balance"
                label="Starting balance"
              />
            </div>
            <div v-if="showHideAccountDetails" class="q-mt-md">
              Account Details
              <q-input
                dense
                class="q-py-sm"
                outlined
                v-model="account_name"
                label="Account name"
              />

              <q-input
                dense
                class="q-py-sm"
                outlined
                v-model="account_number"
                label="Account number"
              />

              <q-select
                dense
                class="q-py-sm"
                :options="options"
                outlined
                v-model="account_type"
                label="Account type"
              />
            </div>
            <div v-if="showHideContactDetails" class="q-mt-md">
              Contact Details
              <q-input
                dense
                class="q-py-sm"
                outlined
                v-model="contact_name"
                label="Contact name"
              /><q-input
                dense
                class="q-py-sm"
                outlined
                v-model="contact_email"
                label="Contact email"
              /><q-input
                dense
                class="q-py-sm"
                outlined
                v-model="contact_phone"
                label="Contact phone"
              /><q-input
                dense
                class="q-py-sm"
                outlined
                v-model="contact_memo"
                label="Contact memo"
              />
            </div>
          </q-form>
        </div>

        <div class="col-4 flex flex-center">
          <q-img
            class="cursor-pointer"
            style="max-width: 100%"
            src="src/pages/icons/02/5.png"
          >
          </q-img>
          <q-btn
            v-if="!showUpdate"
            class="q-ma-sm"
            color="primary"
            @click="showCreateAccount = false"
            >Save bank account</q-btn
          >
        </div>
      </div>
    </div>

    <q-separator />
    <div v-if="!showCreateAccount">
      <div class="text-h5">Bank accounts</div>
      <data-table
        @edit-item="editItem"
        title=""
        :columns="bank_columns"
        :rows="bank_rows"
        shadow
      />
    </div>

    <q-btn color="primary" label="Next" icon-right="arrow_forward" />
  </div>
</template>

<script>
import DataTable from "src/components/DataTable.vue";
export default {
  name: "BanksIndexPage",
  components: {
    DataTable,
  },
  methods: {
    editItem(row) {
      console.log("emit to parent", row);
      this.showCreateAccount = true;
      this.showUpdate = true;
      this.bank_name = row.bank_name;
      this.account_name = row.account_name;
      this.account_type = row.account_type;
      this.starting_balance = row.starting_balance;
      this.bank_routing = row.bank_routing;
      this.bank_acronym = row.bank_acronym;
      this.account_number = row.account_number;
      this.account_year = row.account_year;
      this.contact_name = row.contact_name;
      this.contact_email = row.contact_email;
      this.contact_phone = row.contact_phone;
      this.contact_memo = row.contact_memo;
    },
  },
  data() {
    return {
      showHideBankDetails: true,
      showHideAccountDetails: true,
      showHideContactDetails: true,
      accounting_year: ["2023"],
      selectedRow: "",
      showUpdate: false,
      showCreateAccount: false,
      options: ["Checking Account", "Savings Account"],
      bank_name: "",
      account_name: "",
      account_type: "",
      starting_balance: "",
      bank_routing: "",
      bank_acronym: "",
      account_number: "",
      account_year: "2023",
      contact_name: "",
      contact_email: "",
      contact_phone: "",
      contact_memo: "",
      bank_rows: [
        {
          bank_id: "0ce07395-88b0-4c42-b2dc-f0f86cbe6a3d",
          bank_name: "Wellsfargo Bank",
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
          bank_name: "Key Bank",
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
      bank_columns: [
        { name: "actions", label: "Actions", field: "actions" },
        { name: "account_year", label: "Year", field: "account_year" },
        {
          name: "bank_name",
          required: true,
          label: "Bank name",
          align: "left",
          field: (row) => row.bank_name + " - " + row.account_type,
          format: (val) => `${val}`,
          sortable: true,
        },
        { name: "ytd_balance", label: "YTD", field: "ytd_balance" },
      ],
    };
  },
};
</script>

<style></style>
