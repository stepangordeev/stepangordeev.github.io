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

    <n-card :title="name">
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