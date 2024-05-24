<template>
  <div>
    <h2>Student Sibling Component</h2>
    <p>Current Student Name: {{ student.studentName }}</p>
  </div>
</template>

<script setup>
import { student } from '@/stores/student.js';
</script>

<style scoped>
h2 {
  color: #666;
}
</style>
