<template>
  <div>
    <div class="q-col-gutter-md row items-start q-py-sm">
      <div class="col-2">
        <q-btn
          icon="arrow_back"
          color="secondary"
          @click="goBack"
          label="Back"
        />
      </div>
      <div class="col-10">
        <q-select
          dense
          emit-value
          option-value="value"
          option-label="label"
          :options="bankNames"
          outlined
          v-model="bank"
          label="Switch Bank Accounts"
          @update:model-value="switchBank()"
        />
      </div>
    </div>
    <div class="q-col-gutter-md row items-start">
      <div class="col-12">
        <data-table
          image="/src/pages/icons/transaction.png"
          title="Transactions"
          :columns="transactions_columns"
          :rows="transactions_row"
          @createItem="createItem"
          @deleteItem="deleteItem"
          @editItem="editItem"
          @openBankItem="openUpdateDialog"
          @doDuplicate="duplicateItem"
        />
      </div>
    </div>
    <q-dialog
      v-model="showTransactionDialog"
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
            <div>
              <div class="text-h5">{{ action }} {{ table_action }}</div>
              <div class="q-col-gutter-md row items-start">
                <div class="col-4">
                  <div>
                    <q-input
                      outlined
                      dense
                      v-model="date"
                      label="Date (Year/Month/Day))"
                      mask="date"
                      :rules="['date']"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date v-model="date">
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>

                    <q-select
                      dense
                      class="q-py-sm"
                      :options="['income', 'expense']"
                      outlined
                      v-model="type"
                      label="Transaction type"
                    />
                    <q-select
                      dense
                      class="q-py-sm"
                      :options="filteredCategories"
                      outlined
                      v-model="category"
                      label="Transaction category"
                    />
                    <q-input
                      dense
                      class="q-py-sm"
                      outlined
                      v-model="name"
                      label="Transaction name"
                    />
                    <q-input
                      dense
                      class="q-py-sm"
                      type="text"
                      inputmode="decimal"
                      outlined
                      v-model="amount"
                      label="Transaction amount"
                    />

                    <q-input
                      type="textarea"
                      dense
                      class="q-py-sm"
                      outlined
                      v-model="memo"
                      label="memo"
                    />
                  </div>
                </div>
              </div>
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
    <q-dialog
      v-model="showUpdateDialog"
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
                v-model="bankObject.account_year"
                label="Accounting Year"
              />
              <q-select
                dense
                class="q-py-sm"
                :options="options"
                outlined
                v-model="bankObject.account_type"
                label="Account type"
              />
              <q-input
                dense
                class="q-py-sm"
                outlined
                v-model="bankObject.bank_name"
                label="Bank name"
              />
              <q-input
                dense
                class="q-py-sm"
                outlined
                v-model="bankObject.account_name"
                label="Account name"
              />
              <q-input
                dense
                class="q-py-sm"
                type="text"
                inputmode="decimal"
                outlined
                v-model="bankObject.amount"
                label="Amount"
              />
            </div>
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn
            v-if="action === 'Create'"
            class="q-ma-sm"
            color="secondary"
            @click="$emit('saveNewAccount', bankObject)"
            >Save</q-btn
          >
          <q-btn
            v-if="action === 'Update'"
            class="q-ma-sm"
            color="secondary"
            @click="$emit('updateAccount', bankObject)"
            >Update</q-btn
          >
          <q-btn color="negative" label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog
      v-model="showRecurringDialog"
      persistent
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section class="bg-white text-black">
          <div class="q-pa-md shadow-24">
            <div class="col-6">
              <div class="text-h5">Recurring Transactions</div>
              <div>
                <div>
                  <div class="q-gutter-sm">
                    <div>
                      <q-checkbox
                        @update:model-value="
                          postRecurringTransaction('01', 'January')
                        "
                        v-model="dateRange.January"
                        label="January"
                      />
                      <q-checkbox
                        @update:model-value="
                          postRecurringTransaction('02', 'February')
                        "
                        v-model="dateRange.February"
                        label="February"
                      />
                      <q-checkbox
                        @update:model-value="
                          postRecurringTransaction('03', 'March')
                        "
                        v-model="dateRange.March"
                        label="March"
                      />
                      <q-checkbox
                        @update:model-value="
                          postRecurringTransaction('04', 'April')
                        "
                        v-model="dateRange.April"
                        label="April"
                      />
                      <q-checkbox
                        @update:model-value="
                          postRecurringTransaction('05', 'May')
                        "
                        v-model="dateRange.May"
                        label="May"
                      />
                      <q-checkbox
                        @update:model-value="
                          postRecurringTransaction('06', 'June')
                        "
                        v-model="dateRange.June"
                        label="June"
                      />
                      <q-checkbox
                        @update:model-value="
                          postRecurringTransaction('07', 'July')
                        "
                        v-model="dateRange.July"
                        label="July"
                      />
                      <q-checkbox
                        @update:model-value="
                          postRecurringTransaction('08', 'August')
                        "
                        v-model="dateRange.August"
                        label="August"
                      />
                      <q-checkbox
                        @update:model-value="
                          postRecurringTransaction('09', 'September')
                        "
                        v-model="dateRange.September"
                        label="September"
                      />
                      <q-checkbox
                        @update:model-value="
                          postRecurringTransaction('10', 'October')
                        "
                        v-model="dateRange.October"
                        label="October"
                      />
                      <q-checkbox
                        @update:model-value="
                          postRecurringTransaction('11', 'November')
                        "
                        v-model="dateRange.November"
                        label="November"
                      />
                      <q-checkbox
                        @update:model-value="
                          postRecurringTransaction('12', 'December')
                        "
                        v-model="dateRange.December"
                        label="December"
                      />
                      <div>
                        <q-table
                        dense
                          :rows="recurring_rows"
                          :columns="recurring_columns"
                          row-key="name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn
            class="q-ma-sm"
            color="negative"
            @click="makeRecuringTransactions"
            >Create</q-btn
          >
          <q-btn color="primary" label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import DataTable from "src/components/DataTable.vue";
import { v4 as uuid } from "uuid";
export default {
  components: { DataTable },
  name: "TransactionsIndexPage",
  created() {
    this.transactions_row = this.transactions;
  },
  watch: {
    dateRange: {
      handler: function () {
        // this.updateRecurringTransactions();
      },
      deep: true,
      immediate: true,
    },
    "$route.params.bank_id": {
      handler: function () {
        let bankData = this.bank_rows.filter((row) => {
          return row.bank_id === this.$route.params.bank_id ?? [];
        });
        this.transactions_row = bankData[0]?.transactions ?? [];
        this.bankData = bankData[0] ?? [];
        if (this.$route.params.bank_id === "1") {
          this.bank = "";
        }
        this.bankObject = {
          account_year: this.bankData.account_year,
          account_type: this.bankData.account_type,
          bank_name: this.bankData.bank_name,
          account_name: this.bankData.account_name,
          amount: this.bankData.starting_balance,
        };
        this.action = "Update";
      },
      deep: true,
      immediate: true,
    },
    date: function (val) {
      // console.log("date changed", val);
      // let temp = val.split("/");
      // let mon = "";
      // if (temp) {
      //   mon = temp[1];
      //   this.enableRecurringMonths(temp[1])
      //   this.updateRecurringTransactions();
      // }
    },
  },
  computed: {
    filteredRow() {
      return this.bank_rows.filter((row) => {
        return row.bank_id === this.$route.params.bank_id ?? [];
      });
    },
    transactions() {
      if (this.filteredRow.length > 0) return this.filteredRow[0].transactions;
      else return [];
    },
    filteredCategories() {
      let categoryNamesList = [];
      this.categories.forEach((category) => {
        categoryNamesList.push(category.name);
      });
      return categoryNamesList.sort();
    },
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
  mounted() {
    this.loadTransactions();
  },
  methods: {
    insertRecurringTransaction(year, day) {
      let recurringTransactions = [];
      if (this.dateRange.January) {
        recurringTransactions.push({
          date: year + "/01/" + day,
          amount: this.amount,
          name: this.name,
          category: this.category,
          memo: this.memo,
          type: this.type,
        });
      }
      if (this.dateRange.February) {
        recurringTransactions.push({
          date: year + "/02/" + day,
          amount: this.amount,
          name: this.name,
          category: this.category,
          memo: this.memo,
          type: this.type,
        });
      }
      if (this.dateRange.March) {
        recurringTransactions.push({
          date: year + "/03/" + day,
          amount: this.amount,
          name: this.name,
          category: this.category,
          memo: this.memo,
          type: this.type,
        });
      }
      if (this.dateRange.April) {
        recurringTransactions.push({
          date: year + "/04/" + day,
          amount: this.amount,
          name: this.name,
          category: this.category,
          memo: this.memo,
          type: this.type,
        });
      }
      if (this.dateRange.May) {
        recurringTransactions.push({
          date: year + "/05/" + day,
          amount: this.amount,
          name: this.name,
          category: this.category,
          memo: this.memo,
          type: this.type,
        });
      }
      if (this.dateRange.June) {
        recurringTransactions.push({
          date: year + "/06/" + day,
          amount: this.amount,
          name: this.name,
          category: this.category,
          memo: this.memo,
          type: this.type,
        });
      }
      if (this.dateRange.July) {
        recurringTransactions.push({
          date: year + "/07/" + day,
          amount: this.amount,
          name: this.name,
          category: this.category,
          memo: this.memo,
          type: this.type,
        });
      }
      if (this.dateRange.August) {
        recurringTransactions.push({
          date: year + "/08/" + day,
          amount: this.amount,
          name: this.name,
          category: this.category,
          memo: this.memo,
          type: this.type,
        });
      }
      if (this.dateRange.September) {
        recurringTransactions.push({
          date: year + "/09/" + day,
          amount: this.amount,
          name: this.name,
          category: this.category,
          memo: this.memo,
          type: this.type,
        });
      }
      if (this.dateRange.October) {
        recurringTransactions.push({
          date: year + "/10/" + day,
          amount: this.amount,
          name: this.name,
          category: this.category,
          memo: this.memo,
          type: this.type,
        });
      }
      if (this.dateRange.November) {
        recurringTransactions.push({
          date: year + "/11/" + day,
          amount: this.amount,
          name: this.name,
          category: this.category,
          memo: this.memo,
          type: this.type,
        });
      }
      if (this.dateRange.December) {
        recurringTransactions.push({
          date: year + "/12/" + day,
          amount: this.amount,
          name: this.name,
          category: this.category,
          memo: this.memo,
          type: this.type,
        });
      }
      // this.recurring_rows = recurringTransactions;
    },
    makeRecuringTransactions() {
      console.log("makeRecuringTransactions() called");
      console.log("this.recurring_rows: ", this.recurring_rows);
      console.log("transactions_row", this.transactions_row)

      let mergeResults = this.transactions_row.concat(this.recurring_rows);
      console.log("mergeResults: ", mergeResults);
      this.transactions_row = mergeResults;
      this.showRecurringDialog = false;
    },
    goBack() {
      this.$router.go(-1);
    },
    postRecurringTransaction(num, text) {
      console.log("postRecurringTransaction() called");
      console.log("month: ", num, "text: ", text);
      console.log("this.recurring_rows: ", this.recurring_rows);

      const year = this.item.date.split("/")[0];
      const day = this.item.date.split("/")[2];

      console.log("", this.dateRange[num]);

      // @todo - need to know if the checkbox is checked or not
      // so that I know to add or remove the transaction from the recurring table

      if (!this.dateRange[text]) {
        console.log("add transaction to recurring table for month: ", text);
        const newItem = {
          date: year + "/" + num + "/" + day,
          amount: this.item.amount,
          name: this.item.name,
          category: this.item.category,
          memo: this.item.memo,
          type: this.item.type,
        };

        // add the new item to the recurring_rows array
        this.recurring_rows.push(newItem);
      } else {
        console.log(
          "remove transaction from recurring table for month: ",
          text
        );
        // remove the item from the recurring_rows array
        this.recurring_rows = this.recurring_rows.filter(
          (item) => item.date.split("/")[1] !== num
        );

      }
    },
    duplicateItem(item, _month) {
      this.item = item ?? this.item;
      let mon = _month ?? this.item.date.split("/")[1];
      this.setMonthCheckbox(mon);
      // prepare the new item to be added to the recurring table
      this.showRecurringDialog = true;
    },
    setMonthCheckbox(mon) {
      switch (mon.toString()) {
        case "01":
          this.dateRange.January = true;
          break;
        case "02":
          this.dateRange.February = true;
          break;
        case "03":
          this.dateRange.March = true;
          break;
        case "04":
          this.dateRange.April = true;
          break;
        case "05":
          this.dateRange.May = true;
          break;
        case "06":
          this.dateRange.June = true;
          break;
        case "07":
          this.dateRange.July = true;
          break;
        case "08":
          this.dateRange.August = true;
          break;
        case "09":
          this.dateRange.September = true;
          break;
        case "10":
          this.dateRange.October = true;
          break;
        case "11":
          this.dateRange.November = true;
          break;
        case "12":
          this.dateRange.December = true;
          break;
      }
    },
    openUpdateDialog(item) {
      console.log("openUpdateDialog", item);
      this.showUpdateDialog = true;
    },
    updateRecurringTransactions() {
      let temp = this.date.split("/");
      let year = temp[0];
      let month = temp[1];
      let day = temp[2];
      //this.insertRecurringTransaction(year, day)
    },
    loadTransactions() {
      let temp = this.filteredRow[0];
      if (!temp) return;
      this.bank = {
        id: temp.bank_id,
        label: temp.bank_name + " - " + temp.account_name,
      };
    },
    saveNewAccount() {
      this.showTransactionDialog = false;
      console.log("save new transaction");
      let newTransaction = {
        transaction_id: uuid(),
        date: this.date,
        amount: this.type === "income" ? this.amount : -Math.abs(this.amount),
        balance: "",
        expense: this.amount < 0 ?? 0,
        income: this.amount > 0 ?? 0,
        name: this.name,
        category: this.category,
        memo: this.memo,
        type: this.type,
        locked: false,
        icon: this.type,
        icon_label: "",
      };
      console.log("newTransaction: ", newTransaction);
      this.transactions_row.push(newTransaction);
    },
    updateAccount() {
      console.log("update account");
      let objIndex = this.transactions_row.findIndex(
        (obj) => obj.transaction_id === this.transaction_id
      );
      console.log("objIndex: ", objIndex);

      let updatedTransaction = {
        transaction_id: this.transaction_id,
        date: this.date,
        amount: this.type === "income" ? this.amount : -Math.abs(this.amount),
        balance: "",
        expense: this.amount < 0 ?? 0,
        income: this.amount > 0 ?? 0,
        name: this.name,
        category: this.category,
        memo: this.memo,
        type: this.type,
        locked: false,
        icon: this.type,
        icon_label: "",
      };
      this.transactions_row[objIndex] = updatedTransaction;
      this.showTransactionDialog = false;
    },
    switchBank() {
      this.$router.push("/transactions/" + this.bank.id);
    },
    deleteItem(transaction) {
      console.log("delete transaction", transaction);
      console.log("this.transactions", this.transactions);
      const filteredTransactions = this.transactions_row.filter(
        (t) => t.transaction_id !== transaction.transaction_id
      );
      console.log("filteredTransactions", filteredTransactions);
      this.transactions_row = filteredTransactions;
      this.showCreateAccount = false;
    },
    editItem(data) {
      console.log("edit transaction", data);
      this.transaction_id = data.transaction_id;
      this.showTransactionDialog = true;
      this.date = data.date;
      this.amount = data.amount;
      this.income = data.income;
      this.expense = data.expense;
      this.name = data.name;
      this.category = data.category;
      this.memo = data.memo;
      this.type = data.type;
      this.locked = false;
      this.icon = "unlock";
      this.icon_label = "";
      this.action = "Update";
      console.log("bankdata", this.bankData);
      this.bankObject.income = data.income;
      this.action = "Update";
      // this.showUpdateDialog = true;
    },
    createItem() {
      console.log("emit to parent for creating new Item");
      this.date = "";
      this.amount = "";
      this.balance = "";
      this.income = "";
      this.expense = "";
      this.name = "";
      this.category = "";
      this.memo = "";
      this.type = "";
      this.locked = "";
      this.icon = "";
      this.icon_label = "";
      this.action = "Create";
      this.showTransactionDialog = true;
    },
  },
  data() {
    return {
      action: "Update",
      bankData: {},
      options: ["Checking", "Savings"],
      accounting_year: ["2023"],
      maximizedToggle: true,
      bankObject: {
        type: Object,
        default: () => {},
      },
      showUpdateDialog: false,
      transactions_row: [],
      dateRange: {
        January: false,
        February: false,
        March: false,
        April: false,
        May: false,
        June: false,
        July: false,
        August: false,
        September: false,
        October: false,
        November: false,
        December: false,
      },
      showRecurringDialog: false,
      item: {},
      bank: "",
      date: "",
      amount: "",
      balance: "",
      income: "",
      expense: "",
      name: "",
      category: "",
      memo: "",
      type: "",
      locked: "",
      icon: "",
      icon_label: "",
      table_action: "Transaction",
      action: "Create",
      maximizedToggle: true,
      showCreateAccount: false,
      showTransactionDialog: false,

      categories: [
        {
          name: "Income",
          description: "Money earned from a job or other source",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Income_icon.svg/1200px-Income_icon.svg.png",
        },
        {
          name: "Rent",
          description: "Paying monthly rent for a living space",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rent_payment_icon.svg/1200px-Rent_payment_icon.svg.png",
        },
        {
          name: "Utilities",
          description:
            "Monthly bill payments for utilities such as electricity, water, and gas",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/d7/Utility_icon.svg",
        },
        {
          name: "Credit Card",
          description: "Making payments on a credit card bill",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Credit_Card_Icon.svg/1200px-Credit_Card_Icon.svg.png",
        },
        {
          name: "Groceries",
          description: "Purchasing groceries for consumption",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Grocery_icon.svg/1200px-Grocery_icon.svg.png",
        },
        {
          name: "Insurance",
          description: "Making payments on insurance premiums",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Insurance_icon.svg/1200px-Insurance_icon.svg.png",
        },
        {
          name: "Student Loans",
          description: "Making payments on student loans",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Student_loan_icon.svg/1200px-Student_loan_icon.svg.png",
        },
        {
          name: "Car Payments",
          description: "Making payments on a car loan or lease",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Car_payment_icon.svg/1200px-Car_payment_icon.svg.png",
        },
        {
          name: "Gasoline",
          description: "Purchasing gasoline for a vehicle",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/da/Gasoline_icon.svg",
        },
        {
          name: "Phone",
          description: "Making payments on a cell phone bill",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Phone_icon.svg/1200px-Phone_icon.svg.png",
        },
        {
          name: "Taxes",
          description: "Making payments on taxes owed",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Tax_icon.svg/1200px-Tax_icon.svg.png",
        },
        {
          name: "Internet",
          description: "Making payments on an internet bill",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Internet_icon.svg/1200px-Internet_icon.svg.png",
        },
        {
          name: "Cable",
          description: "Making payments on a cable bill",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Cable_TV_icon.svg/1200px-Cable_TV_icon.svg.png",
        },
        {
          name: "Child Care",
          description: "Making payments for childcare services",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Child_care_icon.svg/1200px-Child_care_icon.svg.png",
        },
        {
          name: "Tuition",
          description: "Making payments for tuition",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Tuition_icon.svg/1200px-Tuition_icon.svg.png",
        },
        {
          name: "Gym Membership",
          description: "Making payments for a gym membership",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Gym_membership_icon.svg/1200px-Gym_membership_icon.svg.png",
        },
        {
          name: "Medical Bills",
          description: "Making payments for medical bills",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Medical_bills_icon.svg/1200px-Medical_bills_icon.svg.png",
        },
        {
          name: "Savings",
          description: "Saving money for later use",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Savings_icon.svg/1200px-Savings_icon.svg.png",
        },
        {
          name: "Housing",
          description: "Paying for housing related expenses",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Housing_icon.svg/1200px-Housing_icon.svg.png",
        },
        {
          name: "Investments",
          description: "Making investments for long term financial gain",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Investment_icon.svg/1200px-Investment_icon.svg.png",
        },
        {
          name: "Car Maintenance",
          description: "Making payments for car maintenance",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Car_Maintenance_icon.svg/1200px-Car_Maintenance_icon.svg.png",
        },
        {
          name: "Clothing",
          description: "Making payments for clothing purchases",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Clothing_icon.svg/1200px-Clothing_icon.svg.png",
        },
        {
          name: "Entertainment",
          description:
            "Making payments for entertainment such as movies and concerts",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Entertainment_icon.svg/1200px-Entertainment_icon.svg.png",
        },
        {
          name: "Gifts",
          description: "Making payments for gifts",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Gift_icon.svg/1200px-Gift_icon.svg.png",
        },
        {
          name: "Home Improvement",
          description: "Making payments on home improvement projects",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Home_improvement_icon.svg/1200px-Home_improvement_icon.svg.png",
        },
        {
          name: "Travel",
          description: "Making payments for travel related expenses",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Travel_icon.svg/1200px-Travel_icon.svg.png",
        },
        {
          name: "Restaurants",
          description: "Making payments at restaurants",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Restaurant_icon.svg/1200px-Restaurant_icon.svg.png",
        },
        {
          name: "Subscriptions",
          description:
            "Making payments for subscriptions such as a streaming service",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Subscription_icon.svg/1200px-Subscription_icon.svg.png",
        },
        {
          name: "Medical Insurance",
          description: "Making payments for medical insurance premiums",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Medical_insurance_icon.svg/1200px-Medical_insurance_icon.svg.png",
        },
        {
          name: "Pet Care",
          description: "Making payments for pet care expenses",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pet_care_icon.svg/1200px-Pet_care_icon.svg.png",
        },
        {
          name: "Home Insurance",
          description: "Making payments for home insurance premiums",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Home_insurance_icon.svg/1200px-Home_insurance_icon.svg.png",
        },
        {
          name: "Charities",
          description: "Making payments to charities",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Charity_icon.svg/1200px-Charity_icon.svg.png",
        },
        {
          name: "Car Insurance",
          description: "Making payments for car insurance premiums",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Car_insurance_icon.svg/1200px-Car_insurance_icon.svg.png",
        },
        {
          name: "Child Support",
          description: "Making payments for child support",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Child_support_icon.svg/1200px-Child_support_icon.svg.png",
        },
        {
          name: "Alimony",
          description: "Making payments for alimony",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Alimony_icon.svg/1200px-Alimony_icon.svg.png",
        },
        {
          name: "Drugstore",
          description: "Making payments for items purchased at a drugstore",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Drugstore_icon.svg/1200px-Drugstore_icon.svg.png",
        },
        {
          name: "Foreign Transaction",
          description: "Making payments for foreign transactions",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Foreign_transaction_icon.svg/1200px-Foreign_transaction_icon.svg.png",
        },
        {
          name: "Home Rentals",
          description: "Making payments on home rentals",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Home_rental_icon.svg/1200px-Home_rental_icon.svg.png",
        },
        {
          name: "Vacation",
          description: "Making payments for vacation related expenses",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Vacation_icon.svg/1200px-Vacation_icon.svg.png",
        },
        {
          name: "Daycare",
          description: "Making payments for daycare services",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Daycare_icon.svg/1200px-Daycare_icon.svg.png",
        },
        {
          name: "Home Services",
          description:
            "Making payments for home services such as lawn care or home repairs",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Home_service_icon.svg/1200px-Home_service_icon.svg.png",
        },
        {
          name: "Appliances",
          description: "Making payments for appliances",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Appliance_icon.svg/1200px-Appliance_icon.svg.png",
        },
        {
          name: "Auto Parts",
          description: "Making payments for auto parts",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Auto_parts_icon.svg/1200px-Auto_parts_icon.svg.png",
        },
        {
          name: "Donations",
          description: "Making payments for donations",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Donation_icon.svg/1200px-Donation_icon.svg.png",
        },
        {
          name: "Gardening",
          description: "Making payments for gardening supplies or services",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Gardening_icon.svg/1200px-Gardening_icon.svg.png",
        },
        {
          name: "Home Decor",
          description: "Making payments for home decor",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Home_decor_icon.svg/1200px-Home_decor_icon.svg.png",
        },
        {
          name: "Home Furnishings",
          description: "Making payments for home furnishings",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Home_furnishing_icon.svg/1200px-Home_furnishing_icon.svg.png",
        },
        {
          name: "Legal Fees",
          description: "Making payments for legal fees",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Legal_fees_icon.svg/1200px-Legal_fees_icon.svg.png",
        },
        {
          name: "Lawn Care",
          description: "Making payments for lawn care services",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Lawn_care_icon.svg/1200px-Lawn_care_icon.svg.png",
        },
        {
          name: "Wages & salary",
          description: "Making payments for lawn care services",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Lawn_care_icon.svg/1200px-Lawn_care_icon.svg.png",
        },
        {
          name: "Postage",
          description: "Making payments for postage",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Postage_icon.svg/1200px-Postage_icon.svg.png",
        },
        {
          name: "School Supplies",
          description: "Making payments for school supplies",
          iconUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/School_supplies_icon.svg/1200px-School_supplies_icon.svg.png",
        },
      ],
      transactions_columns: [
        {
          name: "date",
          required: true,
          label: "Date",
          align: "left",
          field: (row) => row.date,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "name",
          required: true,
          label: "Transaction",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "category",
          sortable: true,
          label: "Category",
          field: "category",
          align: "left",
        },
        {
          name: "amount",
          align: "right",
          label: "Amount",
          field: "amount",
          sortable: true,
        },
        {
          name: "balance",
          align: "right",
          label: "Balance",
          field: "balance",
          sortable: true,
        },
        {
          name: "actions",
          align: "center",
          label: "Actions",
          field: "actions",
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
      recurring_rows: [],
      recurring_columns: [
        {
          name: "date",
          required: true,
          label: "Date",
          align: "left",
          field: (row) => row.date,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        { name: "amount", label: "Amount", field: "amount", sortable: true },
      ],
    };
  },
};
</script>

<style></style>
