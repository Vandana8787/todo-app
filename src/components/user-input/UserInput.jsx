import { useState } from "react";
import Button from "../button/Button";
import InputBox from "../input-box/InputBox";

const UserInput = () => {
    const [userInput, setUserInput] = useState('');
    return (<>
        <InputBox id='user-input' value={userInput} onChangeHandler={setUserInput}/>
        {`${userInput}`}
        <Button/>
    </>)
};

export default UserInput;