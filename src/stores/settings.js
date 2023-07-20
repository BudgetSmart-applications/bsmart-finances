import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    name: "BSmart",
    version: "0.0.1",
    settingsLinksList: [
      {
        title: "Home",
        caption: "Home",
        icon: "home",
        link: "/",
      },
      {
        title: "Settings Home",
        caption: "Application Settings",
        icon: "settings",
        link: "/settings",
      },
      {
        title: "Communication",
        caption: "Messages, Alerts, and Notifications",
        icon: "message",
        link: "/messages",
      }
    ],
    documentsLinkList: [
      {
        title: "Home",
        caption: "Home",
        icon: "home",
        link: "/",
      },
      {
        title: "Docs",
        caption: "BSmart Documentation",
        icon: "book",
        link: "/docs",
      },
    ],
    accountsList: [
      {
        title: "Home",
        caption: "Home page",
        icon: "home",
        link: "/",
      },
      {
        title: "Banks",
        caption: "Bank Accounts",
        icon: "account_balance_wallet",
        link: "/banks",
      },
      {
        title: "Settings",
        caption: "Messages, Alerts, Notifications",
        icon: "settings",
        link: "/settings",
      },
    ],
    linksList: [
      {
        title: "Home",
        caption: "Home page",
        icon: "home",
        link: "/",
      },
      {
        title: "BSmart Finances",
        caption: "Financial Management",
        icon: "account_balance_wallet",
        link: "/banks",
      },
      {
        title: "Docs",
        caption: "BSmart Documentation",
        icon: "book",
        link: "/docs",
      },
      {
        title: "About",
        caption: "About BudgetSmart",
        icon: "code",
        link: "/about",
      },
      {
        title: "Settings",
        caption: "Messages, Alerts, Notifications",
        icon: "settings",
        link: "/settings",
      },
    ],
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
  },
});
