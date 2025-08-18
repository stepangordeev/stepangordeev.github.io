<script setup>
import { NButton, NCard, NText, NFlex } from 'naive-ui'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  syllabus: {
    type: String,
    required: true
  },
  terms: {
    type: String,
    required: true
  }
})

</script>

<template>

    <n-card :title="name" content-style="padding-bottom: 12px" header-style="padding-bottom: 12px">
        <template #header-extra>
            {{ number }}
        </template>
        <n-flex vertical>

            <n-text italic>
                {{ terms }}
            </n-text>

        </n-flex>
        <template #action>

            <n-button secondary tag="a" :href="syllabus">
                <template #icon>
                    <Icon name="fa6-solid:file-pdf" />
                </template>
                Syllabus
            </n-button>
        </template>

    </n-card>
</template>

<style scoped>
  :deep(.n-card__action) {
    padding: 12px 20px !important;
  }
</style>