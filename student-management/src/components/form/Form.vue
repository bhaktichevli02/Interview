<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="(block, index) in blocks" :key="index">
      <label :for="block.token">{{ block.props.title }}</label>
      <component
        :is="getInputType(block.type)"
        v-bind="{ type: block.type, ...block.props }"
        :id="block.token"
        v-model="formData[block.token]"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted, reactive } from 'vue';

const props = defineProps({
  blocks: Array
});

const emit = defineEmits(['submit']);

const formData = reactive({});

onMounted(() => {
  props.blocks.forEach(block => {
    if (block.type === 'checkbox') {
      formData[block.token] = block.props.default || false;
    } else {
      formData[block.token] = block.token || '';
    }
    console.log('Initialized formData:', formData);

  });
});

const handleSubmit = () => {

  const isValid = validateFormData();
  if (isValid) {
    emit('submit', { ...formData });
  }
};

const validateFormData = () => {
  let valid = true;
  props.blocks.forEach(block => {
    if (block.props.required && !formData[block.token]) {
      valid = false;
    }
  });
  return valid;
};


const getInputType = (type) => {
  return type === 'checkbox' ? 'input' : 'input'; // For now, all components are input; can extend to other types.
};
</script>
