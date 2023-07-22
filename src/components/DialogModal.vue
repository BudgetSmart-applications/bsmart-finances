<template>
  <q-dialog v-model="dialogShow" persistent>
      <q-card style="width: 300px">
        <q-card-section>
          <div class="q-col-gutter-md row items-start">
            <div class="col-4">
              <q-img src="src/pages/icons/02/3.png"></q-img>
            </div>
            <div class="col-8 q-mt-lg">
              <div class="text-h6">Getting Started</div>
              <p>
                You are turning off the Getting Started welcome page &
                tutorials.
              </p>
              <p>
                If you change your mind, you can turn it back on in the Settings
                menu.
              </p>
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Cancel" color="secondary" v-close-popup />
          <q-btn label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
export default {
  name: "DialogModal",
  data() {
    return {
      dialogShow: true,
    };
  },
};
}
</script>

<style>

</style>
