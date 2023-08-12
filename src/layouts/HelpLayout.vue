<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
         BudgetSmart Applications Help
        </q-toolbar-title>

        <div>{{ markup.name }} v{{ markup.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> {{ markup.name }} Finances </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="q-ma-sm">

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const markup = {
      name: 'BSmart',
      version: '0.0.1',
    };
    const links = [
      {
        title: "Welcome",
        caption: "Welcome page",
        image: "/src/pages/icons/welcome.png",
        link: "/",
      },
      {
        title: "Table of Contents",
        caption: "Welcome page",
        image: "/src/pages/icons/table-of-contents.png",
        link: "toc",
      },
      {
        title: "Working with Accounts",
        caption: "Learn to create, edit, and delete accounts",
        image: "/src/pages/icons/account.png",
        link: "accounts",
      },
      {
        title: "Working with Transactions",
        caption: "Learn to create, edit, and delete transactions",
        image: "/src/pages/icons/transactions.png",
        link: "transactions",
      },
      {
        title: "Account Administration",
        caption: "Learn about settings, reading reports, statements, and history",
        image: "/src/pages/icons/history.png",
        link: "/administration",
      },
    ]

    const leftDrawerOpen = ref(false);
    return {
      markup,
      essentialLinks: links,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
