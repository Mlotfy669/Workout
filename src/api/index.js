import axios from 'axios'

const url = 'http://localhost:4000/api/workouts/'

export const fetchWorkouts = () => axios.get(url)
export const fetchWorkout = (id) => axios.get(`${url}/${id}`)
export const createWorkout = (newWorkout) => axios.post(url,newWorkout)
export const deleteWorkout = (id) => axios.delete(`${url}/${id}`)