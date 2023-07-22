<template>
  <div class="q-ma-md">
    <div class="text-h4">Transactions</div>

    <div class="q-pa-md">
      <div class="q-col-gutter-md row items-start">
        <div class="col-4">
          <q-img class="cursor-pointer" src="src/pages/icons/transactions.png">
          </q-img>
        </div>
        <div class="col-10">
          <div class="section">
            <div class="paragraph">
              Banks store money and provide services to move money in and out of
              accounts. The outcome from these steps to move money in and out of
              your account are called transactions.
            </div>
            <div class="paragraph">
              There are two types of transactions in BudgetSmart: deposits
              (income) and withdrawals (expenses).
              <ul>
                <li>
                  Deposits are transactions that increase the balance of your
                  account.
                </li>
                <li>
                  Withdrawals are transactions that decrease the balance of your
                  account.
                </li>
              </ul>
            </div>
            <div class="paragraph">
              <div class="text-h6">Transaction history</div>
              BudgetSmart stores the transactions you make in your account. This
              allows you to see the history of your account and the changes you
              make over time. This will help you to understand how you are
              spending your money.
            </div>
            <div class="paragraph">
              <div class="text-h6">Transaction categories & tags</div>
              BudgetSmart allows you to categorize and create tags for your
              transactions. This allows you to group your transactions to better
              understand where you are spending your money.
            </div>

            <div class="paragraph">
              <div class="text-h6">Recurring transaction</div>
              BudgetSmart allows you to create recurring transactions. This
              allows you to create a transaction once and have it automatically
              created for you on a schedule you define.

              <div class="section">
                <div class="paragraph">
                  <div class="text-h6">Recurring transaction types</div>
                  BudgetSmart allows you to create two types of recurring
                  transactions: deposits (income) and withdrawals (expenses).
                  <ul>
                    <li>
                      Deposits are transactions that increase the balance of
                      your account.
                    </li>
                    <li>
                      Withdrawals are transactions that decrease the balance of
                      your account.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="q-mt-sm">
            <div class="q-col-gutter-md row item-start">
              <div class="col-12">
                <q-chat-message>
                  <div>
                    <div class="text-h6">No accounts found</div>
                    <div class="text-subtitle2">
                      You need at least one bank account to create a transaction.
                    </div>
                  </div>
                </q-chat-message>
                <q-select
                  outlined
                  v-model="selected_bank"
                  :options="options"
                  label="Select an account"
                />
              </div>
              <div class="col-12">
                <q-btn
                  disable
                  color="primary"
                  label="Go to transactions"
                  icon-right="start"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionsIndexPage",
  data() {
    return {
      showHideMessage: false,
    };
  },
};
</script>

<style></style>
