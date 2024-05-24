<template>
    <div>
      <h1>Dynamic Form</h1>
      <Form :blocks="formBlocks" @submit="handleFormSubmit" />
    </div>
  </template>

  <script setup>
  import { ref, onMounted } from 'vue';
  import Form from '@/components/form/Form.vue';
  import formData from '@/data/formData.json';

  const formBlocks = ref([]);

  onMounted(() => {
    formBlocks.value = formData.blocks;
  });

  const handleFormSubmit = (formData) => {
    console.log('Form data submitted:', formData);
    // Handle the form data here (e.g., send to server, process locally, etc.)
  };
  </script>
