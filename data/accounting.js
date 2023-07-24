import { defineStore } from "pinia";
import { uuid } from "vue-uuid";
import { AccountsTableHeaders } from "../src/components/Accounting/utils/tables.js";
export const useAccountStore = defineStore("Accounts", {
  state: () => ({
    listOfYears: [],
    alerts: [],
    filter: "",
    yearToDateAmount: 0,
    startingBalance: 0,
    paginationSettings: {
      sortBy: "desc",
      descending: false,
      rowsPerPage: 25,
    },
    maximizedToggle: false,
    accountColumn: AccountsTableHeaders(),
    account: {},
    accounts: [],
    transactions: [],
    activeAccountId: null,
    editAccountId: null,
    activeTransactionId: null,
    editTransactionId: null,
    activeContactId: null,
    editContactId: null,
    activeAddressId: null,
    editAddressId: null,
  }),
  getters: {
    getAlerts: (state) => {
      return state.alerts;
    },
    getListOfYears: (state) => {
      return state.listOfYears;
    },
    getPaginationSettings: (state) => {
      return state.pagination;
    },
    getAccountColumns: (state) => {
      return state.accountColumn;
    },
    getAccountById: (state) => (id) => {
      return state.accounts.find((account) => account._id === id);
    },
    getTransactionById: (state) => (id) => {
      return state.transactions.find((transaction) => transaction._id === id);
    },
    getContactById: (state) => (id) => {
      return state.account.account_contact.find(
        (contact) => contact._id === id
      );
    },
    getAddressById: (state) => (id) => {
      return state.account.account_contact.address.find(
        (address) => address._id === id
      );
    },
    loadAccounts: (state) => {
      if (localStorage.getItem("accounts") !== null) {
        state.accounts = JSON.parse(localStorage.getItem("accounts"));
      }
      return state.accounts;
    },
    getAllTransactions: (state) => {
      return state.transactions;
    },
    getAllContacts: (state) => {
      return state.account.account_contact;
    },
    getAllAddresses: (state) => {
      return state.account.account_contact.address;
    },
    getActiveAccountId: (state) => {
      return state.activeAccountId;
    },
    getEditAccountId: (state) => {
      return state.editAccountId;
    },
    getActiveTransactionId: (state) => {
      return state.activeTransactionId;
    },
    getEditTransactionId: (state) => {
      return state.editTransactionId;
    },
    getActiveContactId: (state) => {
      return state.activeContactId;
    },
    getEditContactId: (state) => {
      return state.editContactId;
    },
    getActiveAddressId: (state) => {
      return state.activeAddressId;
    },
    getListOfYears: (state) => {
      return state.listOfYears;
    },
    makeYears: (state) => {
      let d = new Date().getFullYear();
      let years = [d - 1, d, d + 1];
      if (localStorage.getItem("years") !== null) {
        years = JSON.parse(localStorage.getItem("years"));
      } else {
        localStorage.setItem("years", JSON.stringify(years));
      }
      return (state.listOfYears = years);
    },
  },
  actions: {
    setFilter: (filter) => {
      state.filter = filter;
    },
    setListOfYears() {
      this.makeYears;
    },
    /**
     *      Author: William A King Jr.
     *        Date: 2023-07-06
     * Description: This function calculates the balance of each transaction
     *              and the year to date amount.
     *              1. Sort transactions by date
     *              2. Add starting_balance to the beginning of the array.
     *                 This is the first transaction of the year.
     *              3. Loop through the sorted array of transactions and calculate the balance
     *              4. Set the year-to-date amount
     *              5. Set the transaction balance
     *              6. Set alerts
     *              7. Return the sorted transaction array
     *
     * @param {*} transactions
     * @param {*} startingBalance
     * @returns {object}
     *
     */
    setTransactionBalances: () => {
      let sortedTransaction = [];
      let alerts = [];

      // performing sorting
      sortedList = state.transactions.sort(function (a, b) {
        let arrayA = a.date.split("/");
        let arrayB = b.date.split("/");
        a =
          arrayA[0].length === 4
            ? a.date.split("/").join("")
            : a.date.split("/").reverse().join("");
        b =
          arrayB[0].length === 2
            ? b.date.split("/").reverse().join("")
            : b.date.split("/").join("");
        return a > b ? 1 : a < b ? -1 : 0;
      });

      // add starting balance to the beginning of the array
      state.transactions.unshift(state.startingBalance);

      state.yearToDateAmount = state.transactions.reduce(
        (accumulator, currentValue) => {
          // prepare transaction object
          let transaction = {
            date: currentValue.date,
            name: currentValue.name,
            amount: currentValue.amount.toFixed(2),
            balance: ((accumulator + currentValue.amount) * 1).toFixed(2),
          };

          // push transaction to sortedTransaction array
          sortedTransaction.push(transaction);

          // check for negative balances
          if (transaction.balance < 0) {
            // prepare alert object
            let messages = {
              message:
                `You account has a negative balance of ${transaction.balance} for: ${transaction.name} on ${transaction.date} for ${transaction.amount}. Difference -` +
                ((transaction.balance - transaction.amount) * 1).toFixed(2),
            };
            // push alert to alerts array
            alerts.push(messages);
          }

          state.transactions = sortedTransaction;
          state.alerts = alerts;
          // return the sum the previous and current amounts
          return accumulator + currentValue.amount;
        },
        state.startingBalance.amount * 1
      );

      // // display results
      // console.log("starting balance:", (state.startingBalance.amount * 1).toFixed(2));
      // console.log("Year to Date:", (yearToDateAmount * 1).toFixed(2));
      // console.log("balances:", sortedTransaction);
      // console.log("alerts:", alerts);
    },
    setNewAccount: (state) => {
      console.log("add account - account: " + state.account);

      state.loadAccounts();

      state.account_id = uuid.v4();
      let acct = {
        _id: state.account_id,
        bank: state.account.bank,
        account: state.account.account,
        amount: state.account.amount,
        balance: state.account.amount,
        account_number: state.account.account_number,
        type: state.account.type,
        routing: state.account.routing,
        notes: state.account.notes,
        year: state.account.year,
        contact: [{ name: state.account.bank }],
        address: [],
      };
      state.accounts.push(acct);

      // add the first transaction
      state.transaction_id = uuid.v4();
      state.transaction = [
        {
          _id: state.transaction_id,
          date: new Date().getFullYear() + "/01/01",
          amount: state.account.amount,
          balance: state.account.amount,
          income: state.account.amount,
          name: "Opening balance",
          category: "Starting Balance",
          memo: "Starting Balance",
          type: "income",
          locked: true,
          icon: "lock",
          icon_label: "This transaction is locked and cannot be deleted.",
        },
      ];
      localStorage.setItem(
        state.account.id,
        JSON.stringify(state.transactions)
      );
      state.startingBalance = state.account.amount;
      state.yearToDateAmount = state.account.amount;
    },
    addStartingTransaction() {
      let trans_ = JSON.parse(localStorage.getItem("_" + account._id));
      if (trans_ === null) {
        this.updateStartingBalance(state.transaction);
      }
    },
    updateAccounts(account) {
      let acct = {
        _id: uuid.v4(),
        bank: account.bank,
        account: account.account,
        amount: account.amount,
        balance: account.amount,
        account_number: account.account_number,
        type: account.type,
        routing: account.routing,
        notes: account.notes,
        year: account.year,
        contact: [],
        address: [],
      };
      localStorage.setItem("accounts", JSON.stringify(acct));
      return account;
    },
    updateStartingBalance(account) {
      let transaction = [
        {
          _id: uuid.v4(),
          date: new Date().getFullYear() + "/01/01",
          amount: account.amount,
          balance: account.amount,
          income: account.amount,
          name: "Opening balance",
          category: "Starting Balance",
          memo: "Starting Balance",
          type: "income",
          locked: true,
          icon: "lock",
          icon_label: "This transaction is locked and cannot be deleted.",
        },
      ];
      let id = "_" + account._id;
      localStorage.setItem(id, JSON.stringify(transaction));
    },
    updateTransactionById(transaction, param_id) {},
    updateContactById(contact, param_id) {},
    updateAddressById(address, param_id) {},
    setActiveAccountId(id) {
      this.activeAccountId = id;
    },
    setEditAccountId(id) {
      this.editAccountId = id;
    },
    setActiveTransactionId(id) {
      this.activeTransactionId = id;
    },
    setEditTransactionId(id) {
      this.editTransactionId = id;
    },
    setActiveContactId(id) {
      this.activeContactId = id;
    },
    setEditContactId(id) {
      this.editContactId = id;
    },
    setActiveAddressId(id) {
      this.activeAddressId = id;
    },
  },
  mutations: {},
});
