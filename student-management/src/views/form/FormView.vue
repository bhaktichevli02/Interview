<!-- <template>
    <div>
      <Header />
      <h1>Dynamic Form</h1>
      <Form :blocks="formBlocks" @submit="handleFormSubmit" />
    </div>
  </template>

  <script setup>
  import { ref, onMounted } from 'vue';
  import Form from '@/components/form/Form.vue';
  import formData from '@/data/formData.json';
  import Header from '@/components/header/Header.vue';

  const formBlocks = ref([]);

  onMounted(() => {
    formBlocks.value = formData.blocks;
  });

  const handleFormSubmit = (formData) => {
    console.log('Form data submitted:', formData);
  };
  </script> -->
  <template>
    <v-app>
      <Header style="position: fixed; width: 100%;" />
      <v-main class="remove-top-padding">
        <v-container class="d-flex justify-center align-center fill-height">
          <v-col cols="12" md="8" lg="8">
            <div class="form-container">
              <h1 class="text-center">Dynamic Form</h1>
              <Form :blocks="formBlocks" @submit="handleFormSubmit" />
            </div>
          </v-col>
        </v-container>
      </v-main>
    </v-app>
  </template>

  <script setup>
  import { ref, onMounted } from 'vue';
  import Form from '@/components/form/Form.vue';
  import formData from '@/data/formData.json';
  import Header from '@/components/header/Header.vue';

  const formBlocks = ref([]);

  onMounted(() => {
    formBlocks.value = formData.blocks;
  });

  const handleFormSubmit = (formData) => {
    console.log('Form data submitted:', formData);
    alert("Hurray!! Form's valid")
  };
  </script>

  <style scoped>
 .fill-height {
  min-height: 100vh;
  min-width: 150vh;
}

.form-container {
  min-width: 50%; /* Ensure the form container takes at least 50% of the page width */
  min-width: 300px; /* Ensure the form container has a minimum width of 300px */
  max-width: 100%; /* Ensure it does not exceed the container's width */
  padding: 2rem; /* Add some padding for better visual appearance */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add some shadow for better distinction */
  background-color: white; /* Ensure the form has a background color */
}

.remove-top-padding {
  padding-top: 0 !important;/* Remove top padding from v-main */
}
  </style>
