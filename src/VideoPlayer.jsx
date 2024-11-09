import { useEffect, useRef } from "react";

export default function VideoPlayer({ src, isPlaying }) {

    const ref = useRef(null);




    useEffect(() => {
        console.log('from video player');

        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))


    }, [isPlaying])


    return (
        <video ref={ref} muted loop>
            <source src={src} />
        </video>
    )
}
