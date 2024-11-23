import axios from "axios";
import UserItem from "./UserItem";
import { useQuery } from "@tanstack/react-query";

const getData = async () => {
    const response = await axios.get("http://localhost:3000/users");
    return response.data;
};

export default function UserList() {
    const {
        data: users,
        error,
        isFetching,
    } = useQuery({
        queryKey: ["users"],
        queryFn: getData,
        // retry: false,
        // staleTime: 5000,
        refetchInterval: 2000,
    });

    // if (isFetching) return <div className="w-6/12">Data is loading ...</div>;
    // if (error)
    //     return <div className="w-6/12">Something error {error.message}</div>;

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
                                users.map((user) => (
                                    <UserItem key={user.id} user={user} />
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
