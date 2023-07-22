<template>
  <div class="q-ma-sm">
    <div class="text-h4">Accounts</div>
<div class="q-mt-sm">
          <div class="q-col-gutter-md row item-start">
            <div class="col-8">
              <q-select
                dense
                class="q-mb-sm"
                outlined
                v-model="selected_bank"
                :options="bankListOfNames"
                label="Select an account"
              />
            </div>
            <div class="col-4">
              <q-btn color="primary" icon="visibility" />
            </div>
          </div>
        </div>
    <div class="q-pa-md">
      <div class="q-col-gutter-md row items-start">
        <div class="col-4">
          <q-img class="cursor-pointer" src="src/pages/icons/account.png">
          </q-img>
        </div>

        <div class="col-10">
          <p>
            <strong>Definition:</strong> A financial account in BudgetSmart is a
            bank account maintained by a financial institution such as a bank.
            The financial institution provides services in the form of a savings
            or checking account.
          </p>

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

            <q-btn
              color="primary"
              label="Start the wizard"
              icon-right="start"
              @click="showHideWizardDialog = true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <q-dialog persistent v-model="showHideWizardDialog">
    <q-card style="width: 800px">
      <q-card-section v-if="!startWizard">
        <q-card-title>
          <div class="text-h4 q-pb-lg">New account wizard</div>
          <div class="section">
            <div class="paragraph">
              <p>
                The new account wizard will help you create your first bank
                account. When you are done we will generate a new bank account
                and your first transaction.
              </p>
              <p>You will need to provide the following information:</p>
              <ul>
                <li>Bank name</li>
                <li>Account name</li>
                <li>Account type (checking/savings)</li>
                <li>Starting balance</li>
                <li>Accounting year</li>
              </ul>
              <p>Tap start when you are ready.</p>
              <q-btn
                class="q-ma-sm"
                color="secondary"
                label="Cancel"
                icon="cancel"
                @click="showHideWizardDialog = false"
              />
              <q-btn
                class="q-ma-sm"
                color="primary"
                label="Next"
                icon-right="start"
                @click="startWizard = true"
              />
            </div>
          </div>
        </q-card-title>
      </q-card-section>
      <q-card-section v-if="startWizard">
        <q-card-title>
          <div class="text-h4 q-pb-lg">New account wizard</div>
          <div>
            <div class="q-pa-sm">
              Does this bank already exists in BudgetSmart?
              <q-option-group
                inline
                v-model="bank_exists"
                :options="options"
                color="primary"
              />
            </div>
            <div class="q-pa-sm">
              <q-input
                v-if="bank_exists === 'no'"
                outlined
                v-model="bank_name"
                label="Type the bank's name"
                color="primary"
              />
              <q-select
                v-if="bank_exists === 'yes'"
                outlined
                v-model="bank_name"
                :options="bankListOfNames"
                label="Select it from the list"
                color="primary"
              />
            </div>
            <div>
              <div class="q-pa-sm">
                <q-select
                  outlined
                  v-model="account_type"
                  :options="['Checking', 'Savings']"
                  label="Is this a savings or checking account?"
                  color="primary"
                />
              </div>
            </div>
          </div>
          <div>
            <div class="q-pa-sm">
              <q-select
                outlined
                v-model="account_year"
                :options="['2023', '2024']"
                label="What year is this for?"
                color="primary"
              />
            </div>
          </div>

          <div>
            <div class="q-pa-sm">
              <q-input
                outlined
                v-model="account_name"
                label="What is the name of the account"
                color="primary"
              />
            </div>
            <div>
              <div class="q-pa-sm">
                <q-input
                  outlined
                  v-model="starting_balance"
                  label="How much are you starting with?"
                  color="primary"
                />
              </div>
            </div>
          </div>
        </q-card-title>
      </q-card-section>

      <q-card-actions v-if="startWizard">
        <q-btn
          class="q-ma-sm"
          color="secondary"
          label="Cancel"
          icon="cancel"
          @click="
            showHideWizardDialog = false;
            startWizard = false;
          "
        />
        <q-btn class="q-ma-sm" color="primary" label="Save" icon-right="save" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "AccountsIndexPage",
  data() {
    return {
      bank_name: "",
      account_name: "",
      account_type: "",
      starting_balance: "",
      bank_routing: "",
      bank_acronym: "",
      account_number: "",
      account_year: "",
      contact_name: "",
      contact_email: "",
      contact_phone: "",
      contact_memo: "",
      bankListOfNames: ["Bank of America", "Chase", "Wells Fargo"],
      bank_exists: "",
      showHideWizardDialog: false,
      startWizard: false,
      options: [
        {
          label: "Yes",
          value: "yes",
        },
        {
          label: "No",
          value: "no",
        },
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
