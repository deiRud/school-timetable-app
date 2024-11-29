<template>
    <div>
      <div class="centered-content">
        <h1>Vivien's School Timetable</h1>
        <form @submit.prevent="$root.addSubject" class="inline-form">
          <select v-model="$root.newSubject.day">
            <option value="disabled selected">Select a day</option>
            <option v-for="day in $root.days" :key="day" :value="day">{{ day }}</option>
          </select>
          <input v-model="$root.newSubject.name" placeholder="Subject" required>

        </form>
      </div>
      
      <div class="remove-button-container">
        <button @click="$root.removeSelectedSubjects" class="remove-btn">Remove Selected Subjects</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Timetable'
  }
  </script>
  
  <style scoped>
  .selected-day-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px; /* Adjust as needed */
  margin: 0 auto;
}
  </style>