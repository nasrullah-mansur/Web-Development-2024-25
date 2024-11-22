export default function UserItem({ user }) {
    return (
        <div className="w-6/12 text-center">
            <div className="p-2">
                <div className="border p-2 bg-slate-100">
                    <p className="text-2xl font-semibold">{user.name}</p>
                    <p>{user.username}</p>
                    <p className="text-red-600 mb-3">{user.email}</p>
                    <button className="px-3 py-1 bg-green-600 text-white rounded">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}
