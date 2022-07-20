import { FETCH_ALL ,FETCH_ONE, CREATE,DELETE } from "../types";

import * as api from "../../api"

// action creators

export const getWorkouts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWorkouts()

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message)
  }
}
export const getWorkout = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchWorkout(id)

    dispatch({ type: FETCH_ONE, payload: data });
  } catch (error) {
    console.log(error.message)
  }
}

export const createWorkout = (workout) => async(dispatch) => {
  try {
    const {data}  = await api.createWorkout(workout)

    dispatch({ type:CREATE , payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteWorkout = (id) => async (dispatch) => {
  try {
    await api.deleteWorkout(id)

  dispatch({ type:DELETE , payload: id })
  } catch (error) {
    console.log(error.message)
  }
}