import React from 'react';
import { Form, Col } from 'react-bootstrap'

export default function FilterForm({ value, onFilter}) {
    return (
        <Form className="check">
            <Form.Row>
                <Form.Group as={Col} xs="auto" className="ml-2">
                        <Form.Check onChange={onFilter} value={value} name="Gender" id="filter"
                        label="Filter by Gender" type="checkbox" className="mb-2" />
                    </Form.Group>
                    <Form.Group as={Col} xs="auto" className="ml-2">
                        <Form.Check onChange={onFilter} value={value} name="PaymentMethod" id="filter"
                        label="Payment Method" type="checkbox" className="mb-2" />
                    </Form.Group>
                </Form.Row>
        </Form>
    )
}
