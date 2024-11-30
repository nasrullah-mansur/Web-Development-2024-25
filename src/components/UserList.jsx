import axios from "axios";
import UserItem from "./UserItem";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const getData = async ({ queryKey }) => {
    const response = await axios.get(
        `http://localhost:3000/users/?_page=${queryKey[1].page}&_per_page=6`
    );
    return response.data;
};

export default function UserList() {
    const [page, setPage] = useState(1);

    const { data: users, error } = useQuery({
        queryKey: ["users", { page }],
        queryFn: getData,
    });

    return (
        <>
            {!error && (
                <div className="w-6/12">
                    <div className="p-2 border">
                        <h1 className="text-2xl font-semibold mb-5">
                            All Users Here
                        </h1>

                        <div className="flex flex-wrap">
                            {users &&
                                users?.data.map((user) => (
                                    <UserItem key={user.id} user={user} />
                                ))}
                        </div>
                        <div className="flex justify-center my-6">
                            {users?.prev && (
                                <button
                                    onClick={() => setPage(users.prev)}
                                    className="bg-green-600 text-white py-2 px-3 mx-1"
                                >
                                    Prev
                                </button>
                            )}
                            {users?.next && (
                                <button
                                    onClick={() => setPage(users.next)}
                                    className="bg-green-600 text-white py-2 px-3 mx-1"
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
