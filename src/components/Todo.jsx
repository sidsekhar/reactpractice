import React, { useState } from "react";

function Todo(props) {
 

  return (
    <div onClick = {props.method(props.id)}>
    <li>
      {props.text}
    </li>
    </div>
  );
}

export default Todo;
