export const StepsForm = ({ submitForm }) => {
    return (
      <form name='steps-form' onSubmit={submitForm} className="steps-form">
        <div className="form-cell">
          <label htmlFor="date" className="steps-label">Дата (ДД.ММ.ГГ)</label>
          <input 
            id='date'
            name='steps-date'
            type="date"  
            className="steps-input" 
          />
        </div>
        <div className="form-cell">
          <label htmlFor="distance" className="steps-label">Пройдено км</label>
          <input 
            id='distance' name='steps-distance'
            type="text" 
            className="steps-input" 
          />
        </div>
        <button className="steps-btn">OK</button>
      </form>
    )
  }