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
    required: false
  },
  url: {
    type: String,
    required: false
  },
  desc: {
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
                {{ desc }}
            </n-text>

        </n-flex>
        <template #action v-if="syllabus || url">

            <n-button v-if="syllabus" secondary tag="a" :href="syllabus">
                <template #icon>
                    <Icon name="fa7-solid:file-pdf" />
                </template>
                Syllabus
            </n-button>

            <n-button v-if="url" secondary tag="a" :href="url">
                <template #icon>
                    <Icon name="fa7-solid:link" />
                </template>
                URL
            </n-button>
        </template>

    </n-card>
</template>

<style scoped>
  :deep(.n-card__action) {
    padding: 12px 20px !important;
  }
</style>