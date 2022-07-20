import { FETCH_ALL,CREATE,DELETE } from "../types"

export default (workouts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload
    case CREATE:
      return [ action.payload,...workouts]
    case DELETE:
      return workouts.filter((workout)=>workout._id !== action.payload)
    default:
      return workouts
  }
}