import React, { useState } from "react";
function ToDoItem(props) {
    
    const [click, setClick] = useState(true);
    const [editing, setEditing] = useState();
    function handleClick() {
        console.log("clicked");
        setClick((prevClick) => !prevClick);
        console.log(click);
        if(click) {
            setEditing("line-through");
        }
        else {
            setEditing("none");   
        }
    }

    return ( 
        <div onClick={handleClick}>
            <li style={{textDecoration:editing}}> {props.text} </li>
        </div>   
       
    );
}
export default ToDoItem;

