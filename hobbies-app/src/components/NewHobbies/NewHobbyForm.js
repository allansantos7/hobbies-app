import "./NewHobbyForm.css";
import {useState} from "react";

// new hobby input form
const NewHobbyForm = (props) => {
  // state handler for name
  const [enteredName, setEnteredName] = useState("");
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }
  // state handler for desc
  const [enteredDesc, setEnteredDesc] = useState("");
  const descChangeHandler = (event) => {
    setEnteredDesc(event.target.value);
  }

  // handler for form submission event
  const submitHandler = (event) => {
    event.preventDefault(); // prevent page from refreshing when submit button is clicked

    const hobbyData = {
      name: enteredName,
      desc: enteredDesc,
    };

    props.onSaveHobbyData(hobbyData); // NewHobby function call

    // 2 way data binding
    setEnteredName("");
    setEnteredDesc("");
  };

  // New hobby submission form
  return (
    <form onSubmit={submitHandler}>
      <div className="new-hobby__form">
        <h1>Add Hobby</h1>
      
        <div className="new-hobby__controls">
          <div className="new-hobby__control">
              <label>Hobby Name</label>
              <input 
                type="text"
                value={enteredName}
                onChange={nameChangeHandler}
              />
          </div>
          <div className="new-hobby__control">
              <label>Hobby Description</label>
              <input 
                type="text"
                value={enteredDesc}
                onChange={descChangeHandler}
              />
          </div>
          <div className="new-hobby__actions">
            <div className="new-hobby__action">
              <button type="submit">Add Hobby</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewHobbyForm;
