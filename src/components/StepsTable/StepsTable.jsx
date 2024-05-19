import { TableItem } from "./TableItem";

export const StepsTable = ({workoutList, workoutRemove}) => {
  return (
    <div className='steps-table'>
      <div className="table-headers">
        <div className="table-header">Дата (ДД.ММ.ГГ)</div>
        <div className="table-header">Пройдено км</div>
        <div className="table-header">Действия</div>
      </div>
      <div className='table-body'>
      {workoutList.map(workout => <TableItem 
        key={workout.id} 
        workout={workout}
        workoutRemove={workoutRemove} 
      />)}
      </div>
    </div>
  )
}