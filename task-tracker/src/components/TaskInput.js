import { useState } from "react";

const TaskInput = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        // prevent accidentally submit empty
        e.preventDefault() 

        // input validation
        if(!text){
            alert('Please add task before submit lol')
            return
        }
        if(!day){
            alert('Please add day before submit lol')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Add Task"
          value={text || ''}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Add Day & Time"
          // add || '' to prevent controlled uncontrolled error
          value={day || ''}
          onChange={(e) => {
            setDay(e.target.value);
          }}
        ></input>
      </div>
      <div className="form-control-check">
        <label>Set Reminder</label>
        <input
          className="checkbox"
          type="checkbox"
          checked={reminder} //checked is for display only
          value={reminder || false}
          onChange={(e) => {
            //use "currentTarget.checked" to get checkbox input bool value
            setReminder(e.currentTarget.checked);
          }}
        ></input>
      </div>

      <input className="form-control-btn" type="submit" value="Save Task" />
    </form>
  );
};

export default TaskInput;
