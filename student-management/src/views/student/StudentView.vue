  <template>
    <v-app>
      <Header style="position: fixed; width: 100%;" />
      <v-container class="fill-height d-flex align-center justify-center">
        <StudentParent />
      </v-container>
    </v-app>
  </template>

  <script setup>
  import StudentParent from '@/components/student/StudentParent.vue';
  import Header from '@/components/header/Header.vue';
  </script>

  <style>
  .fill-height {
    min-height: 100vh; /* Ensure the container takes the full height of the viewport */
  }
  @media (min-width: 1024px) {
  #app {
    display: block !important; /* Override the display property */
  }
}

  </style>
