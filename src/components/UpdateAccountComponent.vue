<template>
  <q-dialog v-model="showDialog" persistent>
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
              type="number"
              mode="numeric"
              outlined
              v-model="bankObject.starting_balance"
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
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      default: "Create",
    },
    account: {
      type: Object,
      default: () => {},
    },
    bankObject: {
      type: Object,
      default: () => {},

    }
  },
  data() {
    return {
      maximizedToggle: true,
      showDialog: true,
    }
  },
};
</script>

<style></style>
