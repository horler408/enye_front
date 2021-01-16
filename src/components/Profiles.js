import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard'

const Profiles = () => {
    const[users, setUsers] = useState([])
    const[loading, setLoading] = useState(false)
    const[count, setCount] = useState("")
    const baseURL = `https://api.enye.tech/v1/challenge/records`

    useEffect(() => {
        const getUsers = async () => {
            try {
                setLoading(true)
                const response = await fetch(baseURL)
                const data = await response.json();
                const results = await data.records.profiles
                //console.log(results);
                setUsers(results);
                setCount(data.size)
                setLoading(false)
            } catch(err) {
                console.log(err.message);
                setLoading(false)
            }
        }

        getUsers();
    }, [baseURL])

    return (
        <div className="">
            {loading && <div>Loading...</div>}
            <h2>{count} users available</h2>
            <div>
                {users.map((user, i) => (
                    <ProfileCard key={i} user={user} />
                ))}
            </div>

        </div>
    )
}

export default Profiles;
