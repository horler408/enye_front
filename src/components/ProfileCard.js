import React from 'react'

const ProfileCard = ({user})=> {
    return (
        <div className="">
            <h3>{`${user.FirstName} ${user.LastName}`}</h3>
        </div>
    )
}

export default ProfileCard;