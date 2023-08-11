<template>
  <div class="q-ma-md">
    <div class="text-h4">Configuration</div>
    <div class="text-subtitle1">View reports, charts, graphs</div>
    <div class="q-col-gutter-md row items-start">
      <div class="q-ma-md">
        <div class="col-6 section">
          <div class="section-title">General</div>
          <div class="section-description" color="primary">
            Check for updates
          </div>
          <div class="q-my-md" v-if="!!user.registrationKey">
            <p class="text-paragraph">
              <strong>Application version</strong>:
              {{ user.applicationVersion }}
            </p>
            <p class="text-paragraph">
              <strong>Database version</strong>: {{ user.databaseVersion }}
            </p>
            <p class="text-paragraph">
              <strong>Update available</strong>: {{ user.updateAvailable }}
            </p>
            <p class="text-paragraph">
              You can manually check for updates. If an update is available, you
              will be prompted to download and install it.
            </p>
          </div>
          <div class="q-my-sm" v-else>
            Register to receive updates, community support, news and training and more.
          </div>

          <q-btn color="secondary" :disable="!user.registrationKey"
            >Check for updates</q-btn
          >
        </div>
        <div class="col-6 section">
          <div class="section-title">Tables</div>
          <div class="section-description">
            Site wide table size and pagination
          </div>
          <p class="text-paragraph">
            <strong>Pagination settings</strong>: Change how many records you'd
            like to see. For example, show me 10 records out of 1000.
          </p>
          <p class="text-paragraph">
            <strong>Table height settings</strong>: Change the height of the
            table. For example, choose dense to see more content on your mobile
            display.
          </p>

          <div>
            <div>Table pagination</div>
            <q-select
              label="Table pagination settings"
              dense
              outlined
              v-model="pagination"
              :min="1"
              :max="pagination"
              :input="true"
              :align="'center'"
              :color="'primary'"
              :options="[5, 10, 15, 20, 25]"
              :boundary-links="true"
              :boundary-numbers="true"
              :emit-immediately="false"
              :disable="pagination.pages === 1"
            />

            <div class="q-mt-lg">Table height</div>
            <q-select
              label="Table height settings"
              dense
              outlined
              v-model="tableHeight"
              :min="1"
              :input="true"
              :align="'center'"
              :color="'primary'"
              :options="['dense', 'standard', 'auto']"
              :boundary-links="true"
              :boundary-numbers="true"
              :emit-immediately="false"
            />
            <div class="q-md-lg">
              <p>Apply these settings to the following tables:</p>
              <q-checkbox
                v-model="tables.transactions"
                label="Transactions"
                val="auto"
                :disable="tableHeight === 'auto'"
              />
              <q-checkbox
                v-model="tables.accounts"
                label="Accounts"
                val="auto"
                :disable="tableHeight === 'auto'"
              />
              <q-checkbox
                v-model="tables.categories"
                label="Categories"
                val="auto"
                :disable="tableHeight === 'auto'"
              />
              <q-checkbox
                v-model="tables.budgets"
                label="Budgets"
                val="auto"
                :disable="tableHeight === 'auto'"
              />
              <q-checkbox
                v-model="tables.goals"
                label="Goals"
                val="auto"
                :disable="tableHeight === 'auto'"
              />
              <q-checkbox
                v-model="tables.reports"
                label="Reports"
                val="auto"
                :disable="tableHeight === 'auto'"
              />
            </div>
            <q-btn class="q-my-md" color="positive">Apply table settings</q-btn>
          </div>
          <div class="q-mt-lg">
            <div class="section-title">Registration</div>
            <div class="section-description">User Registration</div>
            <p class="text-paragraph">
              Register your copy of the BudgetSmart App to receive updates,
              community support, news and training notifications.
            </p>
            <q-btn color="primary" @click="showTermsDialog = true"
              >Read license</q-btn
            >
            <q-checkbox
              v-model="agree"
              label="I agree to the terms of use. I'd like to register."
            />
            <q-card dark bordered class="q-my-lg bg-grey-9">
              <q-card-section class="bg-grey-4">
                <q-input
                  bg-color="white" outlined dense
                  :readonly="!agree"
                  class="q-my-sm"
                  label="Name"
                  v-model="user.name"
                />
                <q-input
                  bg-color="white" outlined dense
                  :readonly="!agree"
                  class="q-my-sm"
                  label="Facebook"
                  v-model="user.facebook"
                />
                <q-input
                bg-color="white" outlined dense
                  :readonly="!agree"
                  class="q-my-sm"
                  label="Twitter"
                  v-model="user.twitter"
                />
                <q-input
                bg-color="white" outlined dense
                  :readonly="!agree"
                  class="q-my-sm"
                  label="Website"
                  v-model="user.website"
                />
                <q-input
                bg-color="white" outlined dense
                  :readonly="!agree"
                  class="q-my-sm"
                  label="Email"
                  v-model="user.email"
                />
                <q-input
                bg-color="white" outlined dense
                  :readonly="!agree"
                  class="q-my-sm"
                  label="Username"
                  v-model="user.username"
                />
                <q-input
                bg-color="white" outlined dense
                  :readonly="!agree"
                  type="password"
                  label="Password"
                  class="q-my-sm"
                  v-model="user.password"
                />
                <q-input
                bg-color="white" outlined dense
                  :readonly="!agree"
                  type="password"
                  label="Confirm Password"
                  class="q-my-sm"
                  v-model="user.password"
                />
                <q-input
                bg-color="white" outlined dense
                  readonly
                  class="q-my-sm"
                  label="Registration Key"
                  v-model="user.registrationKey"
                />
                <q-input
                bg-color="white" outlined dense
                  readonly
                  class="q-my-sm"
                  label="Database Version"
                  v-model="user.databaseVersion"
                />
              </q-card-section>
              <q-card-actions align="right">
                <q-btn
                  color="primary"
                  :disable="!!user.registrationKey || !agree"
                  label="Register"
                />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="showTermsDialog">
      <q-card>
        <q-card-section>These are the terms of use agreement. </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "SettingsIndexPage",
  data() {
    return {
      tables: {
        transactions: true,
        accounts: true,
        categories: true,
        budgets: true,
        goals: true,
        reports: true,
      },
      user: {
        name: "John Doe",
        facebook: "https://www.facebook.com/johndoe",
        twitter: "https://www.twitter.com/johndoe",
        website: "https://www.johndoe.com",
        email: "john.doe@nomail.com",
        username: "johndoe",
        password: "password",
        registrationKey: "124987452",
        databaseVersion: "1.0.0",
        applicationVersion: "0.0.1",
        updateAvailable: false,
      },
      pagination: 10,
      tableHeight: "Standard",
      agree: false,
      showTermsDialog: false,
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
.text-paragraph {
  margin-bottom: 1rem;
}
.section-description {
  margin-bottom: 0.07rem;
  font-size: 1.2em;
  /* use application negative color */
  color: #c10015;
}
.section-title {
  font-size: 2em;
  margin-bottom: 0.05rem;
  /* use application primary color */
  color: #1976d2;
}
</style>
