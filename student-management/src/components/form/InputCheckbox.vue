<!-- <template>
    <input type="checkbox" :id="id" :checked="modelValue" @change="updateValue">
  </template>

  <script setup>
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    id: String,
    modelValue: Boolean
  });

  const emit = defineEmits(['update:modelValue']);

  const updateValue = (event) => {
    emit('update:modelValue', event.target.checked);
  };
  </script> -->
<template>
  <v-checkbox type="checkbox" :id="id" :checked="modelValue" @change="updateValue" />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  id: String,
  modelValue: Boolean
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.checked);
};
</script>
