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
          <span style="font-size: 1em">BudgetSmart Applications</span>
        </q-toolbar-title>

        <div>{{ markup.name }} v{{ markup.version }}</div>
      </q-toolbar>
      <q-tabs
        dense
        v-model="tab"
        inline-label
        class="bg-secondary text-white shadow-2"
      >
        <q-tab
          name="accounts"
          icon="account_balance"
          label="Accounts"
          @click="goToAccounts"
        />
        <q-tab name="transactions" icon="point_of_sale" label="Transactions" @click="goToTransactions" />
        <q-tab name="reports" icon="receipt_long" label="Reports" @click="goToReports" />
        <q-tab name="messages" icon="mail" label="Messages" @click="goToMessages" />
        <q-tab name="settings" icon="settings" label="Settings" @click="goToSettings" />
        <q-tab name="help" icon="help" label="Help" @click="goToSupport" />
      </q-tabs>
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
import { useRouter, useRoute } from "vue-router";
import EssentialLink from "components/EssentialLink.vue";
export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const tab = ref("");
    const router = useRouter();
    const route = useRoute();

    const markup = {
      name: "BSmart",
      version: "0.0.1",
    };
    const links = [
      {
        title: "Welcome",
        caption: "Welcome page",
        image: "/src/pages/icons/welcome.png",
        link: "/",
      },
      {
        title: "Accounts",
        caption: "Financial management",
        image: "/src/pages/icons/account.png",
        link: "/accounts",
      },
      {
        title: "Transactions",
        caption: "Transaction management",
        image: "/src/pages/icons/transactions.png",
        link: "/transactions/1",
      },
      {
        title: "Recent Logs",
        caption: "View events that have recently been logged",
        image: "/src/pages/icons/history.png",
        link: "/history",
      },
      {
        title: "Reports",
        caption: "Reports, charts, graphs",
        image: "/src/pages/icons/reports.png",
        link: "/reports",
      },
      {
        title: "Categories",
        caption: "Category management",
        image: "/src/pages/icons/categories.png",
        link: "/category",
      },
      {
        title: "Contacts",
        caption: "Category management",
        image: "/src/pages/icons/groups-of-people.png",
        link: "/contacts",
      },
      {
        title: "Configuration",
        caption: "Configuration settings",
        image: "/src/pages/icons/settings-slider.png",
        link: "/settings",
      },
      {
        title: "About",
        caption: "BudgetSmart information",
        image: "/src/pages/icons/covers/BudgetSmartLogo.png",
        link: "/about",
      },
    ];

    const leftDrawerOpen = ref(false);
    return {
      markup,
      tab,
      essentialLinks: links,
      leftDrawerOpen,
      goToAccounts() {
        router.push("/accounts");
      },
      goToTransactions() {
        router.push("/transactions/1");
      },
      goToReports() {
        router.push("/reports");
      },
      goToMessages() {
        router.push("/messages");
      },
      goToSettings() {
        router.push("/settings");
      },
      goToSupport() {
        router.push("/support");
      },
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
