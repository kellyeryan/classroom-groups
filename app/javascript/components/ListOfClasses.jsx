import React, { useState } from "react";
import ReactDOM from 'react-dom'

function ListOfClasses(props) {
    console.log(props)

    return (
        <div>
            {
                props.groups.map((classroom, index) => {
                    return <li key={index}>{classroom.name}</li>
                })
            }
        </div>
    )
}
export default ListOfClasses
