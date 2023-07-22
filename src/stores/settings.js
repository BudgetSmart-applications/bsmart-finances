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
      },
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
    defaultLinkList: [
      {
        title: "Home",
        caption: "Home page",
        icon: "home",
        link: "/",
      },
      {
        title: "Banks",
        caption: "Bank management",
        icon: "account_balance_wallet",
        link: "/banks",
      },
      {
        title: "Accounts",
        caption: "Account management",
        icon: "account_balance_wallet",
        link: "/accounts",
      },
      {
        title: "Transactions",
        caption: "Transaction management",
        icon: "account_balance_wallet",
        link: "/transactions",
      },
      {
        title: "Contacts",
        caption: "Contacts management",
        icon: "account_balance_wallet",
        link: "/transactions",
      },
      {
        title: "Categories",
        caption: "Category management",
        icon: "account_balance_wallet",
        link: "/categories",
      }
    ],
    linksList: [
      {
        title: "Settings",
        caption: "Messages, Alerts, Notifications",
        icon: "settings",
        link: "/settings",
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
    ]
  }),

  getters: {
    
  },

  actions: {
    increment() {
      this.counter++;
    },
  },
});
