<script setup>
  import { NConfigProvider, NButton, NLayout, NLayoutContent, NLayoutHeader, NLayoutFooter, NMenu } from 'naive-ui'
  const menuOptions = [
    {
      label: "research",
      key: "research"
    },
    {
      label: "teaching",
      key: "teaching"
    },
    {
      label: "cv",
      key: "cv"
    }

  ];
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
          Pingshan Road
        </n-layout-content>
        <n-layout-footer>Chengfu Road</n-layout-footer>
  </n-layout>  
</template>
