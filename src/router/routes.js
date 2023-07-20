
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/dev', component: () => import('pages/DevPage.vue') },
      { path: '/about', component: () => import('src/pages/AboutBSmartPage.vue') }
    ]
  },
  {
    path: '/settings',
    component: () => import('layouts/SettingsLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Settings/SettingsIndexPage.vue') },
      { path: '/messages', component: () => import('pages/Settings/MessagesPage.vue') },
    ]
  },
  {
    path: '/docs',
    component: () => import('layouts/DocumentsLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DocumentsIndexPage.vue') },
    ]
  },
  {
    path: '/banks',
    component: () => import('layouts/FinancesLayout.vue'),
    children: [

      { path: '/accounts', component: () => import('pages/Accounts/AccountsIndexPage.vue') },
      { path: '/view-accounts', component: () => import('pages/Accounts/ViewAccountsPage.vue') },
      { path: '/add-account', component: () => import('pages/Accounts/AddAccountPage.vue') },
      { path: '/edit-account/:account_id', component: () => import('pages/Accounts/EditAccountPage.vue') },
      { path: '/view-account/:account_id', component: () => import('pages/Accounts/AccountDetailsPage.vue') },
      { path: '/delete-account/:account_id', component: () => import('pages/Accounts/AccountDeletionPage.vue') },

      { path: '/banks', component: () => import('pages/Banks/BanksIndexPage.vue') },
      { path: '/view-banks', component: () => import('pages/Banks/ViewBanksPage.vue') },
      { path: '/add-bank', component: () => import('pages/Banks/AddBankPage.vue') },
      { path: '/edit-bank/:bank_id', component: () => import('pages/Banks/EditBankPage.vue') },
      { path: '/view-bank/:bank_id', component: () => import('pages/Banks/BankDetailsPage.vue') },
      { path: '/delete-bank/:bank_id', component: () => import('pages/Banks/BankDeletionPage.vue') }
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
