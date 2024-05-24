import { reactive } from 'vue';
//for child-to-child component
export const student = reactive({
  studentName: 'John Doe',

  updateStudentName(newName) {
    this.studentName = newName;
  }
});
