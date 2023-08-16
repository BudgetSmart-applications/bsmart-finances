import { defineStore } from "pinia";

export const useFinanceStore = defineStore("finance", {
  state: () => ({
    bank_table_title: "Bank Accounts",
    denseLayoutBank: true,
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
    // Database calls
    // check if sqlite database exists
    async checkDB({ commit }) {
      try {
        const db = await openDB({
          filename: path.join(__static, "db", "accounts.db"),
          driver: sqlite3.Database,
        });
        commit("setDB", db);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // create sqlite database
    async createDB({ commit }) {
      try {
        const db = await openDB({
          filename: path.join(__static, "db", "accounts.db"),
          driver: sqlite3.Database,
        });
        commit("setDB", db);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // create sqlite database tables
    async createTables({ commit, state }) {
      try {
        await state.db.exec(
          "CREATE TABLE IF NOT EXISTS banks (bank_id TEXT PRIMARY KEY, bank_name TEXT, bank_acronym TEXT, bank_routing TEXT, bank_memo TEXT)"
        );
        await state.db.exec(
          "CREATE TABLE IF NOT EXISTS accounts (account_id TEXT PRIMARY KEY, bank_id TEXT, starting_balance REAL, ytd_balance REAL, account_name TEXT, account_type TEXT, account_number TEXT, account_year INTEGER, contact_id TEXT, contact_name TEXT, contact_email TEXT, contact_phone TEXT, contact_memo TEXT)"
        );
        await state.db.exec(
          "CREATE TABLE IF NOT EXISTS transactions (transaction_id TEXT PRIMARY KEY, account_id TEXT, date TEXT, amount REAL, balance REAL, income REAL, name TEXT, category TEXT, memo TEXT, type TEXT, locked INTEGER, icon TEXT, icon_label TEXT)"
        );
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // load banks from sqlite database
    async loadBanks({ commit, state }) {
      try {
        const banks = await state.db.all("SELECT * FROM banks");
        commit("setBanks", banks);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // load accounts from sqlite database
    async loadAccounts({ commit, state }) {
      try {
        const accounts = await state.db.all("SELECT * FROM accounts");
        commit("setAccounts", accounts);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // load transactions from sqlite database
    async loadTransactions({ commit, state }) {
      try {
        const transactions = await state.db.all("SELECT * FROM transactions");
        commit("setTransactions", transactions);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // add bank to sqlite database
    async addBank({ commit, state }, bank) {
      try {
        await state.db.run(
          "INSERT INTO banks (bank_id, bank_name, bank_acronym, bank_routing, bank_memo) VALUES (?, ?, ?, ?, ?)",
          [
            bank.bank_id,
            bank.bank_name,
            bank.bank_acronym,
            bank.bank_routing,
            bank.bank_memo,
          ]
        );
        commit("addBank", bank);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // add account to sqlite database
    async addAccount({ commit, state }, account) {
      try {
        await state.db.run(
          "INSERT INTO accounts (account_id, bank_id, starting_balance, ytd_balance, account_name, account_type, account_number, account_year, contact_id, contact_name, contact_email, contact_phone, contact_memo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            account.account_id,
            account.bank_id,
            account.starting_balance,
            account.ytd_balance,
            account.account_name,
            account.account_type,
            account.account_number,
            account.account_year,
            account.contact_id,
            account.contact_name,
            account.contact_email,
            account.contact_phone,
            account.contact_memo,
          ]
        );
        commit("addAccount", account);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // add transaction to sqlite database
    async addTransaction({ commit, state }, transaction) {
      try {
        await state.db.run(
          "INSERT INTO transactions (transaction_id, account_id, date, amount, balance, income, name, category, memo, type, locked, icon, icon_label) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            transaction.transaction_id,
            transaction.account_id,
            transaction.date,
            transaction.amount,
            transaction.balance,
            transaction.income,
            transaction.name,
            transaction.category,
            transaction.memo,
            transaction.type,
            transaction.locked,
            transaction.icon,
            transaction.icon_label,
          ]
        );
        commit("addTransaction", transaction);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // update bank in sqlite database
    async updateBank({ commit, state }, bank) {
      try {
        await state.db.run(
          "UPDATE banks SET bank_name = ?, bank_acronym = ?, bank_routing = ?, bank_memo = ? WHERE bank_id = ?",
          [
            bank.bank_name,
            bank.bank_acronym,
            bank.bank_routing,
            bank.bank_memo,
            bank.bank_id,
          ]
        );
        commit("updateBank", bank);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // update account in sqlite database
    async updateAccount({ commit, state }, account) {
      try {
        await state.db.run(
          "UPDATE accounts SET bank_id = ?, starting_balance = ?, ytd_balance = ?, account_name = ?, account_type = ?, account_number = ?, account_year = ?, contact_id = ?, contact_name = ?, contact_email = ?, contact_phone = ?, contact_memo = ? WHERE account_id = ?",
          [
            account.bank_id,
            account.starting_balance,
            account.ytd_balance,
            account.account_name,
            account.account_type,
            account.account_number,
            account.account_year,
            account.contact_id,
            account.contact_name,
            account.contact_email,
            account.contact_phone,
            account.contact_memo,
            account.account_id,
          ]
        );
        commit("updateAccount", account);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // update transaction in sqlite database
    async updateTransaction({ commit, state }, transaction) {
      try {
        await state.db.run(
          "UPDATE transactions SET account_id = ?, date = ?, amount = ?, balance = ?, income = ?, name = ?, category = ?, memo = ?, type = ?, locked = ?, icon = ?, icon_label = ? WHERE transaction_id = ?",
          [
            transaction.account_id,
            transaction.date,
            transaction.amount,
            transaction.balance,
            transaction.income,
            transaction.name,
            transaction.category,
            transaction.memo,
            transaction.type,
            transaction.locked,
            transaction.icon,
            transaction.icon_label,
            transaction.transaction_id,
          ]
        );
        commit("updateTransaction", transaction);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // delete bank from sqlite database
    async deleteBank({ commit, state }, bank) {
      try {
        await state.db.run("DELETE FROM banks WHERE bank_id = ?", [bank.bank_id]);
        commit("deleteBank", bank);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // delete account from sqlite database
    async deleteAccount({ commit, state }, account) {
      try {
        await state.db.run("DELETE FROM accounts WHERE account_id = ?", [
          account.account_id,
        ]);
        commit("deleteAccount", account);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // delete transaction from sqlite database
    async deleteTransaction({ commit, state }, transaction) {
      try {
        await state.db.run("DELETE FROM transactions WHERE transaction_id = ?", [
          transaction.transaction_id,
        ]);
        commit("deleteTransaction", transaction);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    // load banks from sqlite database













    loadAccounts(){
      this.accounts_rows = []
    },
    loadBanks() {
      this.bank_rows = [
    ]
    },
  },
});
