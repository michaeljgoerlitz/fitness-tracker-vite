<template>
    <div>
      <h1>User Fitness Goals</h1>
      <ul>
        <li v-for="user in fitnessData" :key="user.id">
          Username: {{ user.username }}, Calorie Goal: {{ user.calorieGoal }}
          <!-- Add a button to delete this user -->
          <button @click="deleteProfile(user.id)">Delete</button>
        </li>
      </ul>
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
      // this.fetchFitnessData(); // Uncomment if you want to auto-fetch on load
    },
    methods: {
      async fetchFitnessData() {
        try {
          const response = await axios.get('http://localhost:8080/api/profiles');
          this.fitnessData = response.data;
        } catch (error) {
          console.error('Error fetching fitness data:', error);
        }
      },
      async deleteProfile(id) {
        try {
          await axios.delete(`http://localhost:8080/api/profiles/${id}`);
          console.log(`Profile with id ${id} deleted.`);
          // Optionally, refresh the list after deletion
          this.fetchFitnessData();
        } catch (error) {
          console.error('Error deleting profile:', error);
        }
      },
    },
  };
  </script>
  
  <style>
  /* Add any styles for your component here */
  </style>
  
  