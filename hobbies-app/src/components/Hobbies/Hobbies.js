import "./Hobbies.css";
import Hobby from "./Hobby";
import Card from "../UI/Card";

// Hobby List from App.js display
const Hobbies = (props) => {

  return (
    <Card className="hobbies">
      <div className="list-hobby__header">
        <h1>My List of Hobbies:</h1>
      </div>
      <div>
        <Hobby 
        name={props.list[0].name} 
        desc={props.list[0].desc} 
        />
        <Hobby 
        name={props.list[1].name} 
        desc={props.list[1].desc} 
        />
        <Hobby 
        name={props.list[2].name} 
        desc={props.list[2].desc} 
        />
        <Hobby 
        name={props.list[3].name} 
        desc={props.list[3].desc} 
        />
      </div>
    </Card>
  );
};

export default Hobbies;
