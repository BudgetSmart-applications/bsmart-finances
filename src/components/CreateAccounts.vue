
<script setup>
const dialog = ref(true);
const maximizedToggle = ref(false);
const action = ref("Create");
const yearsListOptions = ref([])
const account_year = ref("");
const account_type = ref("");
const bank_name = ref("");
const account_name = ref("");
const starting_balance = ref("");

const saveNewAccount = () => {
  console.log("saveNewAccount");
  console.log(account_year.value);
  console.log(account_type.value);
  console.log(bank_name.value);
  console.log(account_name.value);
  console.log(starting_balance.value);
  dialog.value = true;
};

const updateAccount = () => {
  console.log("updateAccount");
  console.log(account_year.value);
  console.log(account_type.value);
  console.log(bank_name.value);
  console.log(account_name.value);
  console.log(starting_balance.value);
  dialog.value = false;
};


</script>

<template>
  <div>
    <q-dialog
      v-model="dialog"
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
                v-model="account_year"
                label="Accounting Year"
              />
              <q-select
                dense
                class="q-py-sm"
                :options="yearsListOptions"
                outlined
                v-model="account_type"
                label="Account type"
              />
              <q-input
                dense
                class="q-py-sm"
                outlined
                v-model="bank_name"
                label="Bank name"
              />
              <q-input
                dense
                class="q-py-sm"
                outlined
                v-model="account_name"
                label="Account name"
              />
              <q-input
                dense
                class="q-py-sm"
                type="text"
                inputmode="decimal"
                outlined
                v-model="starting_balance"
                label="Starting balance"
              />
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
  </div>
</template>

<style lang="scss" scoped>

</style>
