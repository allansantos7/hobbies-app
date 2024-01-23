import "./App.css";
import Hobbies from "./components/Hobbies/Hobbies";
import NewHobby from "./components/NewHobbies/NewHobby";

// List of Hobbies
const App = () => {
  const hobbies = [
    {
      id: "h1",
      name: "Hiking",
      desc: "Hiking in the mountains",
    },
    {
      id: "h2",
      name: "Exercising",
      desc: "Lifting and running at the gym",
    },
    {
      id: "h3",
      name: "Gaming",
      desc: "Playing video games on the computer",
    },
    {
      id: "h4",
      name: "Watching movies",
      desc: "Going to the movie theater with friends",
    },
  ];

  // hobby added handler
  // prints to console if NewHobby function called correctly
  const addHobbyHandler = (hobby) => {
    console.log("Form Submitted In App.js");
    console.log(hobby);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div> 
          <Hobbies list={hobbies}/>
        </div>
      </header>
      <body>
        <div>
          <NewHobby onAddHobby={addHobbyHandler} />
        </div>
      </body>
    </div>
  );
};

export default App;
