import {useDispatch} from "react-redux"
import { deleteWorkout } from "../redux/actions/workouts"

const WorkoutDetails = ({ workout }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(deleteWorkout(workout._id))
  }
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails