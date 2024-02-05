<template>
    <div>
      <h2>Add Fitness Data</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="id">ID:</label>
          <input v-model="fitnessData.id" type="number" id="id" required>
        </div>
        <div>
          <label for="username">Username:</label>
          <input v-model="fitnessData.username" type="text" id="username" required>
        </div>
        <div>
          <label for="calorieGoal">Calorie Goal:</label>
          <input v-model="fitnessData.calorieGoal" type="number" id="calorieGoal" required>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AddFitnessData',
    data() {
      return {
        fitnessData: {
          id: 0,
          username: '',
          calorieGoal: '',
        },
      };
    },
    methods: {
      submitForm() {
        axios.post('http://localhost:8080/api/profiles', this.fitnessData)
          .then(response => {
            console.log('Data submitted successfully', response.data);
            // Reset form after successful submission
            this.resetForm();
          })
          .catch(error => {
            console.error('There was an error submitting the form', error);
          });
      },
      resetForm() {
        this.fitnessData.id = 0;
        this.fitnessData.username = '';
        this.fitnessData.calorieGoal = '';
      },
    },
  };
  </script>
  
  <style>
  /* Add styles for your form here */
  </style>
  