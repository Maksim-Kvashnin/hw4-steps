export const TableItem = ({ workout, workoutRemove }) => {
  const { date, distance, id } = workout;

  if (date === '' || distance === '') return;

  return (
    <div className="table-item">
      <p>{date.split('-').reverse().join('.')}</p>
      <p>{distance}</p>
      <div>
        <button type='button' className="table-item-btn">✎</button>
        <button
          type='button'
          onClick={() => workoutRemove(id)}
          className="table-item-btn"
        >✘
        </button>
      </div>
    </div>
  )
}