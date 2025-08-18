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
      fontSize: '1rem'
    },
  }

  const counter = useState('counter', 'index')
  const route = useRoute() // current route object. Can access current page name with route.name
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
        <!-- render a space always, as an easy way of ensuring that header doesn't change height on other pages -->
        <n-gradient-text type="primary" size="28">
            &nbsp;
        </n-gradient-text>
        <span v-show="route.name != 'index'">
        <!-- only render the name in the header on pages other than main -->
        <n-gradient-text type="primary" size="28">
            Stepan&nbsp;
        </n-gradient-text>
        <n-gradient-text type="primary" size="28">
            Gordeev
        </n-gradient-text>
        </span>
        </span>

        <!-- width of n-menu has to be hardcoded: by default, it wants 100% width and thus goes to new line. So set it high enough to fit everything and right-justify with justify-content -->
        <n-menu
          v-model:value="route.name"
          :options="menuOptions"
          mode="horizontal"
          style="width: 300px; justify-content: flex-end; color: black; font-weight: bold; font-size: 16px; align-items: center; display: flex;"
        />
        

      </n-flex>
    </n-layout-header>

    <n-layout-content 
      content-style="padding: 24px; width: 100%; max-width: 1000px;" 
      style="display: flex; justify-content: center;">
      
      <!-- <div style="width: 100%; max-width: 1200px;"> -->
        <NuxtPage />
      <!-- </div> -->

    </n-layout-content>

  </n-layout>  
  </n-config-provider>
</template>

<style scoped>
div {
  font-family: 'Rubik', sans-serif; /* for some reason setting it in themeOverrides does not work */
  font-weight: 300;
  font-size: 1.0rem;
}
</style>
