<template>
  <div class="day">
    <h3>{{ day }}</h3>
    <ul>
      <li v-for="(subject, index) in subjects" :key="index" class="subject-item">
        <label>
          <input type="checkbox" v-model="subject.selected">
          <span class="time-span">{{ subject.startTime }} - {{ subject.endTime }}:</span>
          <span class="subject-name">{{ subject.name }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>
  
  <script>
export default {
  props: ['day', 'subjects']
}
</script>
  
<style scoped>
.day {
  border-radius :5px;
  border :1px solid #ddd;
  padding :10px;
  background-color :#f9f9f9;
  margin-bottom :10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 250px; 
  max-width: 100%;
}

.subjects-container {
   display :flex; 
   flex-wrap :wrap; 
   justify-content :center; 
}

.subject-item {
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 3px;
  padding: 5px;
  field-sizing: content;
  min-width: 200px; 
  max-width: 100%;
}

label {
  display: flex;
  align-items: center;
  width: 100%;
}


h3 {
  text-align: center;
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

li {
  margin-bottom: 5px;
}

label {
  display: flex;
  align-items: center;
}

input[type="checkbox"] {
  margin-right: 10px;
}

span {
  word-break: break-word;
}

.time-span {
  margin-right: 10px;
}

.time-span {
  margin-right: 10px;
  font-weight: normal;
}

.subject-name {
  flex-grow: 1;
}

</style>