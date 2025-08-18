<script setup>
import { computed, ref, Transition } from 'vue'
import { NButton, NCard, NText, NFlex, NSpace } from 'naive-ui'

const knownAuthors = [
  { name: 'Sudhir Singh', url: 'https://www.sudhirksingh.com/' },
  { name: 'Sandro Steinbach', url: 'https://www.sandrosteinbach.com/'},
  { name: 'Jeremy Jelliffe', url: 'http://www.jeremyjelliffe.com/'},
  { name: 'Dongin Kim', url: 'https://www.donginkim.com/' },
  { name: 'Thomas Ginn', url: 'https://www.thomasginn.org/' },
  { name: 'Zachary Barnett-Howell', url: 'https://zackbh.github.io/' },
  { name: 'Travis Baseler', url: 'https://sites.google.com/view/travisbaseler/home' }
];

const showAbstract = ref(false);

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  title_link: {
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
  journal: {
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
    required: false
  },
  slides: {
    type: String,
    required: false
  },
  working_name: {
    type: String,
    required: false
  },
  working_link: {
    type: String,
    required: false
  },
  policy_name: {
    type: String,
    required: false
  },
  policy_link: {
    type: String,
    required: false
  },
  registry_name: {
    type: String,
    required: false
  },
  registry_link: {
    type: String,
    required: false
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

    <n-card content-style="padding-bottom: 12px" header-style="padding-bottom: 12px">

        <n-flex vertical size="small">

            <n-text v-if="authors != ''">
                with 
                <span v-for="(author, index) in processedAuthors" :key="author.name">
                    <a v-if="author.url" :href="author.url" target="_blank" class="author-link">{{ author.name }}</a>
                    <span v-else>{{ author.name }}</span>
                    <span v-if="index < processedAuthors.length - 1">, </span>
                </span>
            </n-text>

            <n-text>
                {{ status }} <span class="journal-name"> {{ journal }} </span>{{ date }}
            </n-text>

        </n-flex>

        <template #header>
          <a class="title-link" :href="title_link">{{ title }}</a>           
        </template>

        <template #action>
            <n-space>
              <n-button secondary @click="showAbstract = !showAbstract">
                  <template #icon>
                      <span class="arrow-icon" :class="{ 'rotated': showAbstract }">
                          <Icon name="fa7-solid:chevron-right" />
                      </span>
                  </template>
                  Abstract
              </n-button>
              <n-button v-if="pdf" secondary tag="a" :href="pdf">
                  <template #icon>
                      <Icon name="fa7-solid:file-pdf" />
                  </template>
                  PDF
              </n-button>
              <n-button v-if="slides" secondary tag="a" :href="slides">
                  <template #icon>
                      <Icon name="fa7-solid:layer-group" />
                  </template>
                  Slides
              </n-button>
              <n-button v-if="working_link" secondary tag="a" :href="working_link">
                  <template #icon>
                      <Icon name="fa7-solid:pen-nib" />
                  </template>
                  {{ working_name }}
              </n-button>
              <n-button v-if="policy_link" secondary tag="a" :href="policy_link">
                  <template #icon>
                      <Icon name="fa7-solid:landmark" />
                  </template>
                  {{ policy_name }}
              </n-button>
              <n-button v-if="registry_name" secondary tag="a" :href="registry_link">
                  <template #icon>
                      <Icon name="fa7-solid:stamp" />
                  </template>
                  {{ registry_name }}
              </n-button>

              <transition name="slide-fade">
                <n-text v-if="showAbstract" style="margin-top: 16px;">
                  {{ abstract }}
                </n-text>
              </transition>
            </n-space>
        </template>

    </n-card>
    
</template>

<style scoped>
:deep(.n-card__action) {
  padding: 12px 20px !important;
}

a.author-link {
  border-bottom: 1px dashed var(--n-text-color) !important;
  color: var(--n-text-color) !important;
  text-decoration: none;
}
a.author-link:hover {
  border-bottom: 1px solid var(--n-text-color) !important;
}

a.title-link {
  border-bottom: 1px dashed var(--n-text-color) !important;
  color: var(--n-text-color) !important;
  text-decoration: none;
}
a.title-link:hover {
  border-bottom: 1px solid var(--n-text-color) !important;
}

.arrow-icon {
  display: inline-block;
  transition: transform 0.3s ease;
}

.arrow-icon.rotated {
  transform: rotate(90deg);
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

span.journal-name {
  /* font-style: italic; */
  color: #f99a07;
}
</style>