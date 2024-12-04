import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPosts, storePost } from "../features/posts/postSlice";

export default function Post() {
    const { posts, isPending, isError, error } = useSelector(
        (store) => store.posts
    );

    const inputRef = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    let liComponents;
    if (isPending) {
        liComponents = <div>Data is loading ...</div>;
    }

    if (!isPending && isError) {
        liComponents = <div>{error}</div>;
    }

    if (!isPending && !isError && posts.length === 0) {
        liComponents = <div>No data found</div>;
    }

    if (!isPending && !isError && posts.length > 0) {
        liComponents = posts.map((post, index) => (
            <li key={post.id} className="text-xl mb-1 font-semibold">
                {index + 1} {post.title}
                <button className="ml-3 bg-green-600 text-white p-1">
                    Edit
                </button>
                <button
                    onClick={() => handleDelete(post.id)}
                    className="ml-3 bg-red-600 text-white p-1"
                >
                    Delete
                </button>
            </li>
        ));
    }

    const handleClick = () => {
        let inputVal = inputRef.current.value;

        dispatch(
            storePost({
                id: crypto.randomUUID(),
                title: inputVal,
            })
        );

        inputRef.current.value = "";
    };

    function handleDelete(id) {
        dispatch(deletePost(id));
    }

    return (
        <div className="flex max-w-screen-lg mx-auto">
            <div className="w-4/12">
                <div className="p-2 bg-slate-200">
                    <h2 className="text-3xl mb-5">Create Post</h2>
                    <input
                        ref={inputRef}
                        className="w-full border p-2 block"
                        type="text"
                    />
                    <button
                        onClick={handleClick}
                        className="bg-red-500 text-white py-1 px-3 mt-3"
                    >
                        Add Post
                    </button>
                </div>
            </div>
            <div className="w-8/12">
                <h2 className="text-3xl px-3 mb-5">All Post</h2>
                <ul className="px-3">{liComponents}</ul>
            </div>
        </div>
    );
}
