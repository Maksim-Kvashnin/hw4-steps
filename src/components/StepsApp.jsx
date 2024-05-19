import { useState } from "react";
import { StepsForm } from "./StepsForm";
import { StepsTable } from "./StepsTable/StepsTable";
// import uuid from 'react-uuid';
import { v4 as uuidv4 } from 'uuid';

export const StepsApp = () => {
  const [workoutList, setWorkoutList] = useState([]);

  function submitForm(e) {
    e.preventDefault();

    const data = {
      date: e.target.date.value,
      distance: Number(e.target.distance.value),
    }
    
    const workoutByDate = workoutList.findIndex((workout) => workout.date === data.date);

    if(workoutByDate > -1) {
      const newWorkoutList = workoutList;
      newWorkoutList[workoutByDate].distance += data.distance;
      setWorkoutList([...newWorkoutList]);
    } else {
      setWorkoutList([{ ...data, id: uuidv4()}, ...workoutList]);
    }
  }

  function sortworkoutList(workoutList) {
    return [...workoutList].sort((a,b) => new Date(b.date) - new Date(a.date));
  }

  function workoutRemove(id) {
    setWorkoutList(workoutList.filter(workout => workout.id !== id));
  }

  return (
    <div className="steps-container">
      <StepsForm submitForm={submitForm} />
      <StepsTable 
      workoutList={sortworkoutList(workoutList)}
      workoutRemove={workoutRemove}
      />
    </div>
  )
}