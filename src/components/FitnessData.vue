<template>
    <div>
      <ul>
        <li v-for="data in FitnessData" :key="data.id">
          Profile Id: {{ data.profileId }}, Date: {{ data.date }}, Total Calories: {{ data.totalCalories }}, Calories Burned: {{ data.caloriesBurned }}
          <!-- Add a button to delete this data -->
          <button @click="deleteFitnessData(data.id)">Delete</button>
        </li>
      </ul>
      <button @click="fetchFitnessData">Click me for fitness data!</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'FitnessData',
    data() {
      return {
        FitnessData: [],
      };
    },
    mounted() {
      // this.fetchFitnessData(); // Uncomment if you want to auto-fetch on load
    },
    methods: {
      async fetchFitnessData() {
        try {
          const response = await axios.get('http://localhost:8080/api/fitness');
          this.FitnessData = response.data;
        } catch (error) {
          console.error('Error fetching fitness data:', error);
        }
      },
      async deleteFitnessData(id) {
        try {
          await axios.delete(`http://localhost:8080/api/fitness/${id}`);
          console.log(`fitness with id ${id} deleted.`);
          // Optionally, refresh the list after deletion
          this.fetchFitnessData();
        } catch (error) {
          console.error('Error deleting fitness data:', error);
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add any styles for your component here */
  </style>
  