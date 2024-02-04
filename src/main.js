import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

fetch('http://localhost:8080/api/profiles').then(
    response => response.json()
).then(
    data => console.log(data)
).catch(
    () => console.log("Error getting data")
)
