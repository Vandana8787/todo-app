const InputBox = (props) => {
    return <div>
        <input type="text" id={props.id} name={props.id} value={props.value} onChange={(e) => props.onChangeHandler(e.target.value)}/>
    </div>
};

export default InputBox;