import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = async ({ queryKey }) => {
    const response = await axios.get(
        `http://localhost:3000/users/${queryKey[1]}`
    );
    return response.data;
};

export default function UserDetails({ id }) {
    const {
        data: user,
        error,
        isFetching,
    } = useQuery({
        queryKey: ["users", id],
        queryFn: getData,
    });

    if (isFetching) return <div className="w-6/12">Data is loading ...</div>;
    if (error)
        return <div className="w-6/12">Something error {error.message}</div>;

    return (
        <div className="w-3/12">
            <div className="p-2 border">
                <h1 className="text-2xl font-semibold mb-3">User Details</h1>

                <hr />

                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p>{user.username}</p>
                <p>{user.email}</p>
            </div>
        </div>
    );
}
