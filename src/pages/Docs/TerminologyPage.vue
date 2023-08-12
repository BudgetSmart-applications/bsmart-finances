<template>
  <account-definition />
  <transactions-definition />
  <category-definition />
  <settings-help-page/>
  <statements-definition />
</template>

<script>
import AccountDefinition from './components/AccountDefinition.vue';
import CategoryDefinition from './components/CategoryDefinition.vue';
import TransactionsDefinition from './components/TransactionsDefinition.vue';
import SettingsHelpPage from './components/SettingsHelpPage.vue';
import StatementsDefinition from './components/StatementsDefinition.vue';
export default {
  components: { AccountDefinition, TransactionsDefinition, CategoryDefinition, SettingsHelpPage, StatementsDefinition },
  };
</script>
