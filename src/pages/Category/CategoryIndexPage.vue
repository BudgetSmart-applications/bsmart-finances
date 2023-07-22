<template>
  <div class="q-ma-md">
    <div class="text-h4">Categories</div>
    <div class="q-pa-md">
      <div class="q-col-gutter-md row items-start">
        <div class="col-4">
          <q-img class="cursor-pointer" src="src/pages/icons/categories.png">
          </q-img>
        </div>
        <div class="col-10">
          <div class="section">
            <div class="paragraph">
              <div class="text-h6">Categories</div>
              BudgetSmart uses categories to group your transactions. This
              allows you to see how you are spending your money.
            </div>
            <div class="paragraph">
              <div class="text-h6">Categories & tags</div>
              BudgetSmart allows you to categorize and create tags for your
              transactions. This allows you to group your transactions to better
              understand where you are spending your money.
            </div>
          </div>
        </div>
      </div>
    </div>

    <q-btn color="primary" label="Next" icon-right="arrow_forward" />
  </div>
</template>

<script>
export default {
  name: "CategoryIndexPage",
  data() {
    return {};
  },
};
</script>

<style></style>
