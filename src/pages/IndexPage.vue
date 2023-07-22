<template>
  <q-page>
    <div>
      <q-toggle
        label="Getting Started"
        color="primary"
        v-model="getting_started"
      />

    </div>
    <div>
      <div v-if="getting_started" class="q-pa-md">
        <h1 class="text-h4">Getting Started</h1>
        <p class="text-subtitle1">
          How would you like to learn? Choose a path below.
        </p>
        <div class="q-col-gutter-md row items-start">
          <div class="col-3">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/read.png"
              @click="readOnline"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Read
              </div>
            </q-img>
          </div>

          <div class="col-3">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/watch.png"
              @click="watchVideo"
            >
              <div class="absolute-bottom text-subtitle1 text-center">Watch</div>
            </q-img>
          </div>

          <div class="col-3">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/account.png"
              @click="readOnline"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Accounts
              </div>
            </q-img>
          </div>

          <div class="col-3">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/transactions.png"
              @click="readOnline"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Transactions
              </div>
            </q-img>
          </div>

          <div class="col-3">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/backup.png"
              @click="readOnline"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Backup
              </div>
            </q-img>
          </div>

          <div class="col-3">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/import.png"
              @click="readOnline"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Import
              </div>
            </q-img>
          </div>

          <div class="col-3">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/support.png"
              @click="readOnline"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Support
              </div>
            </q-img>
          </div>


          <div class="col-3">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/alerts.png"
              @click="readOnline"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Alerts
              </div>
            </q-img>
          </div>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      getting_started: true,
      notifications: true,
      logs: true,
    };
  },
  methods: {
    readOnline() {
      this.$router.push("/read-online");
    },
    watchVideo() {
      this.$router.push("/watch-video");
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
