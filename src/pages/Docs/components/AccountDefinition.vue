<template>
  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-2">
        <q-img
          class="cursor-pointer"
          style="max-width: 63%"
          src="/src/pages/icons/account.png"
        >
        </q-img>
      </div>

      <div class="col-10">
        <div class="q-mb-md">
          <div class="text-h4">BudgetSmart User Manual</div>
        </div>
        <div class="section">
          BudgetSmart is an extension of your bank account and provides a
          set of advanced features not provided by your bank, other software
          or web applications.
        </div>
      </div>
      <div class="text-h4">Features</div>
      <div class="q-col-gutter-md row items-start">
        <div class="col-12">
          <div class="section">
            <div class="paragraph">
              <div class="text-h6">Smart Tracking</div>
              <div class="q-mb-md text-subtitle2">
                BudgetSmart can perform forecasting, tracks spending and perform
                analytics for generating reports, sending alerts or email when,
                for example, there are problems with current or future
                transactions. These tools can help you see the big picture, and
                improves your financial awareness.
              </div>
              <p>
                You can track past, present and future transactions in
                BudgetSmart. The ability to track all transactions is useful for
                seeing the big picture, staying on top of your money and making
                important spending decisions.
              </p>
              <p>
                BudgetSmart takes the financial information you entered and turn
                that information into useful tools for you so you can make wise
                decisions.
              </p>
              <p>
                As you enter re-occurring transactions for the entire year and
                then enter transactions as they happen. Based on that
                information BudgetSmart communicates with you about your
                finances and makes suggestions, create reports, inbox messages,
                alerts and notifications.
              </p>
              <p>
                For example, you may have a car payment due on the 15th of each
                month. After you enter this transaction and define which months
                it reoccurs. BudgetSmart will automatically add it to your
                transactions on the 15th of each month.
              </p>
              <p>
                BudgetSmart can also forecast your future transactions. For
                example, if you have a car payment due on the 15th of each month
                and you have a $1000 balance on your credit card. BudgetSmart
                can forecast your future transactions and alert you when you
                will exceed your credit limit.
              </p>
            </div>
            <div class="paragraph">
              <div class="text-h6">Income size, no problem</div>
              <div class="q-mb-md text-subtitle2">
                BudgetSmart is designed to work with any income size.
              </div>
              <p>
                You can use BudgetSmart to manage your finances no matter how
                much money you make. Because you can enter transactions as they
                happen or use BudgetSmart to forecast your future either way
                BudgetSmart can be helpful. For example, when BudgetSmart
                analyzes your account and a negative balance is found, based on
                your profile settings BudgetSmart sends you a notification,
                displays a message on the screen, and will make negative
                balances stand out.
              </p>
              <p>
                But where BudgetSmart really shines is in addition to entering
                transactions as they happen, you enter monthly transactions as
                re-occurring transactions. As each transaction is analyzed by
                BudgetSmart, BSmart decides if the account balance is below your
                personal threshold or has a negative value.
              </p>
            </div>
          </div>

          <div class="section">
            <div class="paragraph">
              <div class="text-h6">Multiple accounts same year</div>
              <p>
                BudgetSmart allows you to manage accounts by year. This is
                useful because you can separate statements and reports by year
                or manage multiple accounts from the same bank for the the same
                year. For example, you may have a savings and checking account
                for
                {{ new Date().getFullYear() }} and a checking account for the
                same bank for {{ new Date().getFullYear() + 1 }}, etc.
              </p>
              <p>
                This is helpful because you can manage multiple accounts from
                the same bank for the same year.
              </p>
            </div>
          </div>

          <div class="section">
            <div class="paragraph">
              <div class="text-h6">Save time</div>
              <p>
                BudgetSmart allows you to duplicate accounts, transactions, and
                categories. This is useful if you, for example, have more than
                one account for the same bank. For example, you may have a
                savings and checking account at the same bank for
                {{ new Date().getFullYear() }}. In BudgetSmart you created the
                checking account. BudgetSmart allows you to duplicate that
                account to make a savings or another checking account with
                different starting balances and its own transactions.
              </p>
              <p>
                This is useful because you can duplicate a checking account but
                change some details that make it different, e.g. a savings
                account. This feature saves you time because you do not have to
                enter the same information more than once.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
