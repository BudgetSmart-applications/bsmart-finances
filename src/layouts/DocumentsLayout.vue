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
          {{ app.name }}
        </q-toolbar-title>

        <div>{{app.name}} v{{ app.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          BSmart Documents
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="q-ma-lg">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useSettingsStore} from 'src/stores/settings'


export default defineComponent({
  name: 'DocumentsLayout',

  components: {
    EssentialLink
  },

  setup () {
    const appSettings = useSettingsStore
    const app = appSettings()


    const leftDrawerOpen = ref(false)


    return {
      app,
      essentialLinks: app.documentsLinkList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
