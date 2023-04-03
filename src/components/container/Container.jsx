import { useState } from "react";
import UserInput from "../user-input/UserInput";

const Container = () => {
    const [listOfItems, setListOfItems] = useState([]);

    const updateList = (item) => {
        setListOfItems([...listOfItems, item]);
    }

    return <>
        <UserInput updateList={updateList} />
        <br />
        <>list of items</>
        {JSON.stringify(listOfItems)}
    </>
}

export default Container;