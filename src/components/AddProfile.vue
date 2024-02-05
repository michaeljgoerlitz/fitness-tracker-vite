<template>
    <div>
      <h2>Add Profile Data</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="id">ID:</label>
          <input v-model="Profile.id" type="number" id="id" required>
        </div>
        <div>
          <label for="username">Username:</label>
          <input v-model="Profile.username" type="text" id="username" required>
        </div>
        <div>
          <label for="calorieGoal">Calorie Goal:</label>
          <input v-model="Profile.calorieGoal" type="number" id="calorieGoal" required>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AddProfile',
    data() {
      return {
        Profile: {
          id: 0,
          username: '',
          calorieGoal: '',
        },
      };
    },
    methods: {
      submitForm() {
        axios.post('http://localhost:8080/api/profiles', this.Profile)
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
        this.Profile.id = 0;
        this.Profile.username = '';
        this.Profile.calorieGoal = '';
      },
    },
  };
  </script>
  
  <style>
  /* Add styles for your form here */
  </style>
  