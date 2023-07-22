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
          {{ markup.name }}
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
    const links = [{
        title: "Welcome",
        caption: "Welcome page",
        image: "src/pages/icons/welcome.png",
        link: "/",
      },
      {
        title: "Accounts",
        caption: "Financial management",
        image: "src/pages/icons/account.png",
        link: "/accounts",
      },
      {
        title: "Transactions",
        caption: "Transaction management",
        image: "src/pages/icons/transactions.png",
        link: "/transactions",
      },
      {
        title: "History & Logs",
        caption: "Alerts, messages, logs & history",
        image: "src/pages/icons/history.png",
        link: "/history",
      },
      {
        title: "Reports",
        caption: "Reports, charts, graphs",
        image: "src/pages/icons/reports.png",
        link: "/reports",
      },
      {
        title: "Categories",
        caption: "Category management",
        image: "src/pages/icons/categories.png",
        link: "/category",
      },
      {
        title: "Settings",
        caption: "Application settings",
        image: "src/pages/icons/settings-slider.png",
        link: "/settings",
      },
      {
        title: "Help",
        caption: "Help, tutorials & support",
        image: "src/pages/icons/help.png",
        link: "/help",
      }
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
