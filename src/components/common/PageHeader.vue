<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-3">
    <div>
      <h4 class="mb-1">{{ title }}</h4>
      <p v-if="description" class="text-muted small mb-0">{{ description }}</p>
    </div>
    <slot></slot>
  </div>
</template>
