<template>
    <q-dialog style="width: 700px;" v-model="alert">
      <q-card>
        <q-card-section style="width: 550px; ">
          <q-img
            style="border: 1px solid #ccc"
            src="/src/pages/icons/covers/about-bsmart-transparent.png"
            alt="getting started cover image"
          />
        </q-card-section>
      <q-card-actions>
        <q-btn
          style="width: 100px"
          color="primary"
          label="Close"
          @click="alert = false"
        />
      </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
export default {
  name: "AboutDialog",
  data() {
    return {
      dialog: true,
      alert: true,
    };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
