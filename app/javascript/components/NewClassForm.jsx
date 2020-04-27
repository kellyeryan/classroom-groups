import React from "react";
import ReactDOM from 'react-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

function NewClassForm() {

    return (
        <>
            <br></br>
            <Container fluid>
                <Form>
                    <Form.Row>
                        <Col xs={1}>
                            <Form.Label>Class</Form.Label>
                        </Col>
                        <Col md={{ span: 3 }}>
                            <Form.Control type="input" />
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