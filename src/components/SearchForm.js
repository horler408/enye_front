import React from 'react';
import { Form, Col } from 'react-bootstrap'

export default function SearchForm() {
    return (
        <Form className="mb-4 ml-5">
            <Form.Row className="align-items-end w-25">
                <Form.Group as={Col} className="ml-4">
                    <Form.Control value="" onChange={(e) => e.target.value} name="search" type="text" placeholder="Search by Name" />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}
