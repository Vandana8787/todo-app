import { useState } from "react";
import Button from "../button/Button";
import InputBox from "../input-box/InputBox";

const UserInput = ({updateList}) => {
    const [userInput, setUserInput] = useState('');

    const addToList = () => {
        updateList(userInput)
    }

    return (<>
        <InputBox id='user-input' value={userInput} onChangeHandler={setUserInput}/>
        {/* {`${userInput}`} */}
        <Button onButtonClick={addToList}/>
    </>)
};

export default UserInput;