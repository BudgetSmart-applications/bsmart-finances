<template>
  <div class="q-ma-md">
    <div class="text-h4">Configuration</div>
    <div class="text-subtitle1">View reports, charts, graphs</div>
    <div class="q-col-gutter-md row items-start">
      <div class="q-ma-md">
      <div class="col-6 section">
        <div class="section-title">General</div>
        <div class="section-description" color='primary'>Categories</div>
        <p class="text-paragraph">Configure default behavior of users, including registration requirements, e-mails, user avatars.</p>
      </div>
      <div class="col-6 section">
        <div class="section-title">System</div>
        <div class="section-description">Site information</div>
        <p class="text-paragraph">Configure default behavior of users, including registration requirements, e-mails, user avatars.</p>
        <div class="section-title">People</div>
        <p class="text-paragraph">Configure default behavior of users, including registration requirements, e-mails, user avatars.</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsIndexPage",
  data() {
    return {};
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
  margin-bottom: .07rem;
  font-size: 1.2em;
  /* use application negative color */
  color: #C10015;
}
.section-title {
  font-size: 2em;
  margin-bottom: .05rem;
  /* use application primary color */
  color: #1976d2;
}
</style>
