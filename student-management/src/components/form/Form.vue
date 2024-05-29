<!-- <template>
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
import { ref, reactive, defineProps, defineEmits, watch } from 'vue';
import InputCheckbox from './InputCheckbox.vue';
import InputText from './InputText.vue';

const props = defineProps({
  blocks: Array
});

const emit = defineEmits(['submit']);

const formData = reactive({});

watch(
  () => props.blocks,
  (newBlocks) => {
    if (newBlocks && newBlocks.length) {
      initializeFormData(newBlocks);
    }
  },
  { immediate: true }
);

const handleSubmit = () => {
  const isValid = validateFormData();
  if (isValid) {
    emit('submit', { ...formData });
  } else {
    alert("Form is Invalid!");
  }
};

const validateFormData = () => {
  let valid = true;
  props.blocks.forEach(block => {
    const value = formData[block.token];
    if (block.props.required && !value) {
      valid = false;
      alert(`${block.props.title} is required`);
    }
  });
  return valid;
};

const getInputType = (type) => {
  if (type === 'checkbox') return InputCheckbox;
  return InputText;
};

const initializeFormData = (blocks) => {
  blocks.forEach(block => {
    if (block.type === 'checkbox') {
      formData[block.token] = block.props.default || false;
    } else {
      formData[block.token] = block.props.default || '';
    }
  });
};
</script> -->
<template>
  <v-form @submit.prevent="handleSubmit">
    <v-row v-for="(block, index) in blocks" :key="index" class="mb-2">
      <v-col cols="auto">
        <label :for="block.token">{{ block.props.title }}</label>
      </v-col>
      <v-col>
        <component
          :is="getInputType(block.type)"
          v-bind="{ type: block.type, ...block.props }"
          :id="block.token"
          v-model="formData[block.token]"
          class="my-0"
        />
      </v-col>
    </v-row>
    <v-btn type="submit" color="primary">Submit</v-btn>
  </v-form>
</template>

<script setup>
import { ref, reactive, defineProps, defineEmits, watch } from 'vue';
import InputCheckbox from './InputCheckbox.vue';
import InputText from './InputText.vue';

const props = defineProps({
  blocks: Array
});

const emit = defineEmits(['submit']);

const formData = reactive({});

const initializeFormData = (blocks) => {
  blocks.forEach(block => {
    if (block.type === 'checkbox') {
      formData[block.token] = block.props.default || false;
    } else {
      formData[block.token] = block.props.default || '';
    }
  });
};

const getInputType = (type) => {
  if (type === 'checkbox') return InputCheckbox;
  return InputText;
};

const validateFormData = () => {
  let valid = true;
  props.blocks.forEach(block => {
    const value = formData[block.token];
    if (block.props.required && !value) {
      valid = false;
      alert(`${block.props.title} is required`);
    }
  });
  return valid;
};

const handleSubmit = () => {
  const isValid = validateFormData();
  if (isValid) {
    emit('submit', { ...formData });
  } else {
    alert("Form is Invalid!");
  }
};

watch(
  () => props.blocks,
  (newBlocks) => {
    if (newBlocks && newBlocks.length) {
      initializeFormData(newBlocks);
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.v-row {
  margin-bottom: 1rem; /* Reduce space between form fields */
}
label {
  margin-right: 1rem; /* Space between the label and input */
}
</style>
