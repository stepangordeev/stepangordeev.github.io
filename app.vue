<script setup>
  import { NConfigProvider, NButton, NLayout, NLayoutContent, NLayoutHeader, NLayoutFooter, NMenu } from 'naive-ui'

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
    <n-layout-header>
      <n-menu
        mode="horizontal"
        :options="menuOptions"
        responsive
      />
    </n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          <NuxtPage />
        </n-layout-content>
        <n-layout-footer>Chengfu Road</n-layout-footer>
  </n-layout>  
</template>
