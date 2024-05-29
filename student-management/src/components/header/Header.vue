<!-- <template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/student">Task 1</router-link></li>
          <li><router-link to="/users">Task 2</router-link></li>
          <li><router-link to="/form">Task 3</router-link></li>
        </ul>
      </nav>
    </header>
  </template>

  <script setup>
  </script>

  <style scoped>
  header {
    background-color: #333;
    padding: 1rem;
    color: white;
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
  }

  nav ul li {
    margin: 0;
  }

  nav ul li a {
    color: white;
    text-decoration: none;
  }

  nav ul li a.router-link-active {
    font-weight: bold;
    text-decoration: underline;
  }
  </style> -->

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