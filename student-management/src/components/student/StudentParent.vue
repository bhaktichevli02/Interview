<template>
  <v-container>
    <h1 class="text-h4">Student Parent Component</h1>
    <StudentChild :studentName="studentName" @update-name="updateStudentName" />
    <!-- <StudentChild />
    <StudentSibling /> -->
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

import StudentChild from './StudentChild.vue';
// import StudentSibling from './StudentSibling.vue';

const studentName = ref('John Doe');

function updateStudentName(newName) {
  studentName.value = newName;
}

</script>

<style>
.text-h4 {
  color: #333;
}
</style>