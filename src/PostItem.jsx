import React, { useEffect, useState } from 'react'

export default function PostItem({ post }) {
    const [text, setText] = useState('');
    const [color, setColor] = useState(null);
    const [theme, setTheme] = useState(null);


    // useEffect(() => {
    //     setText('');
    //     setColor(null);
    //     setTheme(null);
    // }, [post])

    return (
        <div>
            <h1 className='text-2xl font-bold'>{post.title}</h1>
            <br />
            <p>{post.body}</p>
            <br />

            <h2>Comment</h2>
            <br />
            <input className='border' type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}
