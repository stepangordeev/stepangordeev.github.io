<script setup>
import { computed } from 'vue'
import { NButton, NCard, NText, NFlex } from 'naive-ui'

const knownAuthors = [
  { name: 'Sudhir Singh', url: 'https://www.sudhirksingh.com/' },
  { name: 'Sandro Steinbach', url: 'https://www.sandrosteinbach.com/'},
  { name: 'Jeremy Jelliffe', url: 'http://www.jeremyjelliffe.com/'},
  { name: 'Dongin Kim', url: 'https://sites.google.com/view/dongin-kim/' }
];

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: false
  },
  date: {
    type: String,
    required: true
  },
  abstract: {
    type: String,
    required: true
  },
  pdf: {
    type: String,
    required: true
  }
})

const processedAuthors = computed(() => {
  const authorNames = props.authors.split(',').map(name => name.trim());
  return authorNames.map(name => {
    const knownAuthor = knownAuthors.find(author => author.name === name);
    if (knownAuthor) {
      return { name, url: knownAuthor.url };
    }
    return { name, url: null };
  });
});

</script>

<template>

    <n-card :title="title">
        <n-flex vertical>

            <n-text v-if="authors != ''">
                with 
                <span v-for="(author, index) in processedAuthors" :key="author.name">
                    <a v-if="author.url" :href="author.url" target="_blank">{{ author.name }}</a>
                    <span v-else>{{ author.name }}</span>
                    <span v-if="index < processedAuthors.length - 1">, </span>
                </span>
            </n-text>

            <n-text>
                {{ status }}
            </n-text>

            <n-text>
                {{ date }}
            </n-text>

        </n-flex>
        <template #action>

            <n-button secondary tag="a" :href="pdf">
                <template #icon>
                    <Icon name="fa6-solid:file-pdf" />
                </template>
                PDF
            </n-button>
        </template>

    </n-card>
</template>