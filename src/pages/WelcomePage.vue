<template>
  <q-page>
    <div>
      <div>
        <div class="q-col-gutter-md q-mb-md row items-start">
          <div class="col-6">
            <q-img
              @click="goToAccounting"
              style="border: 1px solid #ccc"
              src="/src/pages/icons/covers/quickstart-go-to-accounts.png"
              alt="getting started cover image"
            />
          </div>
          <div class="col-6">
            <q-img
              @click="readOnline"
              style="border: 1px solid #ccc"
              src="/src/pages/icons/covers/quickstart-guide.png"
              alt="getting started cover image"
            />
          </div>
          <div class="col-6">
            <q-img
              style="border: 1px solid #ccc"
              src="/src/pages/icons/covers/quickstart-online-manual.png"
              alt="getting started cover image"
            />
          </div>
          <div class="col-6">
            <q-img
              style="border: 1px solid #ccc"
              src="/src/pages/icons/covers/quickstart-watch-videos.png"
              alt="getting started cover image"
            />
          </div>

          <div class="col-6">
            <q-img
              style="border: 1px solid #ccc"
              src="/src/pages/icons/covers/settings-backups.png"
              alt="getting started cover image"
            />
          </div>

          <div class="col-6">
            <q-img
              style="border: 1px solid #ccc"
              src="/src/pages/icons/covers/settings-importing.png"
              alt="getting started cover image"
            />
          </div>


        </div>
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
      this.$router.push("/read-online/watch-video");
    },
    goToAccounting() {
      // Go directly to the Accounting table
      this.$router.push("/accounts");
    },
    goToTransactions() {
      // Go directly to the Transactions table
      this.$router.push("/read-online/transactions");
    },
    goToBackups() {
      // Go directly to the Backups page
      this.$router.push("/read-online/backups");
    },
    goToImporting() {
      // Go directly to the imports page
      this.$router.push("/read-online/import-csv-view");
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

<style scoped>
.q-img {
  cursor: pointer;
}
</style>
