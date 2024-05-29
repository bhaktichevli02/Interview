<template>
  <v-container>
    <h2 class="text-h5">Student Sibling Component</h2>
    <p class="text-h6"> Student Name: {{ student.studentName }}</p>
  </v-container>
</template>

<script setup>
import { student } from '@/stores/student.js';
</script>

<style>
.text-h5 {
  color: #666;
}

.text-h6 {
  color: #949393;
}
</style>