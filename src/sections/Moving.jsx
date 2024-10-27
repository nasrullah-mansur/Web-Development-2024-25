import { useState } from 'react';

export default function Moving() {
    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);

    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        subject: '',
        message: '',
    });

    let parentDiv = {
        width: '100%',
        height: '100vh',
        position: 'relative',
    }

    let childDiv = {
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        position: 'absolute',
        top: '-10px',
        left: '-10px',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`
    }


    let moveHandler = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });

    }


    let changeHandler = (e) => {


        let nameAttrValue = e.target.name;
        let inputValue = e.target.value;

        setFormData({
            ...formData,
            [nameAttrValue]: inputValue,
        })




        // if (e.target.name == 'name') {
        //     setFormData({
        //         ...formData,
        //         name: e.target.value,
        //     });
        // }
        // if (e.target.name == 'phone') {
        //     setFormData({
        //         ...formData,
        //         phone: e.target.value,
        //     });
        // }
        // if (e.target.name == 'subject') {
        //     setFormData({
        //         ...formData,
        //         subject: e.target.value,
        //     });
        // }
        // if (e.target.name == 'message') {
        //     setFormData({
        //         ...formData,
        //         message: e.target.value,
        //     });
        // }
    }

    // onPointerMove={moveHandler}

    return (
        <>
            <div style={parentDiv} >
                <div style={childDiv}></div>

                <form>
                    <input className='border' placeholder='Name' onChange={changeHandler} type="text" name='name' />
                    <br />
                    <input className='border' placeholder='Phone' onChange={changeHandler} type="text" name='phone' />
                    <br />
                    <input className='border' placeholder='Subject' onChange={changeHandler} type="text" name='subject' />
                    <br />
                    <input className='border' placeholder='Message' onChange={changeHandler} type="text" name='message' />
                </form>


                <br />
                <br />
                <br />
                <br />
                <br />

                <div>
                    <p>Name: {formData.name}</p>
                    <p>Phone: {formData.phone}</p>
                    <p>Subject: {formData.subject}</p>
                    <p>message: {formData.message}</p>
                </div>
            </div>
        </>

    )
}
