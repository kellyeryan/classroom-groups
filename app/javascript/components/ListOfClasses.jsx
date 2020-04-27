import React, { useState } from "react";

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
