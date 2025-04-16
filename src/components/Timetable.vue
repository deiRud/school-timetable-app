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

    <div class="carousel">
  <div 
    class="day" 
    v-for="day in days" 
    :key="day" 
    @click="selectDay(day)"
    :class="{ 'active': selectedDay === day }"
  >
    {{ day }}
    <ul>
      <li 
        v-for="subject in timetable[day]" 
        :key="subject.name + subject.startTime"
        class="subject-preview"
      >
        {{ subject.startTime }} - {{ subject.endTime }}: {{ subject.name }}
      </li>
    </ul>
  </div>
</div>


      <div class="remove-button-container">
        <button @click="removeSelectedSubjects" class="remove-btn">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import Day from './Day.vue';

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
  gap: 20px;          
  padding: 10px;     
}

.day {
  flex: 0 0 auto;
  min-width: 200px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.day:hover {
  background-color: #e0e0e0;
  transform: scale(1.05);
}

.active {
  border: 2px solid #2ca2f0;
  background-color: #d0eaff;
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

.subject-preview {
  font-size: 0.9em;
  text-align: left;
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

  .carousel {
    flex-wrap: wrap;    
    justify-content: center; 
    overflow-x: hidden;  
  }
  
  .day {
    min-width: 150px;     
    margin: 5px;          
    text-align: center;   
  }

  .zoomed {
    font-size: 1.5em;     
  }

  .subject-preview {
    font-size: 0.8em;     
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

  .carousel {
    flex-direction: column;  
    gap: 10px;               
  }
  .day {
    width: 100%;             
    min-width: 100%;        
  }

  .zoomed {
    font-size: 1.2em;        
  }

  .inline-form input,
  .inline-form select,
  .inline-form button {
    width: 100%;             
    padding: 12px;          
    margin-bottom: 10px;     
  }

  .inline-form {
    flex-direction: column; 
    align-items: stretch; 
  }
}
</style>