import "./Hobby.css";
import Card from "../UI/Card";

// each hobby display format
const Hobby = (props) => {

  return (
    <Card className="hobby-item">
      <div className="list-hobby">
      <div className="list-hobby__items">
        <ul>
          <h2>{props.name}</h2>
          <li>{props.desc}</li>
        </ul> 
      </div>
    </div>
    </Card>
  );
};

export default Hobby;