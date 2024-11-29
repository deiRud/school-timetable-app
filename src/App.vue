<template>
  <div>
   <div class="centered-content">
      <h1>Vivien's School Timetable</h1>
      <div v-if="selectedDay" class="selected-day-container">
        <h2 class="zoomed">{{ selectedDay }} Schedule</h2>
        <form @submit.prevent="addSubject" class="subject-form">
          <input v-model="newSubject.name" placeholder="Subject" required>
          <input type="time" v-model="newSubject.startTime" required> 
          <input type="time" v-model="newSubject.endTime" required>
          <button type="submit">Add</button> 
      </form>

      <Day 
          :day="selectedDay" 
          :subjects="timetable[selectedDay]"
        />
        <button @click="clearSelection">Back to Week View</button>
    </div>

    <div v-else>
        <div class="carousel">
          <div 
            class="day" 
            v-for="day in days" 
            :key="day" 
            @click="selectDay(day)"
            :class="{ 'active': selectedDay === day }"
          >
            {{ day }}
          </div>
        </div>
      </div>

      <div class="remove-button-container">
        <button @click="removeSelectedSubjects" class="remove-btn">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import Day from './components/Day.vue';

export default {
  components: { Day },
  data() {
    return {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      timetable: {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: []
      },
      newSubject: {
        name: '',
        startTime: '', 
        endTime: '' 
      },
      selectedDay: null
    }
  },
  methods: {
    selectDay(day) {
      this.selectedDay = day; 
    },
    clearSelection() {
      this.selectedDay = null; 
    },
    addSubject() {
      if (this.selectedDay && this.newSubject.name) {
        this.timetable[this.selectedDay].push({
          name: this.newSubject.name,
          selected: false,
          startTime: this.newSubject.startTime, 
          endTime: this.newSubject.endTime 
        });

        this.timetable[this.selectedDay].sort((a, b) => {return a.startTime.localeCompare(b.startTime);
      });
      this.newSubject = { name: '', startTime: '', endTime: '' };
      }
    },
    removeSelectedSubjects() {
    if (this.selectedDay) {
      this.timetable[this.selectedDay] = this.timetable[this.selectedDay].filter(subject => !subject.selected);
      }
    }
  }
}
</script>

<style scoped>

.subject-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.centered-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  text-align: center;
  padding: 10px 0;
}

.selected-day-container {
  display: flex;
  flex-direction: column;
  align-items: center; 
}

.zoomed {
  font-size: 2em; 
}

.carousel {
  display: flex;
  overflow-x: auto; 
}
.day {
  flex-shrink: 0; 
  width: 100px; 
  margin-right: 10px; 
  padding: 10px;
  text-align: center;
  background-color: #f0f0f0;
  cursor: pointer;
}

.day:hover {
  background-color: #e0e0e0; 
}

.active {
  transform: scale(1.5); /* Zoom in the active day */
  z-index: 1; /* Bring the active day to the front */
}

.inline-form {
  display: flex;
  flex-direction: row;
}
.subjects-container {
  display: flex; 
  flex-wrap: wrap;
  justify-content: center; 
}

.subject-item {
  margin-right: 10px; 
  padding: 5px;
  background-color: #f0f0f0; 
}

.inline-form input,
.inline-form button {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.inline-form select {
  width: 150px;
}

.inline-form input {
  width: 200px;
}

.inline-form button {
  width: 100px;
}

.timetable {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 10px;
}

.remove-button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
}

.remove-btn {
  background-color: #2ca2f0;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  width: 200px;
}

.remove-btn:hover {
  background-color: #3374ff;
}

/* Styles for tablets and mobile devices */
@media (max-width: 768px) {
  .centered-content h1 {
    font-size: 24px; 
  }
  
  .inline-form select,
  .inline-form input,
  .inline-form button {
    width: 100%; 
    padding: 10px; 
  }
}

/* Styles for mobile devices */
@media (max-width: 480px) {
  .centered-content h1 {
    font-size: 20px; 
  }
  
  .inline-form {
    flex-direction: column; 
    align-items: stretch; 
  }
}
</style>