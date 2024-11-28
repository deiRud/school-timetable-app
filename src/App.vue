<template>
  <div>
   <div class="centered-content">
      <h1>Vivien's School Timetable</h1>
      <form @submit.prevent="addSubject" class="inline-form">
        <select v-model="newSubject.day">
          <option value="disabled selected" >Select a day</option>
          <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
        </select>
        <input v-model="newSubject.name" placeholder="Subject" required>
        <input type="time" v-model="newSubject.startTime" required> <!-- Start Time -->
        <input type="time" v-model="newSubject.endTime" required> <!-- End Time -->
        <button type="submit">Add</button>
      </form>
    </div>

    <div class="timetable">
      <Day 
        v-for="day in days" 
        :key="day" 
        :day="day" 
        :subjects="timetable[day]"
      />
    </div>

    <div class="remove-button-container">
      <button @click="removeSelectedSubjects" class="remove-btn">Remove</button>
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
        day: '',
        name: '',
        startTime: '', 
        endTime: '' 
      }
    }
  },
  methods: {
    addSubject() {
      if (this.newSubject.day && this.newSubject.name && this.newSubject.startTime && this.newSubject.endTime) {
        this.timetable[this.newSubject.day].push({
          name: this.newSubject.name,
          selected: false,
          startTime: this.newSubject.startTime, 
          endTime: this.newSubject.endTime 
        });

        this.timetable[this.newSubject.day].sort((a, b) => {return a.startTime.localeCompare(b.startTime);
      });
        this.newSubject = { day: '', name: '', startTime: '', endTime: '' };
      }
    },
    removeSelectedSubjects() {
      for (let day of this.days) {
        this.timetable[day] = this.timetable[day].filter(subject => !subject.selected);
      }
    }
  }
}
</script>

<style scoped>
.centered-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  text-align: center;
  padding: 10px 0;
}

.inline-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.inline-form select,
.inline-form input,
.inline-form button {
  padding: 5px;
  height: 40px;
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

@media (max-width: 768px) {
   .centered-content h1 {
     font-size: 24px; 
   }
   .inline-form button {
     width: auto; 
   }
}

@media (max-width: 480px) {
   .centered-content h1 {
     font-size: 20px; 
   }
   .inline-form select,
   .inline-form input,
   .inline-form button {
     width: auto;
     padding-left:5px; 
     padding-right :5px;
   }
} 
</style>