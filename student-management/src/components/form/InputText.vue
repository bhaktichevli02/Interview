  <template>
    <v-text-field :type="type" :id="id" :value="modelValue" @input="updateValue" v-bind="$attrs" />
  </template>

  <script setup>
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    type: String,
    id: String,
    modelValue: [String, Number]
  });

  const emit = defineEmits(['update:modelValue']);

  const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
  };
  </script>
