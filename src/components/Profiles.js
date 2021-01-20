import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ProfileCard from './ProfileCard';
import Pagination from './Pagination';
import SearchForm from './SearchForm';
import FilterForm from './FilterForm';
import { Container, Row, Col } from 'react-bootstrap';

const Profiles = () => {
    const[users, setUsers] = useState([])
    const[filter, setFilter] = useState({})
    const [search, setSearch] = useState("")
    const[loading, setLoading] = useState(false)
    const[page, setPage] = useState(1);
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

    const handleFilter = (e) => {
        setFilter({[e.target.name]: e.target.value})
    }

    const handleSearch = (e) => {
        
    }

    return (
        <div className="bg-light">
            {loading && <div>Loading...</div>}
            <Pagination 
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                paginate={paginate}
            />
            <SearchForm value={search} onSearch={handleSearch} />
            <FilterForm value={filter} onfilter={handleFilter} />
            <Container className="mt-5 d-flex justify-content-between flex-wrap">

                {currentUsers.map((user, i) => (
                    <Row key={i}>
                        <Col md={6}>
                            <ProfileCard user={user} />
                        </Col>
                    </Row>
                ))}
            </Container>
            <Pagination 
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                paginate={paginate}
            />
        </div>
    )
}

export default Profiles;
