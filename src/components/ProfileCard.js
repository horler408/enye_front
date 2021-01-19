import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
//import {Grid, Card, Typography} from '@material-ui/core';

const ProfileCard = ({user})=> {
    return (
        <Card className="m-4" style={{ width: '25rem'}}>
            <Card.Header>{`${user.FirstName} ${user.LastName}`}</Card.Header>
            <Card.Body>
                <div>
                    <img className="image" src="https://via.placeholder.com/150" alt={user.URL} />
                </div>
                <div>
                    <div>
                        <Card.Title>
                            {`${user.FirstName} ${user.LastName}`}
                        </Card.Title>
                    </div>
                </div>
                <ListGroup className="d-flex justify-content-between">
                        <ListGroup.Item>User Name - <span className="font-weight-bold">{user.UserName}</span></ListGroup.Item>
                        <ListGroup.Item>Credit Card Number - <span className="font-weight-bold">{user.CreditCardNumber}</span></ListGroup.Item>
                        <ListGroup.Item>Credit Card Type - <span className="font-weight-bold">{user.CreditCardType}</span></ListGroup.Item>
                        <ListGroup.Item>Payment Method - <span className="font-weight-bold">{user.PaymentMethod}</span></ListGroup.Item>
                        <ListGroup.Item>Email - <span className="font-weight-bold">{user.Email}</span></ListGroup.Item>
                        <ListGroup.Item>Gender - <span className="font-weight-bold">{user.Gender}</span></ListGroup.Item>
                        <ListGroup.Item>Last Login - <span className="font-weight-bold">{user.LastLogin}</span></ListGroup.Item>
                        <ListGroup.Item>Location - <span className="font-weight-bold">{`${user.Latitude}, ${user.Longitude}`}</span></ListGroup.Item>
                        <ListGroup.Item>Mac Address - <span className="font-weight-bold">{user.MacAddress}</span></ListGroup.Item>
                        <ListGroup.Item>Phone Number - <span className="font-weight-bold">{user.PhoneNumber}</span></ListGroup.Item>
                        <ListGroup.Item>Website - <span className="font-weight-bold"><Card.Link href="#">{user.URL}</Card.Link></span></ListGroup.Item>
                    </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default ProfileCard;