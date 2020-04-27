import React from "react";

function ClassGroupsIndexPage(props) {
    console.log(props)

    return (
        <>
            <div>
                {
                    props.groups.map((classroom, index) => {
                        return <ul key={index}>{classroom.name}</ul>
                    })
                }
            </div>
            <button
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/class_groups/new';
                }}
            > Click here</button>
        </>
    )
}
export default ClassGroupsIndexPage
