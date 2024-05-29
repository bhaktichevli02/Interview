<template>
  <v-container>
    <h2 class="text-h5">Student Child Component</h2>
    <p class="text-h6">Student Name: {{ studentName }}</p>
    <v-text-field v-model="newName" label="Enter new name"></v-text-field>
    <v-btn @click="sendNewName" color="primary">Update Name</v-btn>
  </v-container>
</template>

<script setup>
//parent to child
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  studentName: String
});

const emits = defineEmits(['update-name']);

const newName = ref('');

function sendNewName() {
  emits('update-name', newName.value);
  newName.value = '';
}
</script>

<style scoped>
.text-h5 {
  color: #666;
}
.text-h6 {
  color: #949393;
}
</style>

<!-- <template>
  <v-container>
    <h2 class="text-h5">Student Child Component</h2>
    <p class="text-h6">Student Name: {{ student.studentName }}</p>
    <v-text-field v-model="newName" label="Enter new name"></v-text-field>
    <v-btn @click="sendNewName" color="primary">Update Name</v-btn>
  </v-container>
</template>

<script setup>
//child-tochild
import { ref } from 'vue';
import { student } from '@/stores/student.js';

const newName = ref('');

function sendNewName() {
  student.updateStudentName(newName.value);
  newName.value = '';
}
</script>

<style>
.text-h5 {
  color: #666;
}
.text-h6 {
  color: #949393;
}
</style> -->
