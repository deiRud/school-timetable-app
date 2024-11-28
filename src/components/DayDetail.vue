<template>
    <div class="day-detail">
      <h2>{{ day }} Schedule</h2>
      <ul>
        <li v-for="(subject, index) in subjects" :key="index">
          {{ subject.name }}
        </li>
      </ul>
      <router-link to="/">Back to Timetable</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: ['day'],
    computed: {
      subjects() {
        return this.$root.$data.timetable[this.day] || [];
      }
    }
  }
  </script>
  
  <style scoped>
  .day-detail {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  </style>