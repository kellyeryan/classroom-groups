import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

function NewClassForm() {

    const [classGroupName, setClassGroupName] = useState("")


    const handleSubmit = () => {
        fetch("http://localhost:3000/class_groups/create_new", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({ class_name: classGroupName })
        })
            .then(data => console.log(data))
    }

    return (
        <>
            <br></br>
            <Container fluid>
                <Form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}>
                    <Form.Row>
                        <Col xs={2}>
                            <Form.Label>Class Name</Form.Label>
                        </Col>
                        <Col md={{ span: 3 }}>
                            <Form.Control
                                type="input"
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setClassGroupName(e.target.value)
                                }}
                            />

                        </Col>
                        <Button
                            variant="primary"
                            type="submit">
                            Submit
                        </Button>
                    </Form.Row>
                </Form>
            </Container>
        </>
    )
}

export default NewClassForm