import React, { useEffect, useState } from 'react'

export default function TestCom() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // const [fullName, setFullName] = useState('');

    // useEffect(() => {

    //     setFullName(firstName + ' ' + lastName);

    // }, [firstName, lastName])

    const fullName = firstName + ' ' + lastName;


    return (
        <div>
            <h1 className='text-3xl'>{fullName}</h1>

            <input type="text" placeholder='first name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder='last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
    )
}
