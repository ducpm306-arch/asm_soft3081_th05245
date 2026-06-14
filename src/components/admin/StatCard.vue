<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  note: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'success'
  }
})
</script>

<template>
  <div class="card border-0 shadow-sm h-100">
    <div class="card-body">
      <div class="small text-muted mb-2">{{ label }}</div>
      <h3 class="mb-2">{{ value }}</h3>
      <span v-if="note" :class="`badge bg-${color} bg-opacity-10 text-${color}`">{{ note }}</span>
    </div>
  </div>
</template>
