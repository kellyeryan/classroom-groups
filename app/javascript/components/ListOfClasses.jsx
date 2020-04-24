import React from "react";
import ReactDOM from 'react-dom'

function ListOfClasses(props) {
    return (
        <div>
            {props.class_groups.map((classroom, index) => (
                <li key={index}>
                    {classroom.name}
                </li>
            ))}
        </div>
    )
}
export default ListOfClasses
