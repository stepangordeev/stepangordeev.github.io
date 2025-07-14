<script setup>
  import { NConfigProvider, NButton, NLayout, NLayoutContent, NLayoutHeader, NLayoutFooter, NMenu, NGradientText, NFlex } from 'naive-ui'

  const counter = useState('counter', () => Math.round(Math.random() * 1000))
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
  <n-layout>

    <n-layout-header style="padding: 10px 20px;" bordered>
      <n-flex justify="space-between" align-items="center">

        <n-gradient-text type="primary" size="24">
            Stepan Gordeev
        </n-gradient-text>

        <!-- width of n-menu has to be hardcoded: by default, it wants 100% width and thus goes to new line. can't find a way for it to right-align the contents even if the whole menu is on the right. If width is insufficient, element won't render -->
        <n-menu
          :options="menuOptions"
          mode="horizontal"
          style="width: 250px;"
        />
        

      </n-flex>
    </n-layout-header>

    <n-layout-content content-style="padding: 24px;">

      <NuxtPage />

    </n-layout-content>

    <n-layout-footer>Footer</n-layout-footer>
  </n-layout>  
</template>
