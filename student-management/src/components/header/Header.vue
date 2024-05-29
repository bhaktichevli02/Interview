<template>
  <v-app-bar app color="primary" dark>
    <!-- <v-toolbar-title>My App</v-toolbar-title>
      <v-spacer></v-spacer> -->
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn text to="/">Task 1</v-btn>
          <v-btn text to="/users">Task 2</v-btn>
          <v-btn text to="/form">Task 3</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped>
.v-app-bar {
  background-color: #3c7ec0;
  /* Custom primary color */
}

.v-btn {
  color: white;
  /* Button text color */
}

.v-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  /* Button hover effect */
}
</style>