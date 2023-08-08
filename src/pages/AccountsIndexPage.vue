<template>
  <div class="q-ma-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-12">
        <data-table
          image="/src/pages/icons/account-btn.png"
          title="Accounts"
          :columns="bank_columns"
          :rows="bank_rows"
          @editItem="editItem"
          @createItem="createItem"
          @deleteItem="deleteItem"
          @openItem="redirectToItem"
          @doDuplicate="duplicateItem"
        />
      </div>
    </div>
    <q-dialog
      v-model="showCreateAccount"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />

          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary"
              >Minimize</q-tooltip
            >
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary"
              >Maximize</q-tooltip
            >
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section class="bg-white text-black">
          <div class="q-pa-md shadow-24">
            <div class="q-mt-md">
              <div class="text-h5">{{ action }} Account</div>
              <q-select
                dense
                class="q-py-sm"
                :options="accounting_year"
                outlined
                v-model="account_year"
                label="Accounting Year"
              />
              <q-select
                dense
                class="q-py-sm"
                :options="options"
                outlined
                v-model="account_type"
                label="Account type"
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
                v-model="account_name"
                label="Account name"
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
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn
            v-if="action === 'Create'"
            class="q-ma-sm"
            color="secondary"
            @click="saveNewAccount"
            >Save</q-btn
          >
          <q-btn
            v-if="action === 'Update'"
            class="q-ma-sm"
            color="secondary"
            @click="updateAccount"
            >Update</q-btn
          >
          <q-btn color="negative" label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import DataTable from "src/components/DataTable.vue";
import { useFinanceStore } from "src/stores/finances";
import {v4 as uuid} from "uuid";
export default {
  components: { DataTable },
  name: "AccountsIndexPage",
  methods: {
    duplicateItem(item) {
      console.log("duplicateItem() called");
      console.log("item: ", item);
    },
    redirectToItem(account){
      // this.$router.push({ name: "TransactionsIndexPage", params: { bank_id: account.bank_id } });
      this.$router.push('/transactions/' + account.bank_id);
    },
    updateAccount(){
      this.showCreateAccount = false;
      let updatedAccount = {
        bank_id: this.bank_id,
        bank_name: this.bank_name,
        bank_acronym: this.bank_acronym,
        bank_routing: this.bank_routing,
        bank_memo: "",
        account_id: this.account_id,
        starting_balance: this.starting_balance,
        ytd_balance: this.starting_balance,
        account_name: this.account_name,
        account_type: this.account_type,
        account_number: this.account_number,
        account_year: this.account_year,
        contact_id: this.contact_id,
        contact_name: this.contact_name,
        contact_email: this.contact_email,
        contact_phone: this.contact_phone,
        contact_memo: "",
        transactions: [
          {
            transaction_id: this.transaction_id,
            date: this.account_year + "/01/01",
            amount: this.starting_balance,
            balance: this.starting_balance,
            income: this.starting_balance,
            name: "Opening balance",
            category: "Starting Balance",
            memo: "Starting Balance",
            type: "income",
            locked: true,
            icon: "lock",
            icon_label: "This transaction is locked and cannot be deleted.",
          },
        ],
      };
      console.log('updated account',updatedAccount)
      this.bank_rows[this.bank_rows.findIndex(x => x.bank_id === this.bank_id)] = updatedAccount;
    },
    saveNewAccount() {
      this.showCreateAccount = false;
      let newAccount = {
        bank_id: uuid(),
        bank_name: this.bank_name,
        bank_acronym: this.bank_acronym,
        bank_routing: this.bank_routing,
        bank_memo: "",
        account_id: uuid(),
        starting_balance: this.starting_balance,
        ytd_balance: this.starting_balance,
        account_name: this.account_name,
        account_type: this.account_type,
        account_number: this.account_number,
        account_year: this.account_year,
        contact_id: uuid(),
        contact_name: this.contact_name,
        contact_email: this.contact_email,
        contact_phone: this.contact_phone,
        contact_memo: "",
        transactions: [
          {
            transaction_id: uuid(),
            date: this.account_year + "/01/01",
            amount: this.starting_balance,
            balance: this.starting_balance,
            income: this.starting_balance,
            name: "Opening balance",
            category: "Starting Balance",
            memo: "Starting Balance",
            type: "income",
            locked: true,
            icon: "lock",
            icon_label: "This transaction is locked and cannot be deleted.",
          },
        ],
      };
      this.bank_rows.push(newAccount);
    },
    deleteItem(account) {
      console.log("emit to parent for deletion", account);
      const filteredAccounts = this.bank_rows.filter(
        (row) => row.account_id !== account.account_id
      );
      this.bank_rows = filteredAccounts;
      this.showCreateAccount = false;
    },
    createItem() {
      console.log("emit to parent for creating new");
      this.showCreateAccount = true;
      this.showUpdate = false;
      this.bank_name = "";
      this.account_name = "";
      this.account_type = "";
      this.starting_balance = "";
      this.bank_routing = "";
      this.bank_acronym = "";
      this.account_number = "";
      this.account_year = "2023";
      this.contact_name = "";
      this.contact_email = "";
      this.contact_phone = "";
      this.contact_memo = "";
      this.action = "Create";
    },
    editItem(row) {
      console.log("emit to parent", row);
      this.showCreateAccount = true;
      this.showUpdate = true;
      this.bank_id = row.bank_id;
      this.bank_name = row.bank_name;
      this.account_id = row.account_id;
      this.account_name = row.account_name;
      this.account_type = row.account_type;
      this.starting_balance = row.starting_balance;
      this.bank_routing = row.bank_routing;
      this.bank_acronym = row.bank_acronym;
      this.account_number = row.account_number;
      this.account_year = row.account_year;
      this.transactions = row.transactions[0];
      this.transaction_id = row.transactions[0].transaction_id;
      this.contact_id = row.contact_id;
      this.contact_name = row.contact_name;
      this.contact_email = row.contact_email;
      this.contact_phone = row.contact_phone;
      this.contact_memo = row.contact_memo;
      this.action = "Update";
    },
  },
  setup() {
    const financeStore = useFinanceStore();
    const finances = financeStore;
    finances.loadAccounts();

    return {
      finances,
    };
  },
  data() {
    return {
      action: "Create",
      filter: "",
      maximizedToggle: true,
      showCreateAccount: false,
      accounting_year: ["2023"],
      selectedRow: "",
      showUpdate: false,
      showCreateAccount: false,
      options: ["Checking", "Savings"],
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
        { name: "actions", align: "left", label: "Actions", field: "actions" },
        {
          name: "account_year",
          align: "left",
          label: "Year",
          field: "account_year",
        },
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

<style>
.paragraph {
  margin-bottom: 1rem;
}
.section {
  margin-bottom: 2rem;
}
.text-h6 {
  color: maroon;
  margin-bottom: 0.5rem;
}
</style>
