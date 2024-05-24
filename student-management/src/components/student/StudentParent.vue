<template>
  <div>
    <h1>Student Parent Component</h1>
    <!-- <StudentChild :studentName="studentName" @update-name="updateStudentName" /> -->
    <StudentChild />
    <StudentSibling />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StudentChild from './StudentChild.vue';
import StudentSibling from './StudentSibling.vue';

// const studentName = ref('John Doe');

// function updateStudentName(newName) {
//   studentName.value = newName;
// }
</script>

<style scoped>
h1 {
  color: #333;
}
</style>