<template>
  <div class="q-ma-md">
    <div class="text-h4">Introduction to BudgetSmart</div>
  </div>
  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-4">
        <q-img class="cursor-pointer" src="src/pages/icons/account.png">
        </q-img>
      </div>

      <div class="col-10">
        <div class="section">
          <strong>Definition:</strong> A financial account in BudgetSmart is a
          bank account maintained by a financial institution such as a bank. The
          financial institution provides services in the form of a savings or
          checking account.
        </div>

        <div class="section">
          <div class="paragraph">
            <div class="text-h6">One bank multiple accounts</div>
            Because you may have more than one account such as a savings and
            checking account, BudgetSmart allows you to have more than one
            account for the same bank but managed separately.
          </div>
        </div>

        <div class="section">
          <div class="paragraph">
            <div class="text-h6">Budget year</div>
            Accounts in BudgetSmart are managed by year. This allows you to
            separate statements and report for better management. For example,
            you may have a savings and checking account for
            {{ new Date().getFullYear() }} and a checking account for the same
            bank for {{ new Date().getFullYear() + 1 }}, etc.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
