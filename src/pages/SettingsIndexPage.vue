<template>
  <div class="q-ma-md">
    <div class="text-h4">Configuration</div>
    <div class="text-subtitle1">View reports, charts, graphs</div>
    <div class="q-col-gutter-md row items-start">
      <div class="q-ma-md">
        <div class="col-6 section">
          <div class="section-title">General</div>
          <div class="section-description" color="primary">Categories</div>
          <p class="text-paragraph">
            Configure default behavior of users, including registration
            requirements, e-mails, user avatars.
          </p>
          <q-btn color="secondary" :disable="!agree">Check for updates</q-btn>
        </div>
        <div class="col-6 section">
          <div class="section-title">System</div>
          <div class="section-description">Site information</div>
          <p class="text-paragraph">Configure default behavior of tables.</p>

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
          </div>
          <div class="q-mt-lg">
            <div class="section-title">Registration</div>
            <div class="section-description">User Registration</div>
            <p class="text-paragraph">
              Register your copy of the BudgetSmart App to receive updates,
              community support, news and training notifications.
            </p>
            <q-btn color="primary" @click="showTermsDialog = true">Read license</q-btn>
            <q-checkbox v-model="agree" label="I agree to the license terms" />
            <q-card v-if="agree">
              <q-card-section> </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="showTermsDialog">
      <q-card>
        <q-card-section> These are the terms of use license. </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "SettingsIndexPage",
  data() {
    return {
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
