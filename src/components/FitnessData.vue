<template>
    <div>
      <h1>User Fitness Goals</h1>
      <ul>
        <li v-for="user in fitnessData" :key="user.id">
          Username: {{ user.username }}, Calorie Goal: {{ user.calorieGoal }}
        </li>
      </ul>
      <!-- Use @click to bind the click event to a method -->
      <button @click="fetchFitnessData">Click me!</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'FitnessData',
    data() {
      return {
        fitnessData: [],
      };
    },
    mounted() {
      // This can be removed if you only want to fetch data on button click
      // this.fetchFitnessData();
    },
    methods: {
      async fetchFitnessData() {
        try {
          // Assuming your original intent was to fetch from '/api/fitness'
          // Adjust if it's supposed to be '/api/profiles'
          const response = await axios.get('http://localhost:8080/api/profiles');
          this.fitnessData = response.data;
        } catch (error) {
          console.error('Error fetching fitness data:', error);
          // This assignment is incorrect for setting default data; see corrected version below
          // Corrected version is not needed if you're handling errors this way
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add any styles for your FitnessData component here */
  </style>
  