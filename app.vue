<script setup>
  import { NConfigProvider, NButton, NLayout, NLayoutContent, NLayoutHeader, NLayoutFooter, NMenu, NGradientText, NFlex } from 'naive-ui'

  /**
   * Use this for type hints under js file
   * @type import('naive-ui').GlobalThemeOverrides
   */
  const themeOverrides = {
    common: {
      primaryColor: '#f99a07',
      primaryColorHover: '#faae38', // slightly lighter
    },
  }

  const counter = useState('counter', 'index')
  const menuOptions = [
    {
      label: () =>
        h(
          resolveComponent('NuxtLink'),
          {
            to: '/'
          },
          "Research"
        ),
      key: 'index'
    },
    {
      label: () =>
        h(
          resolveComponent('NuxtLink'),
          {
            to: '/teaching'
          },
          "Teaching"
        ),
      key: 'teaching'
    },
    {
      label: () =>
        h(
          "a",
          {
            href: "/cv.pdf"
          },
          "CV"
        ),
      key: 'cv'
    }
  ]
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
  <n-layout>

    <n-layout-header style="padding: 10px 20px;" bordered>
      <n-flex justify="space-between" align-items="center">

        <span>
        <n-gradient-text type="primary" size="24">
            Stepan&nbsp;
        </n-gradient-text>
        <n-gradient-text type="primary" size="24">
            Gordeev
        </n-gradient-text>
        </span>

        <!-- width of n-menu has to be hardcoded: by default, it wants 100% width and thus goes to new line. So set it high enough to fit everything and right-justify with justify-content -->
        <n-menu
          v-model:value="counter"
          :options="menuOptions"
          mode="horizontal"
          style="width: 300px; justify-content: flex-end; color: black;"
        />
        

      </n-flex>
    </n-layout-header>

    <n-layout-content content-style="padding: 24px;">

      <NuxtPage />

    </n-layout-content>

    <n-layout-footer>Footer</n-layout-footer>
  </n-layout>  
  </n-config-provider>
</template>

<style scoped>
</style>
