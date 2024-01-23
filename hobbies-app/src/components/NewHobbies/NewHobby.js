// add css
import NewHobbyForm from "./NewHobbyForm";

// Handler for new hobbies submitted on NewHobbyForm
const NewHobby = (props) => {
    const saveHobbyDataHandler = (enteredHobby) => {
        const hobbyData = {
            ...enteredHobby,
            id: Math.random().toString(),
        };
        props.onAddHobby(hobbyData); // App function call
    };

    return (
        <div>
            <NewHobbyForm onSaveHobbyData={saveHobbyDataHandler} />
        </div>
    );
};

export default NewHobby;