import axios from "axios";
import { useRef, useState } from "react";
import { useEffect } from "react";

function App() {
    const [data, setData] = useState([]);
    const [photos, setPhotos] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const btnRef = useRef(null);

    useEffect(() => {
        async function getData() {
            let response = await axios.get(
                `http://localhost:3000/photos/?_page=${pageNumber}&_per_page=10`
            );
            let data = await response.data;

            setPhotos(data);

            setData((prev) => {
                return [...prev, ...data.data];
            });
        }

        getData();

        // Intersection observer;
        let isObserve = (items) => {
            console.log(items);
        };
        let observer = new IntersectionObserver(isObserve);

        observer.observe(btnRef.current);

        return () => {
            observer.disconnect();
        };
    }, [pageNumber]);

    let handleClick = () => {
        if (photos.next) {
            setPageNumber(photos.next);
        }
    };

    return (
        <div>
            <ul>
                {data.length !== 0 &&
                    data.map((photo) => (
                        <li key={photo.id}>
                            <h3>{photo.title}</h3>
                            <img
                                width={150}
                                src={photo.thumbnailUrl}
                                alt="text"
                            />
                        </li>
                    ))}
            </ul>
            <div className="text-center">
                <button
                    ref={btnRef}
                    onClick={handleClick}
                    className="bg-green-600 my-3 py-2 px-4 rounded text-white"
                >
                    Load More
                </button>
            </div>
        </div>
    );
}

export default App;
