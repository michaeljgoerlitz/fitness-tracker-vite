<template>
    <div>
      <h2>Add Fitness Data</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="id">ID:</label>
          <input v-model="FitnessData.id" type="number" id="id" required>
        </div>
        <div>
          <label for="profileId">Profile ID:</label>
          <input v-model="FitnessData.profileId" type="number" id="profileId" required>
        </div>
        <div>
          <label for="date">Date:</label>
          <input v-model="FitnessData.date" type="text" id="date" required>
        </div>
        <div>
          <label for="totalCalories">Total Calories:</label>
          <input v-model="FitnessData.totalCalories" type="number" id="totalCalories" required>
        </div>
        <div>
          <label for="caloriesBurned">Calories Burned:</label>
          <input v-model="FitnessData.caloriesBurned" type="number" id="caloriesBurned" required>
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
        FitnessData: {
          id: 0,
          profileId: 0,
          date: '',
          totalCalories: '',
          caloriesBurned: '',
        },
      };
    },
    methods: {
      submitForm() {
        axios.post('http://localhost:8080/api/fitness', this.FitnessData)
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
        this.FitnessData.id = 0;
        this.FitnessData.profileId = 0;
        this.FitnessData.date = '';
        this.FitnessData.totalCalories = '';
        this.FitnessData.caloriesBurned = '';
      },
    },
  };
  </script>
  
  <style>
  /* Add styles for your form here */
  </style>
  