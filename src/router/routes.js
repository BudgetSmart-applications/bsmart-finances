const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/WelcomePage.vue") },
      {
        path: "/accounts",
        component: () => import("src/pages/AccountsIndexPage.vue"),
      },
      {
        path: "/transactions/:bank_id",
        component: () => import("src/pages/TransactionsIndexPage.vue"),
      },
      {
        path: "/history",
        component: () => import("src/pages/HistoryPage.vue"),
      },
      {
        path: "/reports",
        component: () => import("src/pages/ReportsIndexPage.vue"),
      },
      {
        path: "/category",
        component: () => import("src/pages/CategoryIndexPage.vue"),
      },
      {
        path: "/settings",
        component: () => import("src/pages/SettingsIndexPage.vue"),
      },
      { path: "/help", component: () => import("src/pages/HelpPage.vue") },
      {
        path: "/watch-video",
        component: () => import("src/pages/Docs/WatchVideoPage.vue"),
      },

      {
        path: "/contacts",
        component: () => import("src/pages/ContactIndexPage.vue"),
      },
    ],
  },
  {
    path: "/read-online",
    component: () => import("layouts/HelpLayout.vue"),
    children: [
      {
        path: "toc",
        component: () => import("src/pages/Docs/TableOfContentsPage.vue"),
      },
      {
        path: "terms",
        component: () => import("src/pages/Docs/TerminologyPage.vue"),
      },
      {
        path: "/accounts",
        component: () => import("src/pages/AccountsIndexPage.vue"),
      },
      {
        path: "/transactions/:bank_id",
        component: () => import("src/pages/TransactionsIndexPage.vue"),
      },
      {
        path: "/history",
        component: () => import("src/pages/HistoryPage.vue"),
      },
      {
        path: "/reports",
        component: () => import("src/pages/ReportsIndexPage.vue"),
      },
      {
        path: "/category",
        component: () => import("src/pages/CategoryIndexPage.vue"),
      },
      {
        path: "/settings",
        component: () => import("src/pages/SettingsIndexPage.vue"),
      },
      { path: "/help", component: () => import("src/pages/HelpPage.vue") },

      {
        path: "/read-online",
        component: () => import("src/pages/Docs/TerminologyPage.vue"),
      },
      {
        path: "/watch-video",
        component: () => import("src/pages/Docs/WatchVideoPage.vue"),
      },

      {
        path: "/contacts",
        component: () => import("src/pages/ContactIndexPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
