<template>
  <div class="day">
    <h3>{{ day }}</h3>
    <ul>
      <li v-for="(subject, index) in subjects" :key="index">
        <label>
          <input type="checkbox" v-model="subject.selected">
          <span class="time-span">{{ subject.startTime }} - {{ subject.endTime }}</span> 
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
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #f9f9f9;
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
}

li {
  margin-bottom: 5px;
}

label {
  display: flex;
  align-items: center;
}

input[type="checkbox"] {
  margin-right: 5px;
}

span {
  word-break: break-word;
}

.time-span {
  margin-right: 10px;
}

</style>