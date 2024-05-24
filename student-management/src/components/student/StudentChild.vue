<!-- <template>
  <div>
    <h2>Student Child Component</h2>
    <p>Student Name: {{ studentName }}</p>
    <input v-model="newName" placeholder="Enter new name" />
    <button @click="sendNewName">Update Name</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import {student} from "@/stores/student.js";  //for child to child communication


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
h2 {
  color: #666;
}
input {
  margin-right: 10px;
}
</style> -->

<template>
  <div>
    <h2>Student Child Component</h2>
    <p>Student Name: {{ student.studentName }}</p>
    <input v-model="newName" placeholder="Enter new name" />
    <button @click="sendNewName">Update Name</button>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { student } from '@/stores/student.js';

const newName = ref('');

function sendNewName() {
  student.updateStudentName(newName.value);
  newName.value = '';
}
</script>

<style scoped>
h2 {
  color: #666;
}
input {
  margin-right: 10px;
}
</style>
