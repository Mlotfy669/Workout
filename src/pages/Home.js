import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import { getWorkouts } from "../redux/actions/workouts.js"
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
  const dispatch = useDispatch()
  const workouts = useSelector((s) => s.workouts)

  useEffect(() => {
    dispatch(getWorkouts())
  }, [dispatch])


  return (
    <div className='home'>
      <div className='workouts'>
        {
          workouts && workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))
        }
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home