<script setup>
import { NButton, NCard, NText, NFlex, NSpace } from 'naive-ui'

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

    <n-card :bordered="false" :title="name" :theme-overrides="{ paddingMedium: '0 12px' }" header-style="padding-bottom: 6px">
        <template #header-extra>
            {{ number }}
        </template>
        <n-flex vertical>

            <n-text italic>
                {{ desc }}
            </n-text>

        </n-flex>
        <template #action v-if="syllabus || url">
            <n-space>
                <n-button size="small" v-if="syllabus" secondary tag="a" :href="syllabus">
                    <template #icon>
                        <Icon name="fa7-solid:file-pdf" />
                    </template>
                    Syllabus
                </n-button>

                <n-button size="small" v-if="url" secondary tag="a" :href="url">
                    <template #icon>
                        <Icon name="fa7-solid:link" />
                    </template>
                    URL
                </n-button>
            </n-space>
        </template>

    </n-card>
</template>

<style scoped>
  .n-card {
    /* spacing sits outside the card, so the left border spans just the text */
    margin: 14px 0 10px;
    border-left: 1px solid var(--n-border-color);
    border-radius: 0; /* rounded corners would curl the ends of the lone left border */
  }
  :deep(.n-card__action) {
    padding-top: 4px !important;
    background-color: transparent !important;
  }
  :deep(.n-card__action .n-button) {
    vertical-align: top; /* small buttons on the default baseline leave a gap below */
  }
</style>