import { useEffect } from 'react'
import { createConnection } from './chat';

export default function ChatBox() {


    useEffect(() => {
        const conn = createConnection()

        conn.connect();

        return () => {
            conn.disconnect();
        }

    }, [])


    return (
        <div>
            <h1>Welcome To Our Chat Box</h1>
        </div>
    )
}
