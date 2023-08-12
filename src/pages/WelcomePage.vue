<template>
  <q-page>
    <div>
      <div class="q-pa-md">
        <h1 class="text-h4">Getting Started</h1>
        <p class="text-subtitle1">
          How would you like to learn? Choose a path below.
        </p>

        <div class="q-col-gutter-md row items-start">
          <div class="col-6">
            <div class="text-h3">Quick Start Tutorials</div>
            <p class="q-mt-lg">
              The quickstart tutorials contain documents and videos explaining
              how to use BudgetSmart.
            </p>
            <div class="text-h6">Online User Manuals</div>
          </div>
          <div class="col-3">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/read.png"
              @click="readOnline"
            >
              <div class="absolute-bottom text-subtitle1 text-center">Read</div>
            </q-img>
          </div>

          <div class="col-3">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/watch.png"
              @click="watchVideo"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Watch
              </div>
            </q-img>
          </div>
        </div>
        <q-separator />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomePage",
  data() {
    return {};
  },
  methods: {
    readOnline() {
      // ReadOnlinePage.vue
      this.$router.push("/read-online/toc");
    },
    watchVideo() {
      // WatchVideoPage.vue
      this.$router.push("/watch-video");
    },
    goToAccounting() {
      // Go directly to the Accounting table
      this.$router.push("/accounting-view");
    },
    goToTransactions() {
      // Go directly to the Transactions table
      this.$router.push("/transactions-view");
    },
    goToBackups() {
      // Go directly to the Backups page
      this.$router.push("/backups-view");
    },
    goToImporting() {
      // Go directly to the imports page
      this.$router.push("/import-csv-view");
    },
  },
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Nulla quam felis, tristique eu tristique non, ultrices id risus. Donec condimentum purus urna, auctor aliquet enim rutrum nec. Donec vitae eros sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus. Nulla quam felis, tristique eu tristique non, ultrices id risus. Donec condimentum purus urna, auctor aliquet enim rutrum nec.",
    };
  },
});
</script>
