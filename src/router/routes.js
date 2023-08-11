
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',              component: () => import('src/pages/WelcomePage.vue') },
      { path: '/accounts',     component: () => import('src/pages/AccountsIndexPage.vue') },
      { path: '/transactions/:bank_id', component: () => import('src/pages/TransactionsIndexPage.vue') },
      { path: '/history',      component: () => import('src/pages/HistoryPage.vue') },
      { path: '/reports',      component: () => import('src/pages/ReportsIndexPage.vue') },
      { path: '/category',     component: () => import('src/pages/CategoryIndexPage.vue') },
      { path: '/settings',     component: () => import('src/pages/SettingsIndexPage.vue') },
      { path: '/help',         component: () => import('src/pages/HelpPage.vue') },

      { path: '/read-online', component: () => import('src/pages/Docs/ReadOnlinePage.vue') },
      { path: '/watch-video', component: () => import('src/pages/Docs/WatchVideoPage.vue') },

    { path: '/contacts',                component: () => import('src/pages/ContactIndexPage.vue') },

      { path: '/about',        component: () => import('src/pages/AboutBSmartPage.vue') },
      { path: '/account-table', component: () => import('components/AccountTable.vue') },













      { path: '/view-accounts',              component: () => import('pages/Accounts/ViewAccountsPage.vue') },
      { path: '/add-account',                component: () => import('pages/Accounts/AddAccountPage.vue') },
      { path: '/edit-account/:account_id',   component: () => import('pages/Accounts/EditAccountPage.vue') },
      { path: '/view-account/:account_id',   component: () => import('pages/Accounts/AccountDetailsPage.vue') },
      { path: '/delete-account/:account_id', component: () => import('pages/Accounts/AccountDeletionPage.vue') },

      { path: '/banks',                component: () => import('pages/Banks/BanksIndexPage.vue') },
      { path: '/view-banks',           component: () => import('pages/Banks/ViewBanksPage.vue') },
      { path: '/add-bank',             component: () => import('pages/Banks/AddBankPage.vue') },
      { path: '/edit-bank/:bank_id',   component: () => import('pages/Banks/EditBankPage.vue') },
      { path: '/view-bank/:bank_id',   component: () => import('pages/Banks/BankDetailsPage.vue') },
      { path: '/delete-bank/:bank_id', component: () => import('pages/Banks/BankDeletionPage.vue') },

      { path: '/view-category',           component: () => import('pages/Category/ViewCategoryPage.vue') },
      { path: '/add-category',             component: () => import('pages/Category/AddCategoryPage.vue') },
      { path: '/edit-category/:category_id',   component: () => import('pages/Category/EditCategoryPage.vue') },
      { path: '/view-category/:category_id',   component: () => import('pages/Category/CategoryDetailsPage.vue') },
      { path: '/delete-category/:category_id', component: () => import('pages/Category/CategoryDeletionPage.vue') },


      { path: '/view-contacts',           component: () => import('pages/Contacts/ViewContactsPage.vue') },
      { path: '/add-contact',             component: () => import('pages/Contacts/AddContactPage.vue') },
      { path: '/edit-contact/:contact_id',   component: () => import('pages/Contacts/EditContactPage.vue') },
      { path: '/view-contact/:contact_id',   component: () => import('pages/Contacts/ContactDetailsPage.vue') },
      { path: '/delete-contact/:contact_id', component: () => import('pages/Contacts/ContactDeletionPage.vue') },
{ path: '/view-transactions',           component: () => import('pages/Transactions/ViewTransactionsPage.vue') },
      { path: '/add-transaction',             component: () => import('pages/Transactions/AddTransactionPage.vue') },
      { path: '/edit-transaction/:transaction_id',   component: () => import('pages/Transactions/EditTransactionPage.vue') },
      { path: '/view-transaction/:transaction_id',   component: () => import('pages/Transactions/TransactionDetailsPage.vue') },
      { path: '/delete-transaction/:transaction_id', component: () => import('pages/Transactions/TransactionDeletionPage.vue') },


    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
