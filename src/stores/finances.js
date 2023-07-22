import { defineStore } from "pinia";

export const useFinanceStore = defineStore("finance", {
  state: () => ({
    bank_table_title: "Bank Accounts",
    denseLayoutBank: true,
    bank_rows: [],
    bank_columns: [
      {
        name: "bank_name",
        required: true,
        label: "Bank name",
        align: "left",
        field: (row) => row.bank_name,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "bank_routing",
        align: "left",
        label: "Routing",
        field: "bank_routing",
        sortable: true,
      },
      { name: "actions", label: "Actions", field: "actions" }
    ],
    accounts_rows: [],
    accounts_table_title: "Accounts",
    accounts_columns: [
      {
        name: "account_year",
        required: true,
        align: "left",
        label: "Year",
        field: "account_year",
        sortable: true,
      },
      {
        name: "account_name",
        required: true,
        label: "Account name",
        align: "left",
        field: (row) => row.account_name,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "account_number",
        required: true,
        align: "left",
        label: "Account number",
        field: "account_number",
        sortable: true,
      },
      {
        name: "starting_balance",
        required: true,
        align: "right",
        label: "Starting balance",
        field: "starting_balance",
        sortable: true,
      },
      {
        name: "ytd_balance",
        required: true,
        align: "right",
        label: "YTD balance",
        field: "ytd_balance",
        sortable: true,
      }
    ]
  }),

  getters: {
    getBanks(state) {
      return state.bank_rows;
    },
    getAccounts(state) {
      return state.account_rows;
    }
  },

  actions: {
    loadAccounts(){
      this.accounts_rows = [{
        "account_id": "de6e165c-88b0-4c42-b2dc-f0f86cbe6a3d",
        "bank_id": "0ce07395-88b0-4c42-b2dc-f0f86cbe6a3d",
        "starting_balance": "158214.31",
        "ytd_balance": "158214.31",
        "account_name": "Regular Savings",
        "account_type": "Savings",
        "account_number": "9087-45-0098",
        "account_year": 2023
      },
      {
        "account_id": "dbe910de-4cef-4465-b9aa-bf90924ce62b",
        "bank_id": "dbe910de-5cd1-4465-b9aa-bf90924ce62b",
        "starting_balance": "5231.25",
        "ytd_balance": "5231.25",
        "account_name": "Checking",
        "account_type": "Checking",
        "account_number": "98754",
        "account_year": 2023
      },
      {
        "account_id": "72f49851-56fd-4e7c-aef0-fbbbdb9beefb",
        "bank_id": "dbe910de-5cd1-4465-b9aa-bf90924ce62b",
        "starting_balance": "897.32",
        "ytd_balance": "897.32",
        "account_name": "Savings",
        "account_type": "Savings",
        "account_number": "1234",
        "account_year": 2023
      },
      {
        "account_id": "7b68e56c-716e-4d40-8d29-40b26f0e6b1b",
        "bank_id": "7b68e56c-716e-4d40-8d29-2a8084c63084",
        "starting_balance": "878.12",
        "ytd_balance": "878.12",
        "account_name": "Adv Tier Checking",
        "account_type": "Checking",
        "account_number": "65236515",
        "account_year": 2023
      },
      {
        "account_id": "6ca7e6ca-df06-475a-98ba-40b26f0e6b1b",
        "bank_id": "7b68e56c-716e-4d40-8d29-2a8084c63084",
        "starting_balance": "5231.25",
        "ytd_balance": "5231.25",
        "account_name": "Basic Savings",
        "account_type": "Savings",
        "account_number": "98754",
        "account_year": 2023
      },
      {
        "account_id": "de6e165c-df06-4a63-a806-36d5e2ce5dbf",
        "bank_id": "de6e165c-e6c6-4a63-a806-36d5e2ce5dbf",
        "starting_balance": "893.21",
        "ytd_balance": "893.21",
        "account_name": "Savings ",
        "account_type": "Savings",
        "account_number": "985674",
        "account_year": 2023
      }
    ]
    },
    loadBanks() {
      this.bank_rows = [{
        "bank_id": "0ce07395-88b0-4c42-b2dc-f0f86cbe6a3d",
        "bank_name": "Wellsfargo Bank",
        "bank_acronym": "WFB",
        "bank_routing": "5687",
        "bank_memo": ""
      },
      {
        "bank_id": "dbe910de-5cd1-4465-b9aa-bf90924ce62b",
        "bank_name": "Washington State Employees Credit Union",
        "bank_acronym": "WSECU",
        "bank_routing": "63215",
        "bank_memo": ""

      }, {
        "bank_id": "7b68e56c-716e-4d40-8d29-2a8084c63084",
        "bank_name": "Bank of America",
        "bank_acronym": "BOF",
        "bank_routing": "98752",
        "bank_memo": ""
      }, {
        "bank_id": "de6e165c-e6c6-4a63-a806-36d5e2ce5dbf",
        "bank_name": "Key Bank",
        "bank_acronym": "Key",
        "bank_routing": "123547859632",
        "bank_memo": ""
      }
    ]
    },
  },
});
