<template>
    <div>
      <div class="centered-content">
        <h1>Vivien's School Timetable</h1>
        <form @submit.prevent="$root.addSubject" class="inline-form">
          <select v-model="$root.newSubject.day">
            <option value="" disabled selected>Select a day</option>
            <option v-for="day in $root.days" :key="day" :value="day">{{ day }}</option>
          </select>
          <input v-model="$root.newSubject.name" placeholder="Subject" required>
          <button type="submit">Add Subject</button>
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
  /* Your existing styles here */
  </style>