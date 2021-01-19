import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ProfileCard from './ProfileCard';
import Pagination from './Pagination';
import SearchForm from './SearchForm';
import { Container, Row, Col } from 'react-bootstrap';

const Profiles = () => {
    const[users, setUsers] = useState([])
    const[loading, setLoading] = useState(false)
    const[page, setPage] = useState(1)
    const[usersPerPage] = useState(20)
    const baseURL = `https://api.enye.tech/v1/challenge/records`

    useEffect(() => {
        const getUsers = async () => {
            try {
                setLoading(true)
                const response = await Axios.get(baseURL)
                const data = await response.data
                const results = await data.records.profiles
                console.log(results);
                setUsers(results);
                setLoading(false)
            } catch(err) {
                if(Axios.isCancel(err)) return
                console.log(err.message);
                setLoading(false)
            }
        }

        getUsers();
    }, [baseURL])

    const indexOfLastUser = page * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = pageNumber => setPage(pageNumber);

    return (
        <>
            {loading && <div>Loading...</div>}
            <Pagination 
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                paginate={paginate}
            />
            <SearchForm />
            <Container className="mt-5 d-flex flex-wrap">

                {currentUsers.map((user, i) => (
                    <Row>
                        <Col md={6}>
                            <ProfileCard key={i} user={user} />
                        </Col>
                    </Row>
                ))}
            </Container>
        </>
    )
}

export default Profiles;
