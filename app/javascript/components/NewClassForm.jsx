import React, { useState } from "react";
import ReactDOM from 'react-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

function NewClassForm() {

    const [klassName, setKlassName] = useState("")

    return (
        <>
            <br></br>
            <Container fluid>
                <Form>
                    <Form.Row>
                        <Col xs={2}>
                            <Form.Label>Class Name</Form.Label>
                        </Col>
                        <Col md={{ span: 3 }}>
                            <Form.Control
                                type="input"
                                onChange={(e) => {
                                    setKlassName(e.target.value)
                                }}
                            />
                            {klassName}
                        </Col>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Row>
                </Form>
            </Container>
        </>
    )
}

export default NewClassForm