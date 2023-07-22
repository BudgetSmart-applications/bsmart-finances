<template>
  <div class="q-ma-md">
    <div class="text-h4">Help, tutorials & support</div>
    <div class="q-col-gutter-md row items-start">
      <div class="col-4">
        <q-img class="cursor-pointer" src="src/pages/icons/help.png"> </q-img>
      </div>
      <div class="col-8">
        <div class="q-col-gutter-md row items-start">
          <div class="col-4">
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

          <div class="col-4">
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

          <div class="col-4">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/backup.png"
              @click="readOnline"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Backup data
              </div>
            </q-img>
          </div>

          <div class="col-4">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/import.png"
              @click="readOnline"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Import cvs
              </div>
            </q-img>
          </div>

          <div class="col-4">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/support.png"
              @click="readOnline"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Get help
              </div>
            </q-img>
          </div>

          <div class="col-4">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/alerts.png"
              @click="readOnline"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                Set alerts
              </div>
            </q-img>
          </div>

          <div class="col-4">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/history.png"
              @click="readOnline"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                View history
              </div>
            </q-img>
          </div>

          <div class="col-4">
            <q-img
              class="cursor-pointer"
              src="src/pages/icons/settings.png"
              @click="readOnline"
            >
              <div class="absolute-bottom text-subtitle1 text-center">
                App settings
              </div>
            </q-img>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
