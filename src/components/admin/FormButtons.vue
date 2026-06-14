<script setup>
defineProps({
  editing: {
    type: Boolean,
    default: false
  }
})

defineEmits(['cancel'])
</script>

<template>
  <div class="d-flex gap-2">
    <button type="submit" class="btn btn-success btn-sm flex-fill">
      {{ editing ? 'Cập nhật' : 'Thêm mới' }}
    </button>
    <button v-if="editing" type="button" class="btn btn-outline-secondary btn-sm" @click="$emit('cancel')">
      Hủy
    </button>
  </div>
</template>
